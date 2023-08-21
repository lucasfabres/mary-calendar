import { addDays, format, getMonth, getYear, startOfWeek } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';
import { MonthPicker } from './MonthPicker';
import { useLayoutEffect, useState } from 'react';
import { CalendarChangeEvent } from '../organisms/Calendar';

type HeaderProps = {
  reference: Date;

  onChange: (event: CalendarChangeEvent) => void;
};

export const Header = (props: HeaderProps) => {
  const [month, setMonth] = useState(getMonth(props.reference));
  const [year, setYear] = useState(getYear(props.reference));

  const weekStart = startOfWeek(new Date());

  useLayoutEffect(() => {
    props.onChange({
      month,
      year,
    });
  }, [month, year]);

  return (
    <div className='flex flex-col w-full justify-center gap-6'>
      {/* Year / month */}
      <div className='relative flex w-full gap-1 items-end justify-center'>
        <MonthPicker value={month} onChange={setMonth} />

        <input
          type='number'
          min={0}
          max={2100}
          value={getYear(props.reference)}
          onChange={(event) => setYear(Number(event.target.value))}
          className='text-sm text-zinc-400 bg-gray-50 w-[6ch] outline-none'
        />
      </div>

      <div className='grid grid-cols-7'>
        {Array.from({ length: 7 }).map((_, index) => {
          const day = addDays(weekStart, index);

          return (
            <div
              key={index}
              className='flex justify-center items-center font-semibold text-zinc-500 capitalize text-center'
            >
              {format(day, 'EEE', { locale }).slice(0, 3)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
