import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components";

const StyledSvg = styled(Svg)`
  margin-right: 5px;
`;

const ValidateIcon = ({ size, fill = "#39cec0", ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 16 16" {...props}>
    <Path
      d="M8 16C3.58862 16 0 12.4114 0 8C0 3.58862 3.58862 0 8 0C12.4114 0 16 3.58862 16 8C16 12.4114 12.4114 16 8 16ZM8 1C4.14001 1 1 4.14001 1 8C1 11.86 4.14001 15 8 15C11.86 15 15 11.86 15 8C15 4.14001 11.86 1 8 1Z"
      fill={fill}
    />
    <Path
      d="M8 16C3.58862 16 0 12.4114 0 8C0 3.58862 3.58862 0 8 0C12.4114 0 16 3.58862 16 8C16 12.4114 12.4114 16 8 16ZM8 1C4.14001 1 1 4.14001 1 8C1 11.86 4.14001 15 8 15C11.86 15 15 11.86 15 8C15 4.14001 11.86 1 8 1Z"
      fill={fill}
    />
    <Path
      d="M7.24951 10.6667C7.12146 10.6667 6.99353 10.6182 6.89612 10.5201L4.72949 8.35352C4.53418 8.15808 4.53418 7.84143 4.72949 7.64612C4.9248 7.45081 5.24146 7.45081 5.43689 7.64612L7.25012 9.45947L11.2302 5.47949C11.4255 5.28418 11.7422 5.28418 11.9375 5.47949C12.1328 5.6748 12.1328 5.99146 11.9375 6.18677L7.60413 10.5201C7.50549 10.6182 7.37756 10.6667 7.24951 10.6667Z"
      fill={fill}
    />
    <Path
      d="M7.24951 10.6667C7.12146 10.6667 6.99353 10.6182 6.89612 10.5201L4.72949 8.35352C4.53418 8.15808 4.53418 7.84143 4.72949 7.64612C4.9248 7.45081 5.24146 7.45081 5.43689 7.64612L7.25012 9.45947L11.2302 5.47949C11.4255 5.28418 11.7422 5.28418 11.9375 5.47949C12.1328 5.6748 12.1328 5.99146 11.9375 6.18677L7.60413 10.5201C7.50549 10.6182 7.37756 10.6667 7.24951 10.6667Z"
      fill={fill}
    />
  </StyledSvg>
);

export default ValidateIcon;