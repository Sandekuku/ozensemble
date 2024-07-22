import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components";

const StyledSvg = styled(Svg)``;

const AperitiveBottle = ({ size, color = "#DE285E", ...props }) => (
  <StyledSvg width={size} height={size * 1.5} viewBox="0 0 24 72" {...props}>
    <Path
      d="M7.78125 0.281252C7.51406 0.548439 7.5 0.745314 7.5 3.24844V5.93438L8.0625 6.45469L8.625 6.96094L8.48437 8.92969C8.30156 11.5453 8.24531 12.0234 7.8375 13.8656C7.21875 16.6922 6.65625 17.7188 3.81562 21.2766C0.946875 24.8766 0.1875 26.2688 0.1875 27.9703C0.1875 28.4063 0.342187 29.8266 0.539062 31.1484C1.5375 37.7859 1.73437 39.2203 1.95937 41.4844C2.26875 44.6344 2.26875 50.6672 1.95937 54.7734C1.83281 56.3906 1.50937 59.6813 1.22812 62.0859C0.6375 67.3734 0.510937 69.4969 0.735937 70.2C0.975 70.9313 1.41094 71.4375 2.07187 71.7328C2.62031 71.9719 3.19687 72 12 72C20.8031 72 21.3797 71.9719 21.9281 71.7328C22.5891 71.4375 23.025 70.9313 23.2641 70.2C23.475 69.5672 23.3625 67.2469 22.9828 63.9844C22.1109 56.6859 21.8156 52.5797 21.8016 47.7422C21.8016 42.6375 21.9281 41.3438 23.4609 31.1484C23.6578 29.8266 23.8125 28.4063 23.8125 27.9703C23.8125 26.2688 23.0531 24.8766 20.1844 21.2766C17.3437 17.7188 16.7812 16.6922 16.1625 13.8656C15.7547 12.0234 15.6984 11.5453 15.5156 8.92969L15.375 6.96094L15.9375 6.45469L16.5 5.93438V3.24844C16.5 0.745314 16.4859 0.548439 16.2187 0.281252C15.9516 0.0140644 15.7547 1.90735e-06 12 1.90735e-06C8.24531 1.90735e-06 8.04844 0.0140644 7.78125 0.281252ZM14.8125 3.44531V5.20313H12H9.1875V3.44531V1.6875H12H14.8125V3.44531ZM13.7016 7.83281C13.7016 8.28281 13.7859 9.42188 13.8844 10.3641L14.0531 12.0938H12H9.94687L10.1156 10.3641C10.2141 9.42188 10.2984 8.28281 10.2984 7.83281L10.3125 7.03125H12H13.6875L13.7016 7.83281ZM14.7141 15.2859C15.4172 17.7609 16.0078 18.8016 18.6094 22.0781C20.6625 24.6656 21.1547 25.3406 21.6469 26.2969C22.1953 27.3516 22.1531 28.3641 21.45 32.9766C20.2266 40.8234 20.0859 42.4547 20.1 48.0938C20.1281 53.1141 20.2828 55.5047 21.0844 62.5781C21.6328 67.4578 21.7453 69.7641 21.45 70.0594C21.1828 70.3266 2.81719 70.3266 2.55 70.0594C2.26875 69.7641 2.36719 67.4719 2.84531 63.2813C4.43437 49.4156 4.36406 44.325 2.49375 32.5547C2.2125 30.8531 1.9875 28.9266 1.97344 28.2656C1.94531 26.55 2.19844 26.0859 5.39062 22.0781C7.99219 18.8016 8.58281 17.7609 9.28594 15.2859L9.66562 13.9219H12H14.3344L14.7141 15.2859Z"
      fill="#DE285E"
    />
    <Path
      d="M9.60937 24.0464C7.6125 24.4683 5.44687 25.4105 3.95625 26.5073C3.37969 26.9292 3.28125 27.0698 3.28125 27.4777C3.28125 28.462 4.0125 28.5464 5.25 27.7308C6.38906 26.9573 7.68281 26.3667 9.15937 25.9167C10.2141 25.6073 10.6359 25.5511 12.2109 25.5511C13.7859 25.5511 14.2078 25.6073 15.2766 25.9308C16.6828 26.3527 17.9625 26.9573 18.9047 27.6464C19.9031 28.3777 20.7187 28.2089 20.7187 27.2808C20.7187 26.8308 20.3391 26.4511 19.0594 25.6777C16.3031 24.0042 12.6891 23.3855 9.60937 24.0464Z"
      fill="#DE285E"
    />
    <Path
      d="M11.2687 31.7961C10.3828 31.9367 9.24374 32.5695 8.72343 33.2164L8.30156 33.7508H6.43124C4.92656 33.7508 4.51874 33.793 4.34999 33.9758C4.01249 34.2992 4.02656 37.9836 4.36406 38.2648C4.51874 38.4055 5.13749 38.4758 6.43124 38.5039L8.27343 38.5602L8.93437 39.1789C9.89062 40.0789 10.7062 40.4023 12 40.4023C13.2937 40.4023 14.1094 40.0789 15.0656 39.1789L15.7266 38.5602L17.5687 38.5039C18.8625 38.4758 19.4812 38.4055 19.6359 38.2648C19.9734 37.9836 19.9875 34.2992 19.65 33.9758C19.4812 33.793 19.0734 33.7508 17.5687 33.7508H15.6984L15.2625 33.2023C14.7562 32.5695 13.3641 31.8383 12.4922 31.7539C12.1828 31.7117 11.6344 31.7398 11.2687 31.7961ZM13.0266 33.6523C13.2797 33.7648 13.6312 34.018 13.8281 34.243C14.9953 35.5367 14.7562 35.4383 16.5562 35.4383H18.1875V36.0711V36.7039H16.725C15.9094 36.7039 15.1078 36.7602 14.925 36.8305C14.7422 36.9008 14.4187 37.2102 14.2078 37.5336C13.1812 39.0805 10.8187 39.0805 9.79218 37.5336C9.58124 37.2102 9.25781 36.9008 9.07499 36.8305C8.89218 36.7602 8.09062 36.7039 7.27499 36.7039H5.81249V36.0711V35.4383H7.44374C9.24374 35.4383 9.00468 35.5367 10.1719 34.243C10.8328 33.4977 12.0562 33.2586 13.0266 33.6523Z"
      fill="#DE285E"
    />
    <Path
      d="M5.44688 44.593C5.19375 44.8742 5.17969 45.2117 5.17969 52.7633C5.17969 60.2023 5.19375 60.6383 5.43281 60.8211C5.68594 61.0039 7.19063 61.3133 9.1875 61.5945C10.5375 61.7914 13.4625 61.7914 14.8125 61.5945C16.8094 61.3133 18.3141 61.0039 18.5672 60.8211C18.8063 60.6383 18.8203 60.2023 18.8203 52.7492V44.8742L18.5109 44.5648L18.2156 44.2555L16.05 44.5789C13.2656 45.0008 10.6922 45.0008 8.02031 44.593C5.65781 44.2273 5.77031 44.2273 5.44688 44.593ZM12 46.6039C13.5328 46.6039 14.9531 46.5195 15.7688 46.3789L17.0625 46.168V52.8195V59.457L16.6828 59.5414C13.6734 60.1883 10.3266 60.1883 7.33125 59.5414L6.9375 59.457V52.8195V46.168L8.24531 46.3789C9.04688 46.5195 10.4672 46.6039 12 46.6039Z"
      fill="#DE285E"
    />
    <Path
      d="M10.9453 65.1094C8.9625 65.3203 6.69844 66.0937 4.96875 67.1625C3.61875 67.9922 3.28125 68.3016 3.28125 68.7656C3.28125 69.2016 3.66094 69.6094 4.06875 69.6094C4.20938 69.6094 4.61719 69.4125 4.96875 69.1734C9.42656 66.15 14.5172 66.0234 18.7219 68.8219C19.8047 69.5391 19.9453 69.5672 20.4094 69.2437C20.775 68.9906 20.8313 68.3297 20.4938 68.0062C20.1 67.6125 19.0875 66.9516 18.1031 66.4734C15.8531 65.3484 13.2656 64.8703 10.9453 65.1094Z"
      fill="#DE285E"
    />
  </StyledSvg>
);

export default AperitiveBottle;
