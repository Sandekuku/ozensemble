import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={50} height={40} viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G clipPath="url(#clip0_4985_22330)" fill={props.color}>
        <Path d="M39.714 39.688c2.907 0 5.348-.934 7.324-2.8 1.974-1.865 2.962-4.166 2.962-6.9 0-2.735-.988-5.177-2.962-7.065-1.975-1.888-4.178-2.832-6.608-2.832h-.846c.26-2.604.998-4.72 2.214-6.347 1.214-1.627 3.016-3.114 5.404-4.46 1.692-.868 2.538-2.278 2.538-4.232 0-1.345-.38-2.418-1.139-3.222-.76-.803-1.855-1.205-3.288-1.205-1.562 0-3.331.64-5.306 1.92-1.975 1.281-3.82 3.017-5.534 5.209-1.716 2.192-3.115 4.763-4.2 7.715-1.085 2.951-1.627 6.098-1.627 9.44 0 4.645 1.042 8.269 3.125 10.873 2.083 2.603 4.73 3.906 7.943 3.906zM3.158 35.748c2.104 2.54 4.741 3.809 7.91 3.809 2.906 0 5.348-.9 7.323-2.702 1.974-1.8 2.962-4.09 2.962-6.868 0-2.778-.988-5.176-2.962-7.065-1.975-1.888-4.2-2.831-6.673-2.831h-.912c.173-2.56.934-4.688 2.279-6.38 1.344-1.693 3.167-3.168 5.468-4.428 1.693-.911 2.54-2.321 2.54-4.231 0-1.302-.392-2.365-1.173-3.19-.781-.823-1.866-1.237-3.255-1.237-2.083 0-4.46 1.097-7.13 3.288-2.668 2.192-4.926 5.166-6.77 8.919C.921 16.587 0 20.612 0 24.909c0 4.688 1.052 8.3 3.158 10.84z" />
      </G>
      <Defs>
        <ClipPath id="clip0_4985_22330">
          <Path fill="#fff" transform="rotate(-180 25 19.844)" d="M0 0H50V39.0622H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;