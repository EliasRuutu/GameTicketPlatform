import { ThemeColor } from '@theme/color';

export const RouletteKind: {
  key: string;
  color?: string;
  label?: string;
  image?: string;
  value?: number;
}[] = [
  {
    key: '7',
    label: '15%',
    color: '#CB5DAB',
    image: '/assets/imgs/illustration/coins/15_.webp',
    value: 15,
  },
  {
    key: '5',
    label: '5%',
    color: '#E8BA6F',
    image: '/assets/imgs/illustration/coins/5_.webp',
    value: 5,
  },
  {
    key: '4',
    label: '2.50 VC',
    color: '#F6373C',
    image: '/assets/imgs/illustration/coins/250vc.webp',
    value: 2.5,
  },
  {
    key: '6',
    label: '10%',
    color: '#65D8EA',
    image: '/assets/imgs/illustration/coins/10_.webp',
    value: 10,
  },
  {
    key: '0',
    label: 'VACÍO',
    color: '#73778A',
    image: '/assets/imgs/illustration/coins/blank.webp',
    value: 0,
  },
  {
    key: '8',
    label: '20%',
    color: '#4C4584',
    image: '/assets/imgs/illustration/coins/20_.webp',
    value: 20,
  },
  {
    key: '1',
    label: '0.25 VC',
    color: '#519659',
    image: '/assets/imgs/illustration/coins/025vc..webp',
    value: 0.25,
  },
  {
    key: '3',
    label: '1.00 VC',
    color: '#FE8370',
    image: '/assets/imgs/illustration/coins/100vc.webp',
    value: 1,
  },
  {
    key: '2',
    label: '0.50 VC',
    color: '#FCF892',
    image: '/assets/imgs/illustration/coins/050vc.webp',
    value: 2,
  },
];
