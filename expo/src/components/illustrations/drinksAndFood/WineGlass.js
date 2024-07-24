import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components";

const StyledSvg = styled(Svg)``;

const WineGlass = ({ size, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 19 41" {...props}>
    <Path
      d="M11.7071,24.5073 C15.0867,22.2611 17.3745,18.6357 17.9837,14.5608 C18.2645,12.6836 18.184,10.7962 17.7448,8.95092 L15.7599,0.611534 C15.6746,0.252434 15.3602,0 14.999,0 L3.14834,0 C2.78714,0 2.47303,0.252434 2.3877,0.611534 L0.402761,8.95092 C-0.036434,10.7962 -0.116872,12.6836 0.163589,14.5611 C0.772835,18.636 3.06056,22.2611 6.44047,24.5073 L8.29084,25.737 L8.29084,36.3674 L2.19777,39.4829 C1.87296,39.649 1.70261,40.0219 1.7861,40.3831 C1.8696,40.7448 2.18493,41 2.54797,41 L15.5993,41 C15.9624,41 16.278,40.7448 16.3612,40.3831 C16.4447,40.0219 16.2743,39.6493 15.9495,39.4829 L9.85677,36.3674 L9.85677,25.737 L11.7071,24.5073 Z M3.7637,1.60156 L14.3839,1.60156 L15.9878,8.3397 L2.15985,8.3397 L3.7637,1.60156 Z M1.71178,14.3187 C1.4931,12.856 1.52093,11.3864 1.79375,9.94126 L16.3536,9.94126 C16.6267,11.3864 16.6545,12.856 16.4358,14.3187 C15.8942,17.9428 13.8594,21.1669 10.8538,23.1645 L9.0738,24.3475 L7.29378,23.1645 C4.28792,21.1669 2.25344,17.9428 1.71178,14.3187 Z M5.86487,39.3984 L9.0738,37.7575 L12.2827,39.3984 L5.86487,39.3984 Z"
      fill="#de285e"
    />
    <Path
      d="M10.8624 20.8361C11.0465 20.8361 11.2312 20.7717 11.3796 20.6413C13.0611 19.1624 14.2314 17.2369 14.7644 15.0725C14.8668 14.6574 14.6105 14.2383 14.1918 14.137C13.773 14.0357 13.3509 14.29 13.2488 14.7051C12.7913 16.562 11.7871 18.2142 10.3446 19.4826C10.0222 19.7663 9.99262 20.2555 10.2785 20.5754C10.4324 20.7481 10.647 20.8361 10.8624 20.8361Z"
      fill="#de285e"
    />
    <Path
      d="M14.1148 12.7705C14.2915 12.7705 14.4647 12.6991 14.59 12.5741C14.715 12.4486 14.7869 12.2758 14.7869 12.0983C14.7869 11.9214 14.715 11.7481 14.59 11.6231C14.4647 11.4981 14.2915 11.4262 14.1148 11.4262C13.9378 11.4262 13.7645 11.4981 13.6395 11.6231C13.5146 11.7481 13.4426 11.9214 13.4426 12.0983C13.4426 12.2758 13.5146 12.4486 13.6395 12.5741C13.7645 12.6991 13.9378 12.7705 14.1148 12.7705Z"
      fill="#de285e"
    />
  </StyledSvg>
);

export default WineGlass;