import { PropsWithChildren } from 'react';
import { Button } from '../atoms/Button';

import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

type SelectorProps = {
  onNext: (value: number) => void;
  onPrevious: (value: number) => void;

  value: number;
};

export const Selector = (props: PropsWithChildren<SelectorProps>) => {
  return (
    <div className='flex gap-4 p-2 justify-center items-center'>
      <Button onClick={() => props.onPrevious(props.value - 1)}>
        <HiChevronLeft />
      </Button>

      <div className='flex-1 flex items-center justify-center'>
        {props.children}
      </div>

      <Button onClick={() => props.onNext(props.value + 1)}>
        <HiChevronRight />
      </Button>
    </div>
  );
};
