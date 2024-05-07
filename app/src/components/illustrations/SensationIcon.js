import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components';

const StyledSvg = styled(Svg)``;

const SensationIcon = ({ size, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 50 53" {...props}>
    <Path
      d="M47.4687 6.47853C47.4687 10.0565 44.5682 12.957 40.9901 12.957C37.4123 12.957 34.5116 10.0565 34.5116 6.47853C34.5116 2.90053 37.4123 0 40.9901 0C44.5682 0 47.4687 2.90053 47.4687 6.47853Z"
      fill="white"
    />
    <Path
      d="M2.27393 4.47595C1.79201 4.30327 1.24077 4.49409 0.975736 4.95313C0.677572 5.46958 0.854523 6.12994 1.37097 6.4281L16.1032 14.9339L15.9821 15.0038C12.8834 16.793 11.8217 20.755 13.6107 23.8537C14.2523 24.965 15.1734 25.8143 16.2339 26.3639L24.2932 31.0287L16.3518 38.9731L1.61981 30.4677L1.44303 30.3856C0.961094 30.2128 0.409879 30.4037 0.144842 30.8628C-0.153322 31.3792 0.0236074 32.0396 0.540055 32.3378L32.9751 51.0642L33.4268 51.3093C35.56 52.3949 38.0255 52.6575 40.3492 52.0349L43.0086 51.3223L43.1915 51.2553C43.6543 51.0366 43.9091 50.512 43.772 50C43.6176 49.4238 43.0257 49.082 42.4495 49.2364L39.7903 49.949L39.3413 50.0546C37.5386 50.4218 35.6574 50.1192 34.0548 49.1939L22.16 42.3266L30.8616 33.6236C31.1272 33.3579 31.3567 33.0589 31.545 32.7338C32.7403 30.6696 32.0357 28.0274 29.9714 26.8321L25.6964 24.3569L31.8232 20.8194L34.0121 24.6108C34.3917 25.2682 34.9379 25.8141 35.5956 26.1931L45.1424 31.6964C46.6923 32.59 48.6732 32.0577 49.5666 30.5078C50.46 28.9579 49.9279 26.9772 48.378 26.0836L39.3312 20.8682L34.3688 12.2714L34.3572 12.2783L34.1829 11.9764C32.394 8.87777 28.4317 7.81611 25.333 9.60509L18.2628 13.687L2.45073 4.55792L2.27393 4.47595Z"
      fill="white"
    />
  </StyledSvg>
);

export default SensationIcon;