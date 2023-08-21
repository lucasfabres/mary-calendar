import {
  addDays,
  differenceInDays,
  endOfMonth,
  getDate,
  getDay,
  getDaysInMonth,
  isToday,
  setDate,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns';
import { Cell } from '../atoms/Cell';

type DaysProps = {
  reference: Date;
  startOfWork: Date;
  displayedWeeks?: number;
};

export const Days = ({ displayedWeeks = 6, ...props }: DaysProps) => {
  const total = displayedWeeks * 7;

  const daysInCurrentMonth = getDaysInMonth(props.reference);

  const monthStart = startOfMonth(props.reference);
  const monthFirstDayWeekDay = getDay(monthStart);

  const prevRest = monthFirstDayWeekDay;
  const nextRest = total - daysInCurrentMonth - prevRest;

  return (
    <div className='grid grid-cols-7 gap-1 w-full h-fit'>
      {/* Prev rest */}
      {Array.from({ length: prevRest }).map((_, index) => {
        // Get end of past month
        const pastMonthEnd = endOfMonth(subMonths(monthStart, 1));

        const day = getDate(subDays(pastMonthEnd, prevRest)) + index + 1;
        const dayAsDate = setDate(pastMonthEnd, day);

        const noStatus = dayAsDate < props.startOfWork;

        const distance = differenceInDays(dayAsDate, props.startOfWork);

        return (
          <Cell
            disabled
            key={day}
            day={day}
            isToday={false}
            isWorkDay={distance % 8 <= 4}
            noStatus={noStatus}
          />
        );
      })}

      {Array.from({ length: daysInCurrentMonth }).map((_, index) => {
        const day = index + 1;
        const dayAsDate = addDays(monthStart, index);
        const distance = differenceInDays(dayAsDate, props.startOfWork);

        const noStatus = dayAsDate < props.startOfWork;

        return (
          <Cell
            key={day}
            day={day}
            isToday={isToday(dayAsDate)}
            isWorkDay={distance % 8 < 4}
            noStatus={noStatus}
          />
        );
      })}

      {/* Next rest */}
      {Array.from({ length: nextRest }).map((_, index) => {
        const day = index + 1;

        const dayAsDate = addDays(monthStart, daysInCurrentMonth + index);
        const distance = differenceInDays(dayAsDate, props.startOfWork);

        const noStatus = dayAsDate < props.startOfWork;

        return (
          <Cell
            disabled
            key={day}
            day={day}
            isToday={false}
            isWorkDay={distance % 8 < 4}
            noStatus={noStatus}
          />
        );
      })}
    </div>
  );
};
