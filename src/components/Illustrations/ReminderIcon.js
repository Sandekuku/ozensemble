import React from 'react';
import styled from 'styled-components';
import Svg, { Path } from 'react-native-svg';

const StyledSvg = styled(Svg)``;

const ReminderIcon = ({ color, size, selected, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <Path
      d="M12.5 3.6792C10.1471 3.6792 8.01472 4.63508 6.49512 6.1792C4.951 7.72332 3.99512 9.85567 3.99512 12.1841C3.99512 14.5125 4.951 16.6694 6.49512 18.189C8.03923 19.7331 10.1716 20.689 12.5 20.689C14.853 20.689 16.9853 19.7331 18.5049 18.189C20.049 16.6449 21.0049 14.5125 21.0049 12.1841C21.0049 9.85567 20.049 7.69881 18.5049 6.15469C16.9853 4.63508 14.853 3.6792 12.5 3.6792ZM19.0196 12.6498H20.0735C19.951 14.537 19.1422 16.2772 17.8677 17.5272C16.5932 18.8017 14.8775 19.6106 12.9657 19.7331V18.6792C12.9657 18.4341 12.7696 18.2135 12.5 18.2135C12.2549 18.2135 12.0343 18.4096 12.0343 18.6792V19.7331C10.1226 19.6106 8.40688 18.8017 7.13237 17.5272C5.85786 16.2527 5.04904 14.537 4.92649 12.6253H5.98041C6.22551 12.6253 6.4461 12.4292 6.4461 12.1596C6.4461 11.9145 6.25002 11.6939 5.98041 11.6939H4.92649C5.04904 9.78214 5.85786 8.06645 7.13237 6.79194C8.40688 5.51743 10.1226 4.70861 12.0343 4.58606V5.66449C12.0343 5.90959 12.2304 6.13018 12.5 6.13018C12.7451 6.13018 12.9657 5.9341 12.9657 5.66449V4.61057C14.8775 4.73312 16.5932 5.54194 17.8677 6.81645C19.1422 8.09096 19.951 9.80665 20.0735 11.7184H19.0196C18.7745 11.7184 18.5539 11.9145 18.5539 12.1841C18.5539 12.4292 18.75 12.6498 19.0196 12.6498Z"
      fill={color}
      fillOpacity={selected ? 1 : 0.25}
    />
    <Path
      d="M12.9411 10.8362V7.35582C12.9411 7.11072 12.745 6.89014 12.4754 6.89014C12.2303 6.89014 12.0097 7.08621 12.0097 7.35582V10.8607C11.8136 10.9343 11.6175 11.0323 11.4705 11.1793C11.3234 11.3264 11.2009 11.498 11.1519 11.7186H8.55382C8.30872 11.7186 8.08813 11.9146 8.08813 12.1843C8.08813 12.4293 8.28421 12.6499 8.55382 12.6499H11.1764C11.2499 12.846 11.3479 13.0176 11.495 13.1646C11.7401 13.4097 12.1077 13.5813 12.4754 13.5813C12.8675 13.5813 13.2107 13.4342 13.4558 13.1646C13.7009 12.9195 13.8724 12.5519 13.8724 12.1843C13.897 11.7921 13.7499 11.449 13.4803 11.1793C13.3332 11.0323 13.1617 10.9097 12.9411 10.8362ZM12.843 12.5274C12.745 12.6254 12.647 12.6744 12.4999 12.6744C12.3773 12.6744 12.2548 12.6254 12.1568 12.5274C12.0832 12.4539 12.0097 12.3313 12.0097 12.1843C12.0097 12.0617 12.0587 11.9392 12.1568 11.8411C12.2548 11.7431 12.3528 11.6941 12.4999 11.6941C12.6224 11.6941 12.745 11.7431 12.843 11.8411C12.9166 11.9146 12.9901 12.0372 12.9901 12.1843C12.9656 12.3068 12.9166 12.4293 12.843 12.5274Z"
      fill={color}
      fillOpacity={selected ? 1 : 0.25}
    />
    <Path
      d="M24.0196 0.983226C23.3578 0.321461 22.4755 0.0273438 21.6176 0.0273438C20.7598 0.0273438 19.9265 0.345971 19.2647 1.00774C19.0931 1.1793 19.0931 1.47342 19.2647 1.6695L20.9559 3.36068L20 4.31656C18.0392 2.45381 15.3922 1.30185 12.4755 1.30185C9.55882 1.30185 6.91177 2.45381 4.95098 4.31656L3.9951 3.36068L5.68627 1.6695C5.85784 1.49793 5.85784 1.20381 5.68627 1.00774C5.04902 0.370481 4.19118 0.0273438 3.33333 0.0273438C2.47549 0.0273438 1.64216 0.345971 0.980392 1.00774C0.343137 1.64499 0 2.50283 0 3.36068C0 4.21852 0.318627 5.05185 0.980392 5.71362C1.15196 5.88519 1.44608 5.88519 1.64216 5.71362L3.33333 4.02244L4.31373 5.00283C2.64706 6.89009 1.61765 9.4146 1.61765 12.1842C1.61765 14.9783 2.67157 17.5028 4.38725 19.4391L3.06373 20.7626C2.89216 20.9342 2.89216 21.2283 3.06373 21.4244C3.23529 21.596 3.52941 21.596 3.72549 21.4244L5.04902 20.1009C7.0098 21.9391 9.63235 23.0911 12.5245 23.0911C15.4167 23.0911 18.0637 21.9636 20 20.1009L21.3235 21.4244C21.4951 21.596 21.7892 21.596 21.9853 21.4244C22.1569 21.2528 22.1569 20.9587 21.9853 20.7626L20.6618 19.4391C22.3775 17.5028 23.4314 14.9783 23.4314 12.1842C23.4314 9.4146 22.402 6.89009 20.6863 4.97832L21.6667 3.99793L23.3578 5.68911C23.5294 5.86068 23.8235 5.86068 24.0196 5.68911C24.6569 5.05185 25 4.19401 25 3.33617C25 2.47832 24.6814 1.64499 24.0196 0.983226ZM3.03922 3.01754L1.37255 4.68421C1.10294 4.29205 0.955882 3.82636 0.955882 3.33617C0.955882 2.72342 1.20098 2.11068 1.66667 1.64499C2.13235 1.1793 2.7451 0.934206 3.35784 0.934206C3.82353 0.934206 4.28922 1.08127 4.70588 1.35087L3.03922 3.01754ZM22.5245 12.1842C22.4755 14.9293 21.348 17.4293 19.5588 19.2185C17.7451 21.0322 15.2696 22.1352 12.5 22.1352C9.7549 22.1352 7.2549 21.0077 5.44118 19.2185C3.65196 17.4293 2.52451 14.9293 2.52451 12.1842C2.52451 9.56166 3.55392 7.1597 5.22059 5.37048C5.26961 5.34597 5.29412 5.32146 5.34314 5.29695C5.39216 5.24793 5.41667 5.22342 5.44118 5.1744L5.46569 5.14989C7.27941 3.33617 9.7549 2.23323 12.5245 2.23323C15.2696 2.23323 17.7696 3.36068 19.5833 5.14989L19.6078 5.1744C19.6324 5.22342 19.6569 5.27244 19.7059 5.29695C19.7304 5.32146 19.7794 5.34597 19.8284 5.37048C21.4951 7.1597 22.5245 9.53715 22.5245 12.1842ZM23.6275 4.68421L21.9608 3.01754L20.2941 1.35087C20.6863 1.08127 21.152 0.934206 21.6422 0.934206C22.2549 0.934206 22.8676 1.1793 23.3333 1.64499C23.799 2.11068 24.0441 2.72342 24.0441 3.33617C24.0196 3.80185 23.8971 4.26754 23.6275 4.68421Z"
      fill={color}
      fillOpacity={selected ? 1 : 0.25}
    />
  </StyledSvg>
);

export default ReminderIcon;
