import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components';

const StyledSvg = styled(Svg)``;

const NoReassuredSmiley = ({ color = '#000', size, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 56 56" {...props}>
    <Path
      d="M28 0a28 28 0 1 0 28 28A28.032 28.032 0 0 0 28 0Zm16.818 10.208-3.43 9.917c.015-.097.025-.194.03-.292a2.624 2.624 0 0 0-2.626-2.625h-.204l3.255-9.415a24.699 24.699 0 0 1 2.975 2.415Zm-25.13 8.75a2.567 2.567 0 0 0-3.226-1.668l4.41-12.728c1.334-.406 2.7-.697 4.084-.87l-5.268 15.266ZM28.001 52.5A24.496 24.496 0 0 1 3.624 30.35a24.5 24.5 0 0 1 4.752-17.003L5.041 23a.293.293 0 0 0 .18.373h.094c.125 0 .234-.08.274-.198l3.868-11.159a24.685 24.685 0 0 1 5.425-4.667L9.457 23.001a.291.291 0 0 0 .18.373h.094c.124 0 .234-.08.274-.198l5.652-16.333a24.396 24.396 0 0 1 4.515-2.06l-4.421 12.875a2.62 2.62 0 0 0-1.167 2.175c.004.262.047.522.129.77l-.834 2.416a.292.292 0 0 0 .18.373h.093a.292.292 0 0 0 .275-.198l.641-1.855a2.607 2.607 0 0 0 3.564.682l-.338.986a.291.291 0 0 0 .181.373h.093a.292.292 0 0 0 .275-.198l6.772-19.565c.787-.076 1.58-.117 2.386-.117.484 0 .962 0 1.44.047L22.717 23a.293.293 0 0 0 .18.374h.094c.124 0 .234-.08.274-.198l6.778-19.582c1.215.104 2.42.299 3.605.583L27.132 23a.291.291 0 0 0 .18.373h.094c.124 0 .234-.08.274-.198l6.54-18.877a24.26 24.26 0 0 1 3.394 1.167L31.554 23a.293.293 0 0 0 .18.374h.093c.125 0 .235-.08.274-.198l6.044-17.5a24.532 24.532 0 0 1 3.197 1.75l-3.424 9.928a2.602 2.602 0 0 0-1.342 3.879l-.613 1.75a.292.292 0 0 0 .181.373h.093c.125 0 .235-.08.275-.198l.501-1.447a2.602 2.602 0 0 0 3.984-.53l-.618 1.785a.29.29 0 0 0 .18.373h.094c.125 0 .234-.08.274-.198l4.34-12.542a24.722 24.722 0 0 1 2.695 3.19l-3.167 9.159a.293.293 0 0 0 .18.373h.094c.124 0 .234-.08.274-.198l3.027-8.75a24.48 24.48 0 0 1 2.299 4.34l-1.464 4.23a.29.29 0 0 0 .18.372h.094a.292.292 0 0 0 .274-.198l1.242-3.587A24.498 24.498 0 0 1 28 52.5Zm0-22.937c-6.347 0-11.707 4.45-11.707 9.718 0 3.5 2.298 4.381 11.706 4.381 9.083 0 11.707-.986 11.707-4.38 0-4.498-5.115-9.72-11.707-9.72Zm0 11.766c-4.556 0-7.28-.233-8.575-.735-.736-.286-.8-.473-.8-1.319 0-3.931 4.381-7.385 9.374-7.385 5.192 0 9.375 4.037 9.375 7.385 0 .916 0 2.054-9.375 2.054Z"
      fill={color}
    />
  </StyledSvg>
);

export default NoReassuredSmiley;
