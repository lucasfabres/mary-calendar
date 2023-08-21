import { Listbox } from '@headlessui/react';
import { format, getMonth } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';
import { useState } from 'react';

type MonthPickerProps = {
  value: number;
  onChange: (value: number) => void;
};

const getMonths = () => {
  const firstMonth = new Date(0, 0, 1);

  return Array.from({ length: 12 }).map((_, index) => {
    const month = new Date(firstMonth);

    month.setMonth(index);

    return month;
  });
};

const f = (month: Date) => format(month, 'LLLL', { locale });

export const MonthPicker = (props: MonthPickerProps) => {
  const [value, setValue] = useState(props.value);

  const onChange = (value: number) => {
    setValue(value);
    props.onChange(value);
  };

  const currentMonth = new Date(0, value, 1);

  return (
    <Listbox value={value} onChange={onChange}>
      <Listbox.Button>
        <h2 className='text-4xl font-semibold text-zinc-700 capitalize hover:drop-shadow-md transition'>
          {f(currentMonth)}
        </h2>
      </Listbox.Button>
      <Listbox.Options
        className={`
          absolute 
          top-[calc(100%_+_8px)] left-0
          z-10 
          max-h-60 min-w-full
          overflow-auto rounded shadow border
          bg-gray-50
          `}
      >
        {getMonths().map((date) => {
          const month = getMonth(date);

          return (
            <Listbox.Option
              key={month}
              value={month}
              className='text-zinc-600 font-semibold text-lg capitalize px-4 py-2 hover:brightness-95 bg-gray-50 cursor-pointer transition'
            >
              {f(date)}
            </Listbox.Option>
          );
        })}
      </Listbox.Options>
    </Listbox>
  );
};
