import { useMemo } from 'react';

export const LogoIcon: React.FC<IconProps> = (props) => {
  const { color = 'currentColor', size = '1em' } = props;
  const _size = useMemo(() => (typeof size === 'string' ? size : `${size}px`), [size]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={_size} viewBox="0 0 2312 487" version="1.1">
      <path
        d="M 238.500 0.614 C 186.401 6.085, 144.092 22.989, 105.712 53.667 C 90.088 66.155, 86.512 70.798, 90.250 73.738 C 90.938 74.279, 98.138 77.103, 106.251 80.014 L 121.002 85.307 126.751 80.675 C 138.988 70.816, 157.922 59, 161.483 59 C 162.343 59, 184.241 66.650, 210.146 76 C 236.051 85.350, 257.657 93, 258.160 93 C 258.662 93, 280.283 85.350, 306.205 76 C 332.127 66.650, 354.273 59.009, 355.418 59.020 C 358.612 59.051, 375.045 69.506, 391.638 82.063 L 395.776 85.195 410.138 79.975 C 418.037 77.104, 425.063 74.305, 425.750 73.755 C 429.517 70.742, 425.760 65.760, 410.407 53.409 C 376.924 26.475, 337.911 9.529, 293.039 2.429 C 283.842 0.974, 246.810 -0.258, 238.500 0.614 M 1.005 85.494 C 0.323 86.316, -0.031 88.004, 0.219 89.244 C 0.468 90.485, 57.923 168.225, 127.896 262 C 239.780 411.943, 255.459 432.537, 257.938 432.804 C 260.610 433.093, 267.406 424.195, 388.462 261.918 C 458.700 167.763, 516.409 90.097, 516.705 89.326 C 517.367 87.601, 514.262 84, 512.112 84 C 510.566 84, 334.191 147.367, 330.750 149.159 C 328.421 150.372, 328.421 155.630, 330.750 156.835 C 331.712 157.333, 337.900 158.969, 344.500 160.470 C 357.450 163.417, 359.912 164.722, 358.422 167.851 C 357.354 170.094, 264.062 272.551, 260.483 275.411 C 258.399 277.076, 257.872 277.140, 256.378 275.911 C 255.088 274.849, 169.826 181.782, 158.748 169.344 C 155.095 165.242, 157.446 163.644, 171.697 160.544 C 178.739 159.012, 185.287 157.068, 186.250 156.224 C 188.653 154.118, 188.443 151.334, 185.750 149.584 C 182.854 147.703, 6.310 84, 3.992 84 C 3.031 84, 1.687 84.672, 1.005 85.494 M 20.608 192.250 C 16.333 198.939, 13.405 247.798, 15.940 270.158 C 21.174 316.332, 39.886 361.232, 68.701 396.761 C 101.404 437.085, 147.867 467.045, 197.023 479.506 C 216.141 484.352, 238.867 487.436, 241.854 485.590 C 244.897 483.709, 242.732 479.220, 231.721 464.588 L 220.500 449.676 210.500 447.423 C 196.767 444.328, 181.873 439, 166.796 431.788 L 154.091 425.711 104.373 359.106 C 48.718 284.548, 53.501 292.538, 50.443 269.011 C 49.302 260.233, 48.919 251.121, 49.159 238.472 L 49.500 220.443 38.261 205.222 C 29.003 192.682, 26.584 190, 24.534 190 C 23.047 190, 21.468 190.905, 20.608 192.250 M 478.310 204.895 L 467.144 219.790 467.187 240.645 C 467.217 255.026, 466.730 264.760, 465.617 272 C 462.418 292.824, 466.804 285.699, 412.112 358.927 L 362.500 425.354 353.157 430.138 C 339.645 437.055, 324.956 442.557, 309.254 446.580 C 301.689 448.518, 295.227 450.418, 294.893 450.802 C 289.618 456.862, 273 480.425, 273 481.842 C 273 486.640, 277.494 487.149, 295.500 484.389 C 395.876 469.006, 476.817 391.749, 496.966 292.093 C 502.833 263.070, 503.324 232.303, 498.386 203 C 496.446 191.488, 495.738 190, 492.203 190 C 489.856 190, 487.922 192.073, 478.310 204.895"
        stroke="none"
        fill="#fc0434"
        fillRule="evenodd"
      />
      <path
        d="M 633.260 98.750 C 633.541 100.263, 644.959 165.510, 658.635 243.745 L 683.500 385.989 733 385.970 L 782.500 385.952 858.349 242.028 C 900.066 162.870, 934.266 97.744, 934.349 97.302 C 934.432 96.861, 908.063 96.384, 875.750 96.242 C 843.438 96.100, 817 96.325, 817.001 96.742 C 817.001 97.159, 818.802 99.247, 821.003 101.381 C 823.204 103.516, 826.448 108.196, 828.212 111.780 C 830.965 117.372, 831.479 119.623, 831.829 127.646 C 832.062 132.964, 831.730 139.045, 831.059 141.748 C 829.795 146.844, 744.766 325.819, 744.299 324.367 C 744.146 323.890, 737.955 274.225, 730.543 214 C 723.130 153.775, 716.798 102.588, 716.471 100.250 L 715.877 96 674.314 96 L 632.750 96 633.260 98.750 M 958.533 98.250 C 957.690 102.003, 908 384.019, 908 385.050 C 908 385.657, 948.759 385.915, 1019.230 385.754 L 1130.459 385.500 1135.171 359 C 1137.762 344.425, 1140.123 331.262, 1140.416 329.750 L 1140.950 327 1067.862 327 L 994.773 327 995.207 324.250 C 995.445 322.738, 997.632 310.137, 1000.065 296.250 L 1004.490 271 1071.178 271 C 1133.826 271, 1137.897 270.894, 1138.383 269.250 C 1138.668 268.288, 1140.955 255.800, 1143.466 241.500 C 1145.977 227.200, 1148.258 214.488, 1148.535 213.250 L 1149.038 211 1082.167 211 L 1015.295 211 1019.953 183.750 L 1024.610 156.500 1095.805 156.243 C 1134.962 156.102, 1167 155.629, 1167 155.193 C 1167 154.756, 1169.248 141.821, 1171.996 126.449 C 1174.743 111.077, 1176.993 97.938, 1176.996 97.250 C 1176.999 96.258, 1154.539 96, 1068.019 96 L 959.038 96 958.533 98.250 M 1221.097 101.250 C 1220.522 104.138, 1209.225 167.925, 1195.992 243 C 1182.758 318.075, 1171.672 380.963, 1171.354 382.750 L 1170.777 386 1208.821 386 C 1244.189 386, 1246.902 385.877, 1247.385 384.250 C 1247.671 383.288, 1255.171 340.875, 1264.052 290 C 1272.933 239.125, 1280.277 197.416, 1280.371 197.312 C 1280.465 197.209, 1295.839 239.509, 1314.536 291.312 L 1348.529 385.500 1398.454 385.500 L 1448.379 385.500 1473.633 243 C 1487.522 164.625, 1498.911 99.487, 1498.943 98.250 L 1499 96 1461.108 96 L 1423.217 96 1422.697 98.250 C 1422.410 99.487, 1414.626 144.027, 1405.398 197.227 C 1396.171 250.427, 1388.487 293.821, 1388.324 293.658 C 1388.162 293.495, 1372.490 250.498, 1353.498 198.110 C 1334.506 145.721, 1318.323 101.315, 1317.535 99.429 L 1316.102 96 1269.122 96 L 1222.142 96 1221.097 101.250 M 1550.633 99.250 C 1550.309 101.037, 1539.007 165.050, 1525.517 241.500 C 1512.028 317.950, 1500.732 381.738, 1500.416 383.250 L 1499.841 386 1538.171 385.997 L 1576.500 385.994 1601.778 242.747 C 1615.681 163.961, 1627.043 98.713, 1627.028 97.750 C 1627.002 96.115, 1624.518 96, 1589.111 96 L 1551.223 96 1550.633 99.250 M 1679.642 96.770 C 1679.104 97.641, 1653.404 242.875, 1649.430 267.500 C 1646.073 288.308, 1645.137 313.378, 1647.332 323.678 C 1650.479 338.442, 1656.799 350.384, 1666.884 360.625 C 1681.381 375.346, 1700.515 384.411, 1728.264 389.705 C 1735.669 391.118, 1742.851 391.466, 1764.500 391.460 C 1788.214 391.453, 1792.923 391.181, 1803.192 389.228 C 1845.524 381.176, 1872.631 361.973, 1888.917 328.500 C 1897.376 311.113, 1902.002 293.993, 1909.498 252.332 C 1920.868 189.140, 1936.660 97.434, 1936.289 96.750 C 1935.724 95.710, 1861.241 95.801, 1860.597 96.843 C 1860.310 97.307, 1852.614 140.074, 1843.494 191.882 C 1834.374 243.690, 1825.781 289.981, 1824.399 294.752 C 1816.466 322.127, 1801.522 334.258, 1774 335.666 C 1739.852 337.413, 1720.017 320.052, 1722.414 290.512 C 1722.772 286.098, 1730.409 240.865, 1739.384 189.993 C 1748.360 139.122, 1755.519 97.162, 1755.293 96.750 C 1754.749 95.756, 1680.256 95.777, 1679.642 96.770 M 1980.500 97.250 C 1980.260 97.938, 1968.666 163.075, 1954.736 242 L 1929.409 385.500 1967.359 385.762 C 1988.232 385.906, 2005.448 385.885, 2005.618 385.715 C 2005.788 385.545, 2013.920 339.442, 2023.689 283.262 C 2033.458 227.083, 2041.560 181.227, 2041.693 181.360 C 2041.826 181.493, 2043.745 223.878, 2045.958 275.551 C 2048.170 327.223, 2050.250 373.212, 2050.580 377.750 L 2051.180 386 2095.340 385.996 L 2139.500 385.993 2179.988 284.068 C 2202.257 228.009, 2220.593 182.260, 2220.737 182.403 C 2220.880 182.546, 2212.898 227.707, 2202.998 282.759 C 2193.099 337.812, 2185 383.563, 2185 384.428 C 2185 385.830, 2189.104 386, 2222.921 386 L 2260.841 386 2261.403 383.250 C 2262.262 379.048, 2312 97.246, 2312 96.581 C 2312 96.262, 2283.634 96, 2248.964 96 L 2185.929 96 2184.154 100.250 C 2183.178 102.587, 2166.449 148.468, 2146.980 202.207 C 2127.510 255.945, 2111.391 299.725, 2111.161 299.494 C 2110.930 299.264, 2109.245 253.496, 2107.415 197.788 C 2105.585 142.079, 2104.068 96.388, 2104.044 96.250 C 2104.020 96.112, 2076.311 96, 2042.469 96 C 1994.143 96, 1980.843 96.268, 1980.500 97.250"
        stroke="none"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};
