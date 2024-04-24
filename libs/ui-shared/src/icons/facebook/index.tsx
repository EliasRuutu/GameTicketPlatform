import { useMemo } from 'react';

export const FacebookIcon: React.FC<IconProps> = (props) => {
  const { color = 'currentColor', size = '1em' } = props;
  const _size = useMemo(() => (typeof size === 'string' ? size : `${size}px`), [size]);
  return (
    <svg height={_size} viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.4862 49.8892C15.6742 49.1626 8.76402 44.9092 4.49006 38.1966C3.78815 37.0942 2.49617 34.4013 2.09055 33.1952C1.13871 30.365 0.785547 28.1509 0.782254 24.9929C0.77923 22.1055 1.02151 20.3469 1.78124 17.7411C3.75462 10.9727 9.162 4.87704 15.6633 2.09198C21.8885 -0.574806 28.743 -0.695908 34.9394 1.75142C39.6131 3.59733 43.7211 6.94214 46.5917 11.2391C47.5675 12.6996 48.8492 15.3631 49.4398 17.1574C50.3342 19.8751 50.6816 22.0697 50.6801 24.9929C50.6779 29.1473 49.8231 32.7021 47.9382 36.3961C45.2742 41.6169 40.5451 45.954 35.1619 48.1134C34.4856 48.3846 32.7564 48.9997 32.67 48.9997C32.6528 48.9997 32.6387 44.836 32.6387 39.7471V30.4945H35.3395C36.8249 30.4945 38.0404 30.4607 38.0406 30.4195C38.0414 30.2999 38.7321 24.9771 38.7935 24.6193L38.849 24.2956L35.7689 24.2692L32.6887 24.2427L32.6619 21.849C32.6318 19.1696 32.71 18.6587 33.2429 18.0518C33.795 17.4229 34.1178 17.3519 36.6899 17.2932L38.9905 17.2408V14.44V11.6392L38.3403 11.5565C37.9827 11.511 36.5423 11.466 35.1394 11.4565C32.7558 11.4403 32.5334 11.4542 31.7439 11.67C28.9536 12.4323 27.1448 14.2771 26.4287 17.0907C26.2385 17.8382 26.2048 18.3216 26.1496 21.0918L26.0869 24.2427L23.4112 24.2694L20.7354 24.296V27.3936V30.4912L23.4112 30.5179L26.0869 30.5445L26.1124 40.2723L26.1379 50L25.2622 49.9865C24.7805 49.979 23.9813 49.9353 23.4862 49.8892L23.4862 49.8892Z"
        fill={color}
      />
    </svg>
  );
};
