import { useMemo } from 'react';

export const StarIcon: React.FC<IconProps> = (props) => {
  const { color = 'currentColor', size = '1em' } = props;
  const _size = useMemo(() => (typeof size === 'string' ? size : `${size}px`), [size]);
  return (
    <svg height={_size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.15709 16.7035C3.88934 16.924 3.60978 16.9319 3.31841 16.7271C3.02704 16.5224 2.93648 16.2546 3.04673 15.9239L4.60595 10.8446L0.589768 7.96239C0.306272 7.75764 0.215711 7.49383 0.318084 7.17096C0.420458 6.84809 0.644891 6.68666 0.991386 6.68666H5.97618L7.55903 1.39474C7.60628 1.22149 7.69684 1.09156 7.83072 1.00494C7.96459 0.918312 8.1024 0.875 8.24415 0.875C8.3859 0.875 8.52371 0.918312 8.65758 1.00494C8.79145 1.09156 8.88201 1.22149 8.92926 1.39474L10.5121 6.68666H15.4969C15.8434 6.68666 16.0678 6.84809 16.1702 7.17096C16.2726 7.49383 16.182 7.75764 15.8985 7.96239L11.8823 10.8446L13.4416 15.9239C13.5518 16.2546 13.4613 16.5224 13.1699 16.7271C12.8785 16.9319 12.599 16.924 12.3312 16.7035L8.24415 13.585L4.15709 16.7035Z"
        fill={color}
      />
    </svg>
  );
};