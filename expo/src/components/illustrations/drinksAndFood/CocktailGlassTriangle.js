import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components";

const StyledSvg = styled(Svg)``;

const CocktailGlassTriangle = ({ size, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 34 34" {...props}>
    <Path
      d="M6.53684 3.8584C6.25433 3.8584 6.02539 4.06921 6.02539 4.32921V4.55377C6.02539 4.81378 6.25433 5.02459 6.53684 5.02459C6.81935 5.02459 7.04829 4.81378 7.04829 4.55377V4.32921C7.04829 4.06921 6.81928 3.8584 6.53684 3.8584Z"
      fill="black"
      stroke="black"
      stroke-width="0.5"
    />
    <Path
      d="M4.86087 5.62598H4.61692C4.33441 5.62598 4.10547 5.83679 4.10547 6.09679C4.10547 6.35679 4.33441 6.5676 4.61692 6.5676H4.86087C5.14331 6.5676 5.37232 6.35679 5.37232 6.09679C5.37232 5.83679 5.14338 5.62598 4.86087 5.62598Z"
      fill="black"
      stroke="black"
      stroke-width="0.5"
    />
    <Path
      d="M5.71358 4.67263L5.54113 4.51388C5.34132 4.33001 5.01759 4.33001 4.81778 4.51388C4.61803 4.69776 4.61803 4.99582 4.81778 5.1797L4.99023 5.33845C5.0901 5.43038 5.22107 5.47632 5.35191 5.47632C5.48274 5.47632 5.61371 5.43032 5.71358 5.33845C5.91333 5.15457 5.91333 4.85651 5.71358 4.67263Z"
      fill="black"
      stroke="black"
      stroke-width="0.5"
    />
    <Path
      d="M5.71358 6.85563C5.51384 6.67182 5.19005 6.67182 4.99023 6.85563L4.81778 7.01438C4.61803 7.19826 4.61803 7.49632 4.81778 7.6802C4.91765 7.77214 5.04862 7.81807 5.17945 7.81807C5.31029 7.81807 5.44126 7.77207 5.54113 7.6802L5.71358 7.52145C5.91333 7.33757 5.91333 7.03951 5.71358 6.85563Z"
      fill="black"
      stroke="black"
      stroke-width="0.5"
    />
    <Path
      d="M21.1326 18.7356L32.7407 6.97982C33.008 6.70914 33.0742 6.3332 32.9134 5.9987C32.7526 5.6642 32.406 5.45638 32.0086 5.45638H12.0289C11.8726 4.30738 11.2996 3.24663 10.3844 2.43194C9.34698 1.50856 7.98074 1 6.53723 1C3.484 1 1 3.28663 1 6.09726C1 8.90789 3.484 11.1945 6.53716 11.1945C7.57642 11.1945 8.57251 10.933 9.44502 10.4352L17.6412 18.7356C17.7621 18.858 17.8972 18.9657 18.0427 19.0584V29.3959C18.0427 29.9261 17.6771 30.3994 17.133 30.5736L13.2436 31.8184C13.2332 31.8217 13.223 31.8253 13.2128 31.8293C12.9191 31.9433 12.7581 32.2238 12.8212 32.5114C12.8844 32.7991 13.1512 33 13.47 33H25.3038C25.6226 33 25.8894 32.7991 25.9526 32.5114C26.0157 32.2237 25.8546 31.9431 25.5608 31.8292C25.5507 31.8252 25.5404 31.8216 25.5301 31.8183L21.6407 30.5735C21.0967 30.3994 20.7311 29.9261 20.7311 29.3958V19.0584C20.8767 18.9657 21.0118 18.858 21.1326 18.7356ZM6.53723 10.2529C4.04807 10.2529 2.02297 8.3887 2.02297 6.09726C2.02297 3.80582 4.04807 1.94163 6.53723 1.94163C8.79792 1.94163 10.663 3.45038 10.9961 5.45638H10.4596C10.1294 3.72726 8.49219 2.42963 6.53723 2.42963C4.34036 2.42963 2.55303 4.07494 2.55303 6.09726C2.55303 8.11958 4.34029 9.76489 6.53723 9.76489C7.18263 9.76489 7.81019 9.62308 8.37534 9.35189L8.74252 9.72371C8.07192 10.071 7.31965 10.2529 6.53723 10.2529ZM8.257 4.51413C8.05719 4.33026 7.73346 4.33026 7.53365 4.51413L7.3612 4.67288C7.16145 4.85676 7.16145 5.15482 7.3612 5.3387C7.42291 5.39551 7.49658 5.43463 7.57466 5.45638H6.76522C6.36783 5.45638 6.02116 5.6642 5.86038 5.9987C5.69961 6.3332 5.76581 6.70914 6.03304 6.97982L6.28276 7.23276C6.12931 7.31401 6.02571 7.46614 6.02571 7.64083V7.86539C6.02571 8.12539 6.25465 8.3362 6.53716 8.3362C6.77289 8.3362 6.9708 8.1892 7.03008 7.98951L7.65464 8.62202C7.30247 8.75427 6.9243 8.8232 6.53716 8.8232C4.90429 8.8232 3.57586 7.60033 3.57586 6.0972C3.57586 4.59407 4.90436 3.37125 6.53723 3.37125C7.92778 3.37125 9.10222 4.25432 9.41583 5.45638H7.87109C7.94917 5.4347 8.02283 5.39551 8.08455 5.3387L8.257 5.17995C8.45675 4.99607 8.45675 4.69795 8.257 4.51413ZM21.3048 31.4629L23.1654 32.0584H15.6084L17.469 31.4629C18.4239 31.1572 19.0656 30.3266 19.0656 29.3959V19.4255C19.1716 19.439 19.2788 19.4465 19.3869 19.4465C19.4951 19.4465 19.6024 19.439 19.7083 19.4255V29.3959C19.7083 30.3266 20.3499 31.1572 21.3048 31.4629ZM20.3757 18.1022C20.1193 18.3618 19.7682 18.5049 19.3869 18.5049C19.0057 18.5049 18.6545 18.3619 18.3981 18.1022C18.3981 18.1022 18.3981 18.1022 18.3981 18.1022L10.5901 10.1948H13.3521C13.6346 10.1948 13.8635 9.98396 13.8635 9.72396C13.8635 9.46395 13.6346 9.25314 13.3521 9.25314H9.66025L6.84092 6.39801H31.9329L29.1136 9.25314H15.7318C15.4493 9.25314 15.2204 9.46395 15.2204 9.72396C15.2204 9.98396 15.4493 10.1948 15.7318 10.1948H28.1838L20.3757 18.1022Z"
      fill="black"
      stroke="black"
      stroke-width="0.5"
    />
  </StyledSvg>
);

export default CocktailGlassTriangle;