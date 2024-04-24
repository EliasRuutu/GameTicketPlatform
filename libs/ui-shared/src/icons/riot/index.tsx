import { useMemo } from 'react';

export const RiotIcon: React.FC<IconProps> = (props) => {
  const { color = 'currentColor', size = '1em' } = props;
  const _size = useMemo(() => (typeof size === 'string' ? size : `${size}px`), [size]);
  return (
    <svg height={_size} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.7236 2.81286C27.212 3.04895 26.2493 3.49489 25.5842 3.8039C24.9191 4.11292 20.0215 6.37536 14.7008 8.83147C0.0688092 15.5861 0.822463 15.2183 0.922739 15.5539C0.971482 15.7169 1.90224 19.2408 2.99096 23.3849C4.07967 27.529 5.1708 31.673 5.41563 32.5939C5.66046 33.5148 6.29374 35.9427 6.82284 37.9891C7.35195 40.0356 7.80161 41.7332 7.82189 41.7619C7.85351 41.8061 12.951 41.2142 13.0679 41.1526C13.0908 41.1407 12.9464 39.3355 12.7471 37.1413C12.5479 34.9474 12.2939 32.0637 12.1827 30.7335C12.0714 29.4033 11.9018 27.5439 11.8058 26.6014C11.7098 25.6591 11.6311 24.7704 11.6311 24.6267C11.6311 24.3683 13.2428 23.6323 13.4202 23.8098C13.5093 23.8989 13.8169 25.5575 14.9798 32.2219C16.1495 38.9251 16.4505 40.5452 16.5435 40.638C16.5963 40.6908 18.0871 40.5545 19.8561 40.3349C21.6252 40.1152 23.4912 39.8892 24.0028 39.8326C25.4815 39.6689 25.5071 39.6518 25.448 38.8734C25.3483 37.5605 24.2794 25.3419 24.0943 23.399C23.9929 22.3325 23.9098 21.3946 23.9098 21.3148C23.9098 21.1723 25.5948 20.3569 25.6908 20.4529C25.7179 20.4801 26.0818 22.4275 26.4995 24.7806C26.917 27.1338 27.3495 29.5615 27.4604 30.1754C27.5713 30.7893 27.9744 33.0497 28.3564 35.1985L29.0507 39.1054L29.8754 39.0498C30.9429 38.9778 38.0952 38.0978 38.1629 38.0301C38.1914 38.0016 38.1354 37.1436 38.0387 36.1233C37.9419 35.1031 37.5702 30.8777 37.2127 26.7337C36.8551 22.5896 36.515 18.898 36.457 18.53C36.3541 17.8775 36.3736 17.8515 37.2467 17.4736C38.2896 17.0221 38.2846 17.0173 38.583 18.7339C38.6987 19.399 39.0792 21.5757 39.4286 23.5709C39.7782 25.5662 40.3685 28.9568 40.7405 31.1056C41.1126 33.2544 41.5013 35.4311 41.6041 35.9427C41.7068 36.4543 41.8244 37.0405 41.8654 37.2455C41.939 37.6144 41.9835 37.6128 46.4128 37.0693L50.8857 36.5207V22.1466V7.77234L50.1881 7.57403C48.0916 6.97795 29.2975 2.36394 29.003 2.37306C28.811 2.37883 28.2352 2.57678 27.7236 2.81286ZM44.7464 40.7705C42.1372 41.102 39.0814 41.4774 37.9559 41.6048C36.8303 41.7325 35.449 41.9075 34.8862 41.994C34.3234 42.0806 32.9421 42.2549 31.8165 42.3814C30.691 42.5081 29.745 42.6292 29.7143 42.6506C29.6838 42.6722 29.7552 43.2442 29.8731 43.922C30.0501 44.9381 30.1578 45.1703 30.4871 45.2459C30.7066 45.2961 35.2397 46.0525 40.5605 46.9267C45.8812 47.8009 50.3812 48.5602 50.5602 48.6139C50.8636 48.7049 50.8857 48.4205 50.8857 44.42V40.1286L50.1881 40.1483C49.8045 40.1591 47.3556 40.4391 44.7464 40.7705Z"
        fill={color}
      />
    </svg>
  );
};
