import { setMonth, setYear } from 'date-fns';
import { Header } from '../atoms/Header';
import { Days } from '../molecules/Days';

type CalendarProps = {
  month: number;
  year: number;

  onChange: (value: CalendarChangeEvent) => void;

  startOfWork: Date;
};

export type CalendarChangeEvent = {
  month: number;
  year: number;
};

export const Calendar = (props: CalendarProps) => {
  const preview = setMonth(setYear(0, props.year), props.month);

  return (
    <div
      className='
        flex
        flex-col

        w-full md:w-8/12 lg:w-6/12 xl:w-4/12
        
        bg-gray-50
        rounded-lg
        shadow-lg
        p-4 md:p-6
        gap-6
        
        transition
        border
      '
    >
      <Header onChange={props.onChange} reference={preview} />

      {/* Draw all days of month 7 by 7 */}
      <Days startOfWork={props.startOfWork} reference={preview} />
    </div>
  );
};
