import { useMemo } from 'react';

export const EpicIcon: React.FC<IconProps> = (props) => {
  const { color = 'currentColor', size = '1em' } = props;
  const _size = useMemo(() => (typeof size === 'string' ? size : `${size}px`), [size]);
  return (
    <svg height={_size} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.94745 0.542166C6.09371 0.710262 5.86407 0.771651 5.61401 0.898366C5.16227 1.12745 4.84223 1.55484 4.63958 2.19958L4.45654 2.7819V21.7851V40.7883L4.68378 41.251C4.80873 41.5055 5.02568 41.7998 5.16589 41.9051C5.37826 42.0646 7.32406 42.931 9.15713 43.6825C9.40019 43.7821 10.3042 44.1611 11.1659 44.5247C12.0277 44.8883 12.9407 45.2721 13.1948 45.3776C14.2458 45.8137 14.6446 45.9813 15.9469 46.5347C16.6982 46.8539 17.5117 47.197 17.7548 47.2971C17.9978 47.3971 18.4498 47.5856 18.7592 47.7158C22.5461 49.3098 24.5253 50.0959 25.2128 50.2791L26.0419 50.5L26.5386 50.3313C26.8119 50.2386 27.9936 49.7576 29.1648 49.2626C30.3359 48.7675 31.502 48.2764 31.7561 48.1712C32.0103 48.066 32.4351 47.8894 32.7002 47.779C32.9654 47.6685 33.3902 47.4919 33.6444 47.3868C33.8985 47.2815 34.938 46.8439 35.9545 46.4143C36.9709 45.9847 38.0105 45.5465 38.2646 45.4406C39.2324 45.037 39.706 44.8399 40.1529 44.6545C41.0993 44.262 45.6056 42.371 45.8378 42.2688C46.3395 42.0482 46.8639 41.6034 47.0087 41.2755C47.326 40.5567 47.3311 40.2058 47.3057 21.1423C47.2836 4.62645 47.2679 2.6596 47.1545 2.29978C46.816 1.22524 46.2955 0.797364 45.0678 0.583869C44.6799 0.516373 39.5524 0.494357 25.8236 0.501187C15.5301 0.506329 7.03584 0.52473 6.94745 0.542166ZM38.684 6.28098C40.0364 6.4764 40.9318 7.2497 41.2518 8.49845C41.3533 8.89491 41.3782 9.47658 41.3782 11.4514V13.9106H39.8917H38.4052V11.8189C38.4052 9.44018 38.3693 9.24741 37.8884 9.04645C37.5097 8.88824 36.5361 8.89314 36.195 9.05497C35.6975 9.29104 35.7134 9.05473 35.7134 16.2007C35.7134 19.7803 35.7416 22.8097 35.7759 22.9326C35.8838 23.3189 36.2536 23.472 37.0794 23.472C37.9985 23.472 38.2583 23.3395 38.3936 22.8024C38.4518 22.5713 38.4856 21.6092 38.4856 20.1827V17.9282H39.9721H41.4586L41.4572 20.5598C41.4557 23.4466 41.3994 23.9603 41.0053 24.6845C40.6057 25.4185 39.9669 25.8643 38.9895 26.0913C38.239 26.2655 35.3498 26.2164 34.7456 26.019C33.8224 25.7175 33.171 25.0664 32.8413 24.1153L32.6602 23.593L32.6372 16.5622C32.6217 11.822 32.6425 9.34898 32.701 8.97124C32.9279 7.50434 33.8712 6.52107 35.275 6.28837C35.8823 6.18761 38.0064 6.18303 38.684 6.28098ZM16.9513 7.76371V9.16987H15.1032H13.2551V11.9018V14.6338H15.0228H16.7906V16.04V17.4461H15.0228H13.2551V20.3373V23.2285L15.1233 23.2501L16.9914 23.2716L17.0135 24.6577L17.0354 26.0438H13.6186H10.2017V16.2007V6.35756H13.5765H16.9513V7.76371ZM24.6328 6.57049C25.5764 6.88699 26.1584 7.43427 26.5307 8.3547C26.7107 8.80009 26.7144 8.87345 26.738 12.4128C26.7633 16.2126 26.7419 16.5163 26.3979 17.2584C25.8338 18.4752 24.6644 18.9728 22.3692 18.9728H21.451V22.5083V26.0438H19.9243H18.3976V16.1945V6.3451L21.2702 6.37563C23.9032 6.4036 24.1837 6.41983 24.6328 6.57049ZM31.0932 16.2007V26.0438H29.5665H28.0398V16.2007V6.35756H29.5665H31.0932V16.2007ZM21.451 12.6652V16.2408H22.1767C23.0792 16.2408 23.4195 16.1158 23.5832 15.724C23.7535 15.3165 23.7565 10.021 23.5866 9.61454C23.415 9.20378 23.1171 9.08952 22.2183 9.08952H21.451V12.6652ZM14.1551 30.7142C14.5688 30.8021 15.3099 31.1406 15.6154 31.3812C15.7592 31.4945 15.7474 31.5234 15.3569 32.014C14.8581 32.6409 14.7346 32.7514 14.6627 32.635C14.6335 32.5878 14.4326 32.4596 14.2162 32.3499C13.7598 32.1185 13.0613 32.0804 12.7006 32.267C12.3733 32.4362 11.991 32.9036 11.8939 33.2532C11.5488 34.4959 12.3822 35.5492 13.6105 35.4225C14.2633 35.3551 14.38 35.2666 14.38 34.8395V34.4807H13.7774H13.1747V33.8379V33.1951H14.5407H15.9067V34.603V36.0109L15.529 36.2505C14.397 36.9684 12.8929 37.0791 11.7839 36.5263C11.2051 36.2378 10.6581 35.6756 10.3884 35.0922C10.1851 34.6521 10.1615 34.5138 10.1615 33.7576C10.1615 32.999 10.1839 32.8683 10.3834 32.4622C11.071 31.0621 12.5547 30.3744 14.1551 30.7142ZM39.5934 30.707C40.2249 30.8095 40.865 31.0474 41.1706 31.2932L41.4049 31.4817L41.0149 32.0371C40.8004 32.3426 40.6173 32.6039 40.608 32.6178C40.5986 32.6317 40.3618 32.5275 40.0817 32.386C39.4126 32.0483 38.6787 31.9714 38.4583 32.216C38.129 32.5814 38.3949 32.7667 39.758 33.1221C40.1357 33.2206 40.5912 33.406 40.8026 33.5473C41.6977 34.1455 41.804 35.4251 41.0235 36.2057C40.5703 36.6589 40.0266 36.8414 39.1284 36.8419C38.129 36.8424 37.3386 36.5695 36.4434 35.9148C36.4029 35.8852 36.5881 35.608 36.855 35.2987L37.3401 34.7365L37.6919 34.9714C38.4987 35.5104 39.7076 35.6145 39.882 35.1601C39.9745 34.9191 39.7792 34.7284 39.3073 34.5988C37.1071 33.9942 36.7178 33.6926 36.7178 32.5925C36.7178 31.6183 37.3327 30.9092 38.3525 30.7075C38.8249 30.614 39.02 30.614 39.5934 30.707ZM20.6384 30.9172C20.8459 31.3727 23.058 36.6492 23.058 36.6887C23.058 36.7117 22.6653 36.7306 22.1852 36.7306H21.3124L21.1139 36.1882L20.9153 35.6458L19.785 35.6236L18.6546 35.6013L18.433 36.1659L18.2115 36.7306H17.3393H16.467L16.591 36.4293C16.6592 36.2636 17.2285 34.9076 17.8561 33.4161L18.9973 30.7042H19.7693C20.5265 30.7042 20.5432 30.7083 20.6384 30.9172ZM26.1301 31.9159L26.8244 33.0472L27.0157 32.7395C27.1209 32.5702 27.4364 32.0611 27.7167 31.6081L28.2264 30.7845H29.0973H29.9683V33.7576V36.7306H29.1664H28.3645L28.3428 35.0441L28.3211 33.3576L27.6021 34.4831C27.2066 35.102 26.848 35.5967 26.8051 35.5824C26.7623 35.5682 26.4169 35.0719 26.0376 34.4796L25.348 33.4027L25.3263 35.0667L25.3046 36.7306H24.5027H23.7008V33.7576V30.7845H24.5683H25.4359L26.1301 31.9159ZM35.9143 31.4675V32.1505H34.3073H32.7002V32.5906V33.0307L34.1265 33.0526L35.5527 33.0746L35.576 33.7375L35.5994 34.4004H34.1498H32.7002V34.8825V35.3646H34.3073H35.9143V36.0476V36.7306H33.5038H31.0932V33.7576V30.7845H33.5038H35.9143V31.4675ZM19.4597 33.5366C19.3171 33.9012 19.2006 34.2266 19.2008 34.2598C19.201 34.2929 19.4689 34.32 19.7963 34.32H20.3915L20.1036 33.5969C19.9452 33.1991 19.7939 32.8737 19.7673 32.8737C19.7406 32.8737 19.6022 33.172 19.4597 33.5366ZM34.3876 43.7937C34.2199 43.8877 25.858 46.6246 25.7096 46.634C25.5884 46.6417 17.5781 43.9187 17.353 43.7933C17.2867 43.7563 21.1195 43.7261 25.8703 43.7261C30.6211 43.7261 34.4539 43.7565 34.3876 43.7937Z"
        fill={color}
      />
    </svg>
  );
};
