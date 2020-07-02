import React from 'react';
import styled from 'styled-components';
import Svg, { Path } from 'react-native-svg';

const StyledSvg = styled(Svg)``;

const GuidanceIcon = ({ size, color, selected, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <Path
      d="M12.5 5.72656C12.2305 5.72656 12.0117 5.94534 12.0117 6.21484C12.0117 6.48435 12.2305 6.70312 12.5 6.70312C12.7695 6.70312 12.9883 6.48435 12.9883 6.21484C12.9883 5.94534 12.7695 5.72656 12.5 5.72656Z"
      fill={color}
      fillOpacity={selected ? 1 : 0.25}
    />
    <Path
      d="M4.39453 14.5156C4.66404 14.5156 4.88281 14.2969 4.88281 14.0273C4.88281 13.7578 4.66404 13.5391 4.39453 13.5391C4.12502 13.5391 3.90625 13.7578 3.90625 14.0273C3.90625 14.2969 4.12502 14.5156 4.39453 14.5156Z"
      fill={color}
      fillOpacity={selected ? 1 : 0.25}
    />
    <Path
      d="M16.4062 0.84375C12.0104 0.84375 8.40244 3.87453 8.1234 7.69209C3.93696 7.90208 0 10.9208 0 15.0039C0 16.7102 0.675201 18.3635 1.9043 19.6735C2.14748 20.676 1.85223 21.7386 1.11961 22.4712C0.979996 22.6108 0.938225 22.8208 1.01376 23.0033C1.08929 23.1857 1.26724 23.3047 1.46484 23.3047C2.8574 23.3047 4.19941 22.7586 5.19657 21.7964C6.16798 22.1275 7.43542 22.3281 8.59375 22.3281C12.989 22.3281 16.5966 19.2981 16.8764 15.4813C17.8988 15.4359 18.9621 15.2471 19.8034 14.9604C20.8006 15.9227 22.1426 16.4688 23.5352 16.4688C23.7328 16.4688 23.9107 16.3497 23.9862 16.1674C24.0618 15.9849 24.02 15.7749 23.8804 15.6352C23.1478 14.9026 22.8525 13.84 23.0957 12.8375C24.3248 11.5276 25 9.87428 25 8.16797C25 3.92545 20.7598 0.84375 16.4062 0.84375ZM8.59375 21.3516C7.44133 21.3516 6.12812 21.1254 5.24845 20.7754C5.06001 20.7002 4.84467 20.7496 4.70753 20.8993C4.11797 21.5438 3.3514 21.9932 2.51617 22.1998C2.97642 21.318 3.09391 20.2785 2.81391 19.2935C2.79179 19.2159 2.75078 19.145 2.69451 19.0872C1.58672 17.9462 0.976562 16.496 0.976562 15.0039C0.976562 11.563 4.46472 8.65625 8.59375 8.65625C12.4928 8.65625 15.918 11.3675 15.918 15.0039C15.918 18.5041 12.6324 21.3516 8.59375 21.3516ZM22.3055 12.2512C22.2492 12.3092 22.2082 12.3802 22.1861 12.4576C21.9061 13.4426 22.0236 14.4821 22.4838 15.3638C21.6486 15.1574 20.882 14.7079 20.2925 14.0634C20.1553 13.9139 19.94 13.8643 19.7515 13.9394C18.9892 14.2427 17.9016 14.4527 16.8749 14.5034C16.7322 12.6569 15.8112 10.9214 14.2365 9.63281H20.6055C20.8752 9.63281 21.0938 9.41423 21.0938 9.14453C21.0938 8.87483 20.8752 8.65625 20.6055 8.65625H12.7363C11.628 8.09206 10.3834 7.76304 9.10244 7.69399C9.38301 4.4145 12.5517 1.82031 16.4062 1.82031C20.5353 1.82031 24.0234 4.72711 24.0234 8.16797C24.0234 9.66009 23.4133 11.1102 22.3055 12.2512Z"
      fill={color}
      fillOpacity={selected ? 1 : 0.25}
    />
    <Path
      d="M12.5 13.5391H6.34766C6.07796 13.5391 5.85938 13.7576 5.85938 14.0273C5.85938 14.297 6.07796 14.5156 6.34766 14.5156H12.5C12.7697 14.5156 12.9883 14.297 12.9883 14.0273C12.9883 13.7576 12.7697 13.5391 12.5 13.5391Z"
      fill={color}
      fillOpacity={selected ? 1 : 0.25}
    />
    <Path
      d="M12.5 16.4688H4.39453C4.12483 16.4688 3.90625 16.6873 3.90625 16.957C3.90625 17.2267 4.12483 17.4453 4.39453 17.4453H12.5C12.7697 17.4453 12.9883 17.2267 12.9883 16.957C12.9883 16.6873 12.7697 16.4688 12.5 16.4688Z"
      fill={color}
      fillOpacity={selected ? 1 : 0.25}
    />
    <Path
      d="M20.6055 5.72656H14.4531C14.1834 5.72656 13.9648 5.94514 13.9648 6.21484C13.9648 6.48454 14.1834 6.70312 14.4531 6.70312H20.6055C20.8752 6.70312 21.0938 6.48454 21.0938 6.21484C21.0938 5.94514 20.8752 5.72656 20.6055 5.72656Z"
      fill={color}
      fillOpacity={selected ? 1 : 0.25}
    />
  </StyledSvg>
);

export default GuidanceIcon;
