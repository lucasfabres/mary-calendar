import { cva, type VariantProps } from 'class-variance-authority';
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from 'react-icons/hi';

const variants = cva(
  'w-min h-min bg-gray-50 shadowmd rounded-full group-hover:scale-150 transition transform-gpu',
  {
    variants: {
      status: {
        happy: 'text-green-600',
        sad: 'text-red-600',
        none: '',
      },
    },
  }
);

type StatusProps = VariantProps<typeof variants>;

const icons: Record<NonNullable<StatusProps['status']>, JSX.Element> = {
  happy: <HiOutlineEmojiHappy />,
  sad: <HiOutlineEmojiSad />,
  none: <></>,
};

export const Status = (props: StatusProps) => {
  const styles = variants(props);

  return <i className={styles}>{icons[props.status || 'happy']}</i>;
};
