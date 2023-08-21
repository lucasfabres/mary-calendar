import { cva, type VariantProps } from 'class-variance-authority';
import { Status } from './Status';

const variants = cva(
  ` 
    flex
    flex-col
    group

    text-zinc-600
    font-semibold

    p-3

    h-20
    
    hover:scale-[1.033]
    active:scale-[0.967]

    hover:border

    cursor-pointer
    rounded
    transition
    transform-gpu
    select-none
    shadow-sm
  `,

  {
    variants: {
      isToday: {
        true: 'bg-blue-500 text-zinc-50 hover:brightness-95',
        false: 'bg-gray-50',
      },
      disabled: {
        true: 'opacity-30 pointer-events-none',
      },
    },
  }
);

type CellProps = VariantProps<typeof variants> & {
  day: number;
  isWorkDay: boolean;
  noStatus?: boolean;
};

export const Cell = (props: CellProps) => {
  const styles = variants(props);
  const status = props.isWorkDay ? 'sad' : 'happy';

  return (
    <div className={styles}>
      <span className='text-zinc-700 flex w-full h-full items-start justify-center md:justify-start leading-3 md:leading-none text-base md:text-lg'>
        {props.day}
      </span>

      <div className='flex w-full h-full justify-center items-end md:justify-end'>
        <Status status={props.noStatus ? 'none' : status} />
      </div>
    </div>
  );
};
