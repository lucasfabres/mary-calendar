import { cva, type VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

const variants = cva(
  `
    hover:scale-105
    active:scale-95

    hover:translate-y-[1px]
    active:translate-y-[-1px]

    transform-gpu

    transition
`,
  {
    variants: {
      variant: {
        default: `
      bg-indigo-600
      hover:bg-indigo-700
      active:bg-indigo-800
      
      text-white

      rounded
      shadow
  
      px-4 py-2
    `,
      },
    },
  }
);

type ButtonProps = VariantProps<typeof variants> & {
  onClick?: () => void;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const styles = variants(props);

  return (
    <button className={styles} {...props}>
      {props.children}
    </button>
  );
};
