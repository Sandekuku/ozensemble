import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function TargetGoal({ size, ...props }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M22.9595 0.136282C22.8486 0.205572 21.7954 1.23107 20.6313 2.40207C18.7051 4.3422 18.5041 4.57085 18.4626 4.8203C18.4348 4.97274 18.2963 6.31004 18.1438 7.79285L17.8736 10.4952L14.5892 13.7864C12.7808 15.6019 11.2633 17.154 11.2217 17.2371C11.1802 17.3202 11.1455 17.5558 11.1455 17.7568C11.1455 18.4289 11.5682 18.8516 12.2403 18.8516C12.4412 18.8516 12.6768 18.8169 12.76 18.7753C12.8431 18.7338 14.3952 17.2163 16.2106 15.4078L19.5019 12.1235L22.2042 11.8533C23.687 11.7008 25.0243 11.5622 25.1768 11.5345C25.4262 11.4929 25.6618 11.2851 27.6227 9.33109C28.8214 8.14623 29.84 7.09302 29.8954 6.98908C30.0479 6.69113 30.0202 6.09524 29.8331 5.82501C29.5351 5.37462 29.445 5.35383 27.1515 5.17368C26.0013 5.07667 25.0451 4.9866 25.0243 4.97274C25.0105 4.95195 24.9204 3.99575 24.8234 2.84553C24.6432 0.552023 24.6225 0.461946 24.1721 0.163998C23.8741 -0.0438728 23.2644 -0.0577297 22.9595 0.136282ZM22.71 5.1321C22.8556 7.13459 22.8902 7.16924 25.2807 7.31475C25.7172 7.34246 26.1191 7.38404 26.1607 7.41175C26.2161 7.43947 25.9182 7.79285 25.3154 8.38874L24.3799 9.32416L22.3151 9.53203L20.2572 9.7399L20.465 7.68198L20.6729 5.61714L21.6083 4.68172C22.1973 4.08582 22.5576 3.78095 22.5853 3.83638C22.6061 3.87795 22.6685 4.46692 22.71 5.1321Z"
        fill="#4030A5"
      />
      <Path
        d="M10.8693 5.55572C7.88294 5.90217 4.97275 7.41962 3.03956 9.65077C-1.83847 15.2702 -0.709044 23.8206 5.45085 27.9365C9.04009 30.3408 13.6548 30.6665 17.5628 28.7957C21.3807 26.9664 23.9791 23.2802 24.4433 19.0465C24.5888 17.7577 24.5195 16.5105 24.2354 15.1247C24.0276 14.1338 23.7435 13.7597 23.1476 13.6765C22.7665 13.628 22.2814 13.8082 22.0874 14.0784C21.8033 14.4734 21.7964 14.6882 21.9974 15.6513C22.1637 16.4066 22.1914 16.6976 22.1914 17.7092C22.1914 18.5753 22.1637 19.0534 22.0666 19.5108C21.346 23.1346 18.8862 25.9894 15.4702 27.1743C14.3893 27.5484 13.5855 27.6801 12.2898 27.6801C10.5922 27.687 9.31032 27.396 7.87601 26.6823C5.01433 25.2549 3.0742 22.6981 2.44366 19.5108C2.27043 18.6516 2.27043 16.8362 2.44366 15.977C3.26821 11.8196 6.33084 8.75693 10.4883 7.93237C10.9386 7.84229 11.4306 7.80765 12.2898 7.80765C13.3084 7.80765 13.5855 7.83537 14.3477 7.99473C15.3109 8.2026 15.5257 8.19567 15.9206 7.91158C16.1908 7.71757 16.371 7.23254 16.3225 6.85144C16.2393 6.25555 15.8652 5.97146 14.8743 5.76359C13.5232 5.48643 12.1235 5.41021 10.8693 5.55572Z"
        fill="#4030A5"
      />
      <Path
        d="M10.8681 11.1942C8.4014 11.7347 6.50285 13.5293 5.79609 15.9822C5.65751 16.4603 5.63672 16.682 5.63672 17.7422C5.63672 18.8023 5.65751 19.024 5.79609 19.5021C6.4682 21.8164 8.17967 23.5279 10.494 24.2C10.9721 24.3386 11.1938 24.3594 12.2539 24.3594C13.3141 24.3594 13.5358 24.3386 14.0139 24.2C16.3143 23.5348 18.0466 21.8164 18.6979 19.5368C18.8019 19.1973 18.8573 18.7469 18.885 18.1925C18.9127 17.4373 18.8989 17.3403 18.7741 17.1324C18.3376 16.4464 17.222 16.4534 16.8202 17.1532C16.7439 17.2779 16.6677 17.6313 16.6261 18.0193C16.4806 19.4467 15.8709 20.5346 14.7692 21.3245C12.2816 23.0983 8.75478 21.7749 7.98566 18.7746C7.90251 18.4489 7.88172 18.1302 7.90251 17.5343C7.93022 16.8483 7.96487 16.6612 8.15195 16.1831C8.67163 14.8735 9.84263 13.8273 11.1938 13.4808C11.4155 13.4254 11.9768 13.37 12.441 13.3561C13.1686 13.3422 13.3071 13.3214 13.4804 13.1967C14.1663 12.684 14.1663 11.7832 13.4804 11.2705C13.3071 11.1388 13.1755 11.1249 12.3024 11.1111C11.658 11.1042 11.1661 11.1319 10.8681 11.1942Z"
        fill="#4030A5"
      />
    </Svg>
  );
}

export default TargetGoal;
