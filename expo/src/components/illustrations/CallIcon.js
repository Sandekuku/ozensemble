import React from "react";
import Svg, { Path, G } from "react-native-svg";
import styled from "styled-components";

const StyledSvg = styled(Svg)``;

const CallIcon = ({ size, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 250 250" {...props}>
    <Path
      fill="#F0F0F0"
      d="M213.102 125.723c48.974 27.744 49.229 72.697.567 100.464-48.662 27.767-127.795 27.739-176.77 0-48.973-27.738-49.234-72.697-.566-100.464 48.668-27.767 127.806-27.744 176.769 0Z"
    />
    <Path
      fill="#E6E6E6"
      d="M52.93 4.046c-2.65 1.533-4.94 4.617-6.041 7.82-.7.08-1.374.312-1.974.682l-.425.261a11.57 11.57 0 0 0-4.538 7.298 6.732 6.732 0 0 0 0 2.272.397.397 0 0 1-.182.37l-2.745 1.573a4.773 4.773 0 0 0-2.156 3.737c0 1.374.976 1.93 2.173 1.238l26.727-15.454a4.734 4.734 0 0 0 2.156-3.737c0-1.375-.976-1.925-2.167-1.233l-4.379 2.528c-.136.08-.227 0-.176-.193.402-1.275.567-2.613.488-3.948-.29-3.623-2.967-5.111-6.24-3.481-.187.08-.357.17-.521.267ZM32.039.635a10.267 10.267 0 0 0-4.17 5.402 3.292 3.292 0 0 0-1.36.465c-.102.057-.2.12-.296.188a7.953 7.953 0 0 0-3.136 5.037 4.648 4.648 0 0 0 0 1.562.273.273 0 0 1-.125.256l-1.889 1.09a3.29 3.29 0 0 0-1.486 2.579c0 .948.675 1.329 1.497.852L39.52 7.4a3.291 3.291 0 0 0 1.487-2.579c0-.948-.675-1.329-1.498-.852l-2.995 1.744c-.096.057-.159 0-.125-.13.277-.881.391-1.805.335-2.727C36.526.357 34.676-.671 32.402.454l-.363.181Z"
    />
    <Path
      fill="#E0E0E0"
      d="m44.041 189.579 7.867 4.714a3.848 3.848 0 0 0 3.971 0l63.966-38.353a1.367 1.367 0 0 0 .478-1.836 1.367 1.367 0 0 0-.478-.498l-7.89-4.714a3.851 3.851 0 0 0-3.971 0l-63.943 38.37a1.364 1.364 0 0 0-.64 1.159 1.373 1.373 0 0 0 .64 1.158ZM192.931 178.036c13.217 7.645 13.29 20.031.159 27.67-13.131 7.639-34.493 7.645-47.709 0-13.216-7.644-13.29-20.025-.159-27.67 13.131-7.645 34.493-7.639 47.709 0Z"
    />
    <Path
      fill="#4030A5"
      d="M36.05 147.781c-1.459-1.398-3.132-2.925-3.234-4.947a4.447 4.447 0 0 1 2.904-4.141 6.717 6.717 0 0 1 5.236.398 14.346 14.346 0 0 1 4.191 3.356 33.664 33.664 0 0 1 7.907 29.375c-.147.681-.374 1.437-.986 1.76-.976.517-2.088-.391-2.757-1.272a20.364 20.364 0 0 1-3.24-6.418c-.566-1.959-.317-4.117-1.054-5.963-1.804-4.527-5.497-8.826-8.968-12.148Z"
    />
    <Path
      fill="#4030A5"
      d="M36.05 147.781c-1.459-1.398-3.132-2.925-3.234-4.947a4.447 4.447 0 0 1 2.904-4.141 6.717 6.717 0 0 1 5.236.398 14.346 14.346 0 0 1 4.191 3.356 33.664 33.664 0 0 1 7.907 29.375c-.147.681-.374 1.437-.986 1.76-.976.517-2.088-.391-2.757-1.272a20.364 20.364 0 0 1-3.24-6.418c-.566-1.959-.317-4.117-1.054-5.963-1.804-4.527-5.497-8.826-8.968-12.148Z"
    />
    <Path
      fill="#fff"
      d="M51.217 170.941a.381.381 0 0 1-.275-.115.387.387 0 0 1-.11-.277 38.245 38.245 0 0 0-3.825-16.352 38.2 38.2 0 0 0-10.458-13.13.399.399 0 0 1 .052-.669.4.4 0 0 1 .447.039 38.963 38.963 0 0 1 10.678 13.405 39.016 39.016 0 0 1 3.9 16.696.395.395 0 0 1-.117.291.381.381 0 0 1-.134.086.37.37 0 0 1-.158.026Z"
    />
    <Path
      fill="#4030A5"
      d="M46.435 186.434c-2.456.789-5.536.273-6.96-1.886-1.701-2.533-.63-6.44-2.87-8.519-1.253-1.136-3.097-1.261-4.759-1.601-1.662-.341-3.505-1.267-3.755-2.948-.329-2.226 2.405-4.078 2.025-6.299-.38-2.22-3.403-2.873-4.294-4.907-.81-1.851.624-4.095 2.53-4.787 1.906-.693 4.022-.216 5.916.488 1.895.704 3.738 1.636 5.746 1.886 2.008.249 4.504-.154 6.035 1.283 2.054 1.92.88 5.583 2.462 7.9 1.067 1.556 3.069 2.096 4.6 3.186a7.39 7.39 0 0 1 3.04 6.049c-.05 2.55-1.389 4.396-3.318 5.861-2.042 1.591-3.84 3.476-6.398 4.294Z"
    />
    <Path
      fill="#000"
      d="M46.435 186.434c-2.456.789-5.536.273-6.96-1.886-1.701-2.533-.63-6.44-2.87-8.519-1.253-1.136-3.097-1.261-4.759-1.601-1.662-.341-3.505-1.267-3.755-2.948-.329-2.226 2.405-4.078 2.025-6.299-.38-2.22-3.403-2.873-4.294-4.907-.81-1.851.624-4.095 2.53-4.787 1.906-.693 4.022-.216 5.916.488 1.895.704 3.738 1.636 5.746 1.886 2.008.249 4.504-.154 6.035 1.283 2.054 1.92.88 5.583 2.462 7.9 1.067 1.556 3.069 2.096 4.6 3.186a7.39 7.39 0 0 1 3.04 6.049c-.05 2.55-1.389 4.396-3.318 5.861-2.042 1.591-3.84 3.476-6.398 4.294Z"
      opacity={0.3}
    />
    <Path
      fill="#fff"
      d="m45.33 168.993-.03-.04a40.538 40.538 0 0 0-1.134-1.567 28.259 28.259 0 0 0-14.124-9.405.38.38 0 0 0-.316.012.401.401 0 0 0-.204.244.389.389 0 0 0 .155.431.39.39 0 0 0 .15.062 27.47 27.47 0 0 1 13.732 9.144c.108.137.205.29.312.426-4.401-1.618-8.894-.698-11.287 1.233a.38.38 0 0 0-.154.271.388.388 0 0 0 .097.297.37.37 0 0 0 .27.156.387.387 0 0 0 .297-.094c2.371-1.914 7.266-2.766 11.702-.613a27.503 27.503 0 0 1 4.674 13.738.387.387 0 0 0 .386.364.38.38 0 0 0 .147-.037.373.373 0 0 0 .2-.221.39.39 0 0 0 .021-.151 28.307 28.307 0 0 0-4.895-14.25Z"
    />
    <Path
      fill="#4030A5"
      d="M195.74 160.23c1.185-1.136 2.541-2.374 2.62-4.01a3.592 3.592 0 0 0-2.354-3.357 5.409 5.409 0 0 0-4.248.324 11.465 11.465 0 0 0-3.404 2.721 27.272 27.272 0 0 0-6.064 11.156 27.308 27.308 0 0 0-.357 12.697 2.028 2.028 0 0 0 .806 1.432c.794.42 1.702-.319 2.235-1.034a16.415 16.415 0 0 0 2.626-5.214c.476-1.584.261-3.339.857-4.833 1.469-3.692 4.464-7.185 7.283-9.882Z"
    />
    <Path
      fill="#fff"
      d="M183.425 179.025a.318.318 0 0 0 .318-.318 31.018 31.018 0 0 1 3.104-13.269 30.968 30.968 0 0 1 8.49-10.653.316.316 0 0 0 .02-.418.315.315 0 0 0-.412-.076 31.642 31.642 0 0 0-11.826 24.422.316.316 0 0 0 .306.312Z"
    />
    <Path
      fill="#4030A5"
      d="M187.311 191.593c1.996.642 4.498.222 5.672-1.528 1.356-2.056.511-5.225 2.326-6.889 1.021-.926 2.512-1.022 3.862-1.3 1.35-.279 2.837-1.023 3.046-2.386.267-1.812-1.951-3.311-1.639-5.111.312-1.801 2.757-2.329 3.483-3.976.658-1.505-.511-3.328-2.053-3.885-1.543-.556-3.262-.176-4.799.392-1.537.568-3.035 1.329-4.663 1.528-1.628.199-3.653-.125-4.895 1.045-1.667 1.556-.715 4.544-2.002 6.412-.862 1.261-2.485 1.704-3.727 2.579a5.966 5.966 0 0 0-1.831 2.155 5.996 5.996 0 0 0-.636 2.757c.039 2.068 1.134 3.561 2.688 4.754 1.64 1.261 3.12 2.794 5.168 3.453Z"
    />
    <Path
      fill="#000"
      d="M187.311 191.593c1.996.642 4.498.222 5.672-1.528 1.356-2.056.511-5.225 2.326-6.889 1.021-.926 2.512-1.022 3.862-1.3 1.35-.279 2.837-1.023 3.046-2.386.267-1.812-1.951-3.311-1.639-5.111.312-1.801 2.757-2.329 3.483-3.976.658-1.505-.511-3.328-2.053-3.885-1.543-.556-3.262-.176-4.799.392-1.537.568-3.035 1.329-4.663 1.528-1.628.199-3.653-.125-4.895 1.045-1.667 1.556-.715 4.544-2.002 6.412-.862 1.261-2.485 1.704-3.727 2.579a5.966 5.966 0 0 0-1.831 2.155 5.996 5.996 0 0 0-.636 2.757c.039 2.068 1.134 3.561 2.688 4.754 1.64 1.261 3.12 2.794 5.168 3.453Z"
      opacity={0.3}
    />
    <Path
      fill="#fff"
      d="M188.213 177.442v-.034c.3-.431.606-.857.935-1.266a22.864 22.864 0 0 1 11.481-7.622.319.319 0 0 1 .391.216.305.305 0 0 1-.029.242.332.332 0 0 1-.081.094.352.352 0 0 1-.111.056 22.223 22.223 0 0 0-11.134 7.406c-.091.113-.171.233-.256.346 3.568-1.318 7.21-.568 9.155 1a.32.32 0 0 1 .104.355.322.322 0 0 1-.302.213.303.303 0 0 1-.199-.074c-1.923-1.551-5.893-2.238-9.495-.494a22.347 22.347 0 0 0-3.817 11.16.32.32 0 0 1-.318.295.31.31 0 0 1-.295-.335 22.917 22.917 0 0 1 3.971-11.558Z"
    />
    <Path
      fill="#4030A5"
      d="M142.585 37.416c.261-.153.471 0 .471.273v3.186a1.034 1.034 0 0 1-.471.812c-.261.154-.471 0-.471-.267v-3.186a1.048 1.048 0 0 1 .471-.818ZM136.533 43.47a.322.322 0 0 1 .363 0l1.787 1.408c.17.137.141.495-.057.801a.896.896 0 0 1-.301.301.315.315 0 0 1-.363 0l-1.787-1.408c-.17-.137-.147-.494.057-.801a.908.908 0 0 1 .301-.301ZM134.434 47.583a.414.414 0 0 1 .21-.034l2.405.21c.227 0 .306.307.176.642a1.06 1.06 0 0 1-.409.505.396.396 0 0 1-.238.063l-2.405-.205c-.221 0-.301-.306-.17-.642.076-.224.229-.415.431-.539ZM136.856 55.5c.165-.096.323-.09.408.034a.788.788 0 0 1-.17.84l-2.393 2.983a.862.862 0 0 1-.233.204c-.164.097-.323.091-.414-.034a.804.804 0 0 1 .17-.84l2.394-2.982a.861.861 0 0 1 .238-.205ZM136.056 53.425c.227-.125.426-.057.465.181a.998.998 0 0 1-.38.852l-2.728 2.13-.079.057c-.227.13-.426.062-.466-.182a.99.99 0 0 1 .381-.852l2.722-2.13.085-.056ZM148.683 36.448a.36.36 0 0 1 .306-.051c.198.08.227.403.062.732l-1.775 3.47a.978.978 0 0 1-.363.404.387.387 0 0 1-.306.05c-.199-.079-.227-.408-.057-.737l1.77-3.465a.936.936 0 0 1 .363-.403ZM145.835 36.19a.479.479 0 0 1 .165-.057c.244-.04.368.199.283.534l-.941 3.538a1.034 1.034 0 0 1-.443.614.456.456 0 0 1-.159.062c-.244.04-.374-.199-.283-.534l.936-3.538a1.06 1.06 0 0 1 .442-.619Z"
    />
    <G fill="#000" opacity={0.2}>
      <Path d="M142.585 37.416c.261-.153.471 0 .471.273v3.186a1.034 1.034 0 0 1-.471.812c-.261.154-.471 0-.471-.267v-3.186a1.048 1.048 0 0 1 .471-.818ZM136.533 43.47a.322.322 0 0 1 .363 0l1.787 1.408c.17.137.141.495-.057.801a.896.896 0 0 1-.301.301.315.315 0 0 1-.363 0l-1.787-1.408c-.17-.137-.147-.494.057-.801a.908.908 0 0 1 .301-.301ZM134.434 47.583a.414.414 0 0 1 .21-.034l2.405.21c.227 0 .306.307.176.642a1.06 1.06 0 0 1-.409.505.396.396 0 0 1-.238.063l-2.405-.205c-.221 0-.301-.306-.17-.642.076-.224.229-.415.431-.539ZM136.856 55.5c.165-.096.323-.09.408.034a.788.788 0 0 1-.17.84l-2.393 2.983a.862.862 0 0 1-.233.204c-.164.097-.323.091-.414-.034a.804.804 0 0 1 .17-.84l2.394-2.982a.861.861 0 0 1 .238-.205ZM136.056 53.429c.227-.125.426-.057.465.181a.998.998 0 0 1-.38.852l-2.728 2.13-.079.057c-.227.13-.426.062-.466-.182a.99.99 0 0 1 .381-.852l2.722-2.13.085-.056ZM148.683 36.452a.36.36 0 0 1 .306-.051c.198.08.227.403.062.732l-1.775 3.47a.978.978 0 0 1-.363.404.387.387 0 0 1-.306.05c-.199-.079-.227-.408-.057-.738l1.77-3.464a.936.936 0 0 1 .363-.403ZM145.835 36.19a.479.479 0 0 1 .165-.057c.244-.04.368.199.283.534l-.941 3.538a1.034 1.034 0 0 1-.443.614.456.456 0 0 1-.159.062c-.244.04-.374-.199-.283-.534l.936-3.538a1.06 1.06 0 0 1 .442-.619Z" />
    </G>
    <Path
      fill="#455A64"
      d="M144.083 196.133a7.097 7.097 0 0 0 5.405 2.039 16.031 16.031 0 0 0 5.712-1.482c1.832-.773 4.124-2.931 6.103-2.891a46.735 46.735 0 0 0 5.78-.403 31.68 31.68 0 0 0-.822-8.037l-9.229-.25c-2.49 3.505-7.334 6.418-10.998 7.509a3.273 3.273 0 0 0-2.269 2.487.222.222 0 0 0 0 .063c.066.333.173.658.318.965Z"
    />
    <Path
      fill="#37474F"
      d="M161.303 193.798c-1.979-.04-4.271 2.118-6.103 2.891a16.052 16.052 0 0 1-5.712 1.482 7.103 7.103 0 0 1-5.406-2.039 4.166 4.166 0 0 1-.317-.965.222.222 0 0 1 0-.063 3.045 3.045 0 0 0 0 1.261c.066.334.172.658.317.965a7.075 7.075 0 0 0 5.406 2.039 16.029 16.029 0 0 0 5.712-1.476c1.832-.773 4.124-2.931 6.103-2.891 1.897.014 3.792-.1 5.673-.341.045-.42.073-.846.09-1.266a46.865 46.865 0 0 1-5.763.403ZM185.552 196.719a13.94 13.94 0 0 1-.278 2.874 6.685 6.685 0 0 1-2.558 4.185 8.071 8.071 0 0 1-4.067 1.136 8.814 8.814 0 0 1-3.715-.397 4.226 4.226 0 0 1-2.178-1.823v.051a3.969 3.969 0 0 0 2.507 2.675 8.76 8.76 0 0 0 3.721.392 8.013 8.013 0 0 0 4.061-1.108 6.647 6.647 0 0 0 2.558-4.191c.192-.944.285-1.905.278-2.868a4.909 4.909 0 0 1 1.503-3.51c.231-.219.449-.45.653-.693a1.706 1.706 0 0 0 .402-1.255c0-.176-.034-.353-.056-.523-.335.409-1.135 1.375-1.339 1.568a4.913 4.913 0 0 0-1.492 3.487Z"
    />
    <Path
      fill="#455A64"
      d="M178.496 186.695a10.8 10.8 0 0 1-.743 5.844 22.595 22.595 0 0 1-3.001 5.067 15.249 15.249 0 0 0-1.577 2.351 4.352 4.352 0 0 0-.442 2.715 4.226 4.226 0 0 0 2.178 1.823 8.814 8.814 0 0 0 3.715.397 8.068 8.068 0 0 0 4.067-1.136 6.686 6.686 0 0 0 2.559-4.185c.191-.946.285-1.909.278-2.874a4.911 4.911 0 0 1 1.497-3.51c.204-.193 1.004-1.136 1.339-1.568a10.739 10.739 0 0 0-1.379-4.06l-8.491-.864Z"
    />
    <Path
      fill="#37474F"
      d="m153.737 102.07.697 48.878 2.269 34.213c5.673 3.692 9.813.676 9.813.676 2.161-16.209 2.451-26.177 1.276-32.941l1.078-26.376 3.211 27.404 5.445 33.571c5.837 3.885 9.96 0 9.96 0 0-12.426 1.078-26.318-2.268-35.281 2.354-27.687-1.572-49.633-1.572-49.633l-29.909-.511Z"
    />
    <Path
      fill="#263238"
      d="m167.656 116.468 1.191 10.076-.504 12.353-2.19-20.31c-5.105-2.039-5.74-4.907-5.74-4.907a15.305 15.305 0 0 0 7.243 2.788Z"
    />
    <Path
      fill="#455A64"
      d="m158.053 45.576-1.299-.681h-.079a.73.73 0 0 0-.675.034l-11.623 6.719a1.493 1.493 0 0 0-.748 1.3v5.634a.722.722 0 0 0 .306.602c.044.03.092.055.142.074l1.259.67-.062-1.028 11.077-6.4a1.509 1.509 0 0 0 .755-1.301v-4.907l.947-.716Z"
    />
    <Path
      fill="#455A64"
      d="m157.685 53.164-11.623 6.718a.752.752 0 0 1-1.134-.647v-5.64a1.517 1.517 0 0 1 .748-1.3l11.657-6.72a.747.747 0 0 1 1.134.654v5.634a1.487 1.487 0 0 1-.782 1.3Z"
    />
    <Path
      fill="#4030A5"
      d="M145.682 53.597a.754.754 0 0 1 .374-.648l11.628-6.718v5.633a.748.748 0 0 1-.374.653l-11.622 6.714-.006-5.634Z"
    />
    <Path
      fill="#FFA8A7"
      d="M152.631 61.93c.156-.37.419-.684.754-.904a5.25 5.25 0 0 0 2.139-2.64c.325-1.168.505-2.372.533-3.584a5.586 5.586 0 0 1 1.225-3.345c-2.065-.835-2.904 1.045-3.653 4.055l-6.914 3.975.096.227a1.71 1.71 0 0 1 0 1.409l-2.014 4.095a7.033 7.033 0 0 0 6.807.767c.26-1.371.603-2.726 1.027-4.056Z"
    />
    <Path
      fill="#E0E0E0"
      d="M151.235 70.22c.363-1.472.8-3.409 1.084-5.112a8.916 8.916 0 0 1-7.766-.92 39.701 39.701 0 0 0-2.2 4.305 10.055 10.055 0 0 0 8.882 1.726Z"
    />
    <Path
      fill="#F0F0F0"
      d="M150.594 72.674s.284-1.011.641-2.454a10.05 10.05 0 0 1-8.882-1.743 45.791 45.791 0 0 0-3.58 14.283 12.232 12.232 0 0 0 .21 4.311 5.085 5.085 0 0 0 2.592 3.317c1.833.84 4.028.114 5.673-1.028 3.125-2.147 5.105-5.572 6.948-8.877l5.031-17.987c-2.977.33-5.417 2.005-8.633 10.178Z"
    />
    <Path
      fill="#000"
      d="M150.594 72.676c-1.18 4.18-3.023 10.853-3.023 10.853 4.197-4.27 3.023-10.853 3.023-10.853ZM158.501 65.152a12.655 12.655 0 0 0-3.76 4.016c-1.645 2.84-2.127 6.145-2.576 9.382-.317 2.272-.633 4.544-.947 6.816a50.287 50.287 0 0 0 2.995-4.88l4.288-15.334Z"
      opacity={0.1}
    />
    <Path
      fill="#F0F0F0"
      d="m164.61 61.945-5.366.568c-4.396 3.88-6.664 12.018-5.717 21.014.557 6.168.627 12.37.21 18.549 11.911 8.713 28.038 2.386 29.926.495l-1.525-11.047a7.718 7.718 0 0 1 .601-3.63c1.134-2.617 3.131-7.763 3.403-11.75.17-3.552-.57-7.089-2.15-10.274l-7.799-3.408-11.583-.517Z"
    />
    <Path
      fill="#000"
      d="M182.739 87.874c.992-2.306 2.666-6.572 3.233-10.28-1.106.67-2.269 1.329-2.734 2.43a19.544 19.544 0 0 0-1.106 11.257 7.689 7.689 0 0 1 .607-3.407Z"
      opacity={0.1}
    />
    <Path
      fill="#E0E0E0"
      d="M164.792 65.873c2.309.852 4.362 4.97 4.362 4.97 6.069-5.157 7.016-8.378 7.016-8.378-1.559-2.22-3.261-2.578-3.261-2.578l-8.117 5.986ZM164.792 65.87c-1.764.05-3.324 2.51-3.324 2.51-.284-4.305 3.324-7.622 3.324-7.622v5.111Z"
    />
    <Path
      fill="#F28F8F"
      d="m173.051 55.063-8.259 2.953v3.061a13.508 13.508 0 0 0 5.235-1.903 8.051 8.051 0 0 0 3.024-4.111Z"
    />
    <Path
      fill="#FFA8A7"
      d="M173.051 55.061a8.052 8.052 0 0 1-3.024 4.112 13.51 13.51 0 0 1-5.235 1.903v4.793s8.73-3.925 8.73-5.77V54.89l-.471.17Z"
    />
    <Path
      fill="#263238"
      d="M157.14 42.936a4.983 4.983 0 0 1-4.538-2.556.687.687 0 0 1 .743-.988c.632.114 1.28.114 1.912 0a9.095 9.095 0 0 1-1.781-6.758.851.851 0 0 1 .448-.63.853.853 0 0 1 .771-.012 16.753 16.753 0 0 0 8.48 1.704c1.56-.108 3.097-.443 4.657-.568a8.62 8.62 0 0 1 4.577.698 4.355 4.355 0 0 1 2.496 3.692 2.16 2.16 0 0 1 1.549-.897 2.384 2.384 0 0 1 1.804.533c-.902.5-1.782 1-2.683 1.494.924-.33 2.087.392 2.546 1.261.39.905.559 1.89.494 2.874a22.42 22.42 0 0 1-.176 3.902 7.498 7.498 0 0 1-1.475 3.578 5.67 5.67 0 0 1-2.688 1.823 7.322 7.322 0 0 1-4.357-.142 17.285 17.285 0 0 1-3.97-1.977 62.061 62.061 0 0 1-8.809-7.03Z"
    />
    <Path
      fill="#FFA8A7"
      d="M156.941 40.336a30.042 30.042 0 0 0 1.702 16.044c.465 1.176 1.078 2.391 2.173 3.022 1.094.63 2.575.517 3.885.318a19.644 19.644 0 0 0 6.137-1.704 8.373 8.373 0 0 0 4.249-4.584 3.671 3.671 0 0 0 3.721-1.46 6.979 6.979 0 0 0 1.208-4.071c0-.92-.17-2.005-.998-2.408-.828-.404-1.702.045-2.354.568a7.053 7.053 0 0 0-2.269 3.441c-.607-2.237-1.554-4.401-2.161-6.645-.239-.886-.533-1.846-1.305-2.34-.936-.602-2.161-.255-3.244 0a21.384 21.384 0 0 1-10.744-.181Z"
    />
    <Path
      fill="#F28F8F"
      d="m163.47 47.137-2.62 4.418 3.125.585-.505-5.003ZM166.976 53.668l-2.377 1.136a1.56 1.56 0 0 0 1.804.517 1.418 1.418 0 0 0 .573-1.653Z"
    />
    <Path
      fill="#000"
      d="m166.976 53.668-2.377 1.136a1.56 1.56 0 0 0 1.804.517 1.418 1.418 0 0 0 .573-1.653Z"
      opacity={0.3}
    />
    <Path
      fill="#F28F8F"
      d="M165.586 55.407c.277.057.565.031.828-.074a1.27 1.27 0 0 0 .63-1.255c-.338 0-.666.114-.93.324-.3.254-.489.614-.528 1.005Z"
    />
    <Path
      fill="#263238"
      d="M167.997 47.313a.916.916 0 0 1-.198.66.89.89 0 0 1-.605.326.898.898 0 0 1-.952-1.153.888.888 0 0 1 .768-.634.902.902 0 0 1 .987.801ZM160.475 47.784a.902.902 0 0 1-.469.877.898.898 0 1 1-.518-1.684.9.9 0 0 1 .987.807ZM159.244 44.317l-1.837 1.568a1.272 1.272 0 0 1 .244-1.437 1.504 1.504 0 0 1 1.593-.131ZM166.879 43.437c.704.392 1.407.784 2.116 1.17a1.287 1.287 0 0 0-.528-1.363 1.527 1.527 0 0 0-1.588.193Z"
    />
    <Path
      fill="#FFA8A7"
      d="m202.212 85.275 2.836-1.408a5.067 5.067 0 0 0 2.127-1.988l.89-1.528a6.245 6.245 0 0 1 2.61-2.43 21.235 21.235 0 0 0 4.537-3.01 2.365 2.365 0 0 1-.363 2.965 17.015 17.015 0 0 1-1.86 1.481l1.367.347c.987.253 2.029.19 2.978-.182l3.902-1.517a.68.68 0 0 1 .913.75 15.482 15.482 0 0 1-1.934 4.902 5.836 5.836 0 0 1-3.97 2.788c-1.991.375-3.92.67-5.015.824a6.062 6.062 0 0 0-1.803.568l-4.186 2.084-3.029-4.646Z"
    />
    <Path
      fill="#F0F0F0"
      d="M199.5 89.667a7.114 7.114 0 0 1-.499-3.714l-5.366 2.544a112.365 112.365 0 0 1-2.269-11.858c-.635-5.39-.493-9.014-7.419-10.791l-.732 14.198s.851 17.323 5.814 19.242c4.107 1.585 7.006-2.328 13.273-6.383a7.094 7.094 0 0 1-2.802-3.238Z"
    />
    <Path
      fill="#000"
      d="M190.067 92.046c.188-.806 1.509-2.652 3.591-3.55 0 0-.159-.63-.391-1.652-1.078.534-3.733 2.164-3.2 5.202Z"
      opacity={0.1}
    />
    <Path
      fill="#E0E0E0"
      d="m203.8 83.668-4.799 2.272a6.994 6.994 0 0 0 3.324 6.951 43.99 43.99 0 0 1 4.379-2.493s-2.552-2.044-2.904-6.73Z"
    />
    <Path
      fill="#4030A5"
      d="M223.448 14.29a.722.722 0 0 0-.368-.63l-3.279-1.824h-.028a.71.71 0 0 0-.704 0l-22.416 12.96a2.202 2.202 0 0 0-1.095 1.903v8.343l-7.76 8.036c-.692.722-.765 1.806-.227 1.977l3.092 1.704a.478.478 0 0 0 .425.136l4.504-.568v6.123a.714.714 0 0 0 .357.624l3.256 1.812h.08a.716.716 0 0 0 .669-.028l22.417-12.96a2.185 2.185 0 0 0 1.094-1.904l-.017-25.705Zm-23.863 12.619a.842.842 0 0 1 .08-.068.93.93 0 0 0-.08.04v.028Z"
    />
    <Path
      fill="#fff"
      d="M215.757 22.367c-.1.05-.189.12-.261.205a.722.722 0 0 0-.131.232c-.243.492-.452 1.001-.624 1.523a25.1 25.1 0 0 0-.521 1.385c-.043.083-.076.17-.097.262-.054.11-.096.226-.125.346-.102.261-.204.517-.3.778a4.33 4.33 0 0 0-.358.886.621.621 0 0 0 .068.608c.245.232.546.397.874.477l.085.028.272.074.471.233.091.057c.028.04.062.074.091.108a.58.58 0 0 1 .073.136.509.509 0 0 1 0 .233 8.633 8.633 0 0 0-.079.346c-.023.114-.142.387-.21.568l-.102.25-.352.83c-.119.266-.204.488-.289.71a4.315 4.315 0 0 0-.216.488l-.119.244c-.096.204-.198.409-.295.619l-.085.182-.317.568-.12.227-.368.647-.097.165-.363.693-.113.17-.851 1.238-.34.46-.097.131-1.038 1.318-.397.375c-.075.09-.165.167-.266.227a.405.405 0 0 1-.426 0l-.255-.13c0-.04-.034-.046-.062-.052a7.844 7.844 0 0 0-1.135-.83.469.469 0 0 0-.505 0 .856.856 0 0 0-.13.097c-.17.142-.317.309-.437.495a.225.225 0 0 0-.096.119c-.312.437-.658.829-.982 1.25-.323.42-.595.698-.885 1.061a21.55 21.55 0 0 0-.986 1.227 1.489 1.489 0 0 0-.176.244.856.856 0 0 0-.205.699c.002.152.015.304.04.454.012.194.052.386.119.568.017.12.052.237.102.347.017.035.036.069.057.102a.178.178 0 0 0 0 .08.545.545 0 0 0 .063.09.3.3 0 0 0 .164.188.518.518 0 0 0 .204.164l.142.057h.096l.12.046h.056a.467.467 0 0 0 .199 0 .093.093 0 0 0 .048.012.093.093 0 0 0 .048-.012c.082.02.168.02.25 0 .09.02.182.02.272 0 .09.013.182.013.272 0h.165c.129-.013.256-.04.38-.08h.062l.136-.034a.236.236 0 0 0 .097-.04l.142-.05c.142-.042.28-.096.414-.16l.113-.057.091-.05a2.23 2.23 0 0 0 .232-.148c.092-.054.181-.113.267-.177.102-.068.201-.142.295-.221.083-.057.168-.12.255-.187l.102-.091.051-.046.142-.119c.147-.127.287-.262.42-.403.11-.09.213-.189.306-.296a.271.271 0 0 0 .085-.096c.203-.175.393-.365.568-.568.152-.133.296-.276.431-.426.114-.101.22-.212.317-.33l.176-.181a.486.486 0 0 0 .131-.148.15.15 0 0 0 .062-.068l.096-.09c.053-.059.102-.12.148-.183.102-.102.199-.21.289-.323l.091-.114.091-.114c.18-.198.349-.406.505-.624.084-.083.156-.177.215-.279.106-.119.203-.246.289-.38.146-.18.281-.37.403-.568.08-.102.114-.153.153-.199l.102-.148c.074-.102.136-.204.205-.312l.13-.176a1.97 1.97 0 0 0 .113-.187c.086-.106.16-.22.222-.341.108-.145.206-.297.295-.454.033-.044.063-.09.09-.137a.375.375 0 0 0 .04-.068l.04-.074.096-.136c.091-.142.176-.284.255-.437l.114-.188.357-.619a.681.681 0 0 0 .119-.199c.091-.147.176-.295.261-.454 0-.051.051-.102.08-.153.048-.07.087-.144.119-.222l.306-.568c.051-.108.108-.21.159-.318.087-.142.161-.293.221-.449.244-.448.46-.903.658-1.368l.091-.21c.085-.163.157-.332.215-.506.234-.521.44-1.054.619-1.596l.051-.136a8.54 8.54 0 0 0 .3-.937c.125-.386.227-.767.324-1.136.034-.125.068-.25.096-.38a.18.18 0 0 0 .034-.126.688.688 0 0 0 0-.09l.046-.17c.14-.463.249-.933.329-1.41v-.073a.264.264 0 0 0 0-.125V25.713a1.12 1.12 0 0 1 0-.143c.036-.2.053-.404.051-.607v-.25a.374.374 0 0 0 0-.176v-.097a1.66 1.66 0 0 0-.091-.522 2.737 2.737 0 0 0-.238-.727 2.816 2.816 0 0 0-.613-1 .659.659 0 0 0-.289-.238s-.029-.046-.063-.04a.502.502 0 0 0-.329-.102 2.52 2.52 0 0 0-1.043.181l-.119.051a1.268 1.268 0 0 0-.295.114l-.057.034c-.028.085-.114.12-.187.176Z"
    />
    <Path
      fill="#000"
      d="M198.916 54.308a.714.714 0 0 0 .346.62l-3.256-1.813a.71.71 0 0 1-.357-.624v-6.123l3.272-.403-.005 8.343Z"
      opacity={0.1}
    />
    <Path
      fill="#fff"
      d="m196.653 24.796 22.422-12.96a.707.707 0 0 1 .703 0h.029l3.278 1.823a.733.733 0 0 0-.726 0l-22.422 12.96a2.194 2.194 0 0 0-.93 1.051l-3.256-1.88a2.18 2.18 0 0 1 .902-.994Z"
      opacity={0.2}
    />
    <Path
      fill="#fff"
      d="M195.581 35.053V26.71c0-.31.065-.616.193-.898l3.233 1.858a2.293 2.293 0 0 0-.165.846v8.343l-3.261-1.806Z"
      opacity={0.1}
    />
    <Path
      fill="#fff"
      d="m187.821 43.08 7.76-8.025 3.284 1.828-7.76 8.031c-.601.625-.737 1.517-.419 1.863l-3.092-1.704c-.539-.187-.465-1.272.227-1.993Z"
      opacity={0.05}
    />
    <Path
      fill="#37474F"
      d="M116.43 9.391c-.431-1.635-3.488-4.753-6.528-4.69-.295.01-.585.073-.857.187L49.958 41.469a5.962 5.962 0 0 0-2.27 2.647 6.578 6.578 0 0 0-.567 2.703v139.113c0 3.544 3.755 6.923 7.284 5.299.077-.029.153-.063.226-.102l59.094-36.65a6.26 6.26 0 0 0 2.836-5.344V10.067a1.586 1.586 0 0 0-.131-.676Z"
    />
    <Path
      fill="#4030A5"
      d="M55.346 61.523a3.134 3.134 0 0 1 1.43-2.675l54.867-33.974a1.416 1.416 0 0 1 2.11 1.335V138.39a3.131 3.131 0 0 1-1.429 2.669L57.456 175.09a1.408 1.408 0 0 1-1.453-.037 1.416 1.416 0 0 1-.657-1.297V61.523Z"
    />
    <Path
      fill="#263238"
      d="M47.099 46.816v139.113c0 3.544 3.755 6.923 7.283 5.299a1.431 1.431 0 0 1-1.89-1.437V50.661c.001-1.203.333-2.382.96-3.408l-5.764-3.112a6.58 6.58 0 0 0-.59 2.675Z"
    />
    <Path
      fill="#455A64"
      d="M109.907 4.692c-.294.011-.584.075-.856.188L49.958 41.467a5.962 5.962 0 0 0-2.27 2.647l5.786 3.146a5.829 5.829 0 0 1 1.9-1.948l59.094-36.587a1.356 1.356 0 0 1 1.962.664c-.425-1.641-3.482-4.76-6.523-4.697Z"
    />
    <Path
      fill="#263238"
      d="M91.83 31.692c.42-.262.76-.057.76.46a1.855 1.855 0 0 1-.755 1.425l-11.594 7.287c-.414.261-.748.04-.748-.477a1.824 1.824 0 0 1 .743-1.409l11.594-7.286ZM77.263 40.847c.415-.261.75-.051.75.465a1.835 1.835 0 0 1-.75 1.42c-.414.262-.754.051-.76-.471a1.842 1.842 0 0 1 .76-1.414ZM84.683 30.636c.828-.523 1.497-.108 1.497.931a3.684 3.684 0 0 1-1.486 2.84c-.834.517-1.52.091-1.52-.943a3.666 3.666 0 0 1 1.509-2.828ZM84.689 161.599c1.701-1.062 3.051-.216 3.057 1.897.006 2.113-1.35 4.708-3.04 5.77-1.69 1.062-3.086.193-3.092-1.92a7.482 7.482 0 0 1 3.075-5.747Z"
    />
    <Path
      fill="#fff"
      d="M90.264 83.247a1.54 1.54 0 0 0-.391.324c-.089.11-.156.235-.199.37-.372.777-.69 1.58-.953 2.402-.283.72-.567 1.448-.788 2.175-.067.131-.116.27-.147.415a2.889 2.889 0 0 0-.193.567l-.46 1.216c-.05.12-.108.233-.158.346a6.902 6.902 0 0 0-.375 1.057 1.012 1.012 0 0 0 .097.954c.37.36.828.62 1.327.755l.136.04c.136.045.272.08.408.12l.715.363.136.096c.05.054.098.111.142.17.049.061.085.13.108.205.029.121.029.248 0 .37l-.12.567c-.101.307-.21.614-.317.915l-.153.397c-.159.426-.323.858-.488 1.284-.164.426-.312.772-.442 1.136a7.485 7.485 0 0 0-.33.761c-.056.13-.118.261-.175.386-.153.324-.3.647-.448.971l-.136.29-.477.943c-.057.119-.119.238-.181.357l-.568 1.023c-.045.085-.096.17-.147.255-.204.347-.409.699-.618 1.045l-.17.267c-.432.653-.863 1.306-1.3 1.96l-.51.721-.142.199-1.582 2.073-.533.607a1.7 1.7 0 0 1-.403.358.608.608 0 0 1-.647.04l-.391-.216c0-.057-.051-.068-.091-.074a11.733 11.733 0 0 0-1.753-1.306.703.703 0 0 0-.766 0 1.37 1.37 0 0 0-.198.148 3.91 3.91 0 0 0-.67.778.432.432 0 0 0-.135.199c-.477.687-.999 1.3-1.492 1.959-.46.539-.913 1.096-1.35 1.675-.25.296-.488.597-.715.926-.277.328-.537.672-.777 1.028a2.09 2.09 0 0 0-.267.392 1.364 1.364 0 0 0-.312 1.102c-.004.238.014.476.057.71.022.289.083.573.182.846a1.908 1.908 0 0 0 .238.727.404.404 0 0 0 .028.125.677.677 0 0 0 .097.148c.04.127.13.234.25.295a.77.77 0 0 0 .305.256c.072.035.146.065.222.09l.147.04a.996.996 0 0 0 .182.074h.085c.1.017.2.017.3 0a.137.137 0 0 0 .142 0 .788.788 0 0 0 .38 0c.137.025.277.025.414 0a1.35 1.35 0 0 0 .42-.04h.25c.192-.026.382-.07.567-.13h.085c.073-.012.145-.029.216-.052a.46.46 0 0 0 .136-.062c.164-.051.192-.068.227-.08a4.73 4.73 0 0 0 .618-.249l.181-.091.13-.08c.124-.07.242-.15.352-.238l.415-.273c.154-.107.3-.227.436-.358.139-.087.271-.184.397-.289.051-.04.102-.091.154-.137l.073-.079.216-.188c.215-.198.43-.403.635-.63.17-.143.328-.3.47-.471a.358.358 0 0 0 .126-.148 9.79 9.79 0 0 0 .834-.863 9.29 9.29 0 0 0 .652-.676 4.3 4.3 0 0 0 .482-.517l.26-.29a.88.88 0 0 0 .205-.227.283.283 0 0 0 .09-.108c.053-.048.102-.099.148-.153.083-.087.16-.18.227-.278.156-.163.304-.334.443-.512l.136-.181.142-.171c.26-.324.521-.636.76-.994.127-.129.238-.274.329-.431.161-.189.307-.39.436-.602.22-.28.425-.572.613-.875.12-.165.176-.239.227-.318.05-.08.113-.153.164-.233.051-.079.204-.318.301-.483l.198-.278c.066-.097.127-.197.182-.301a3.4 3.4 0 0 0 .335-.534c.162-.231.31-.471.442-.721.056-.064.103-.135.142-.21l.062-.108c.021-.039.04-.079.057-.119.051-.069.097-.142.142-.216.143-.22.274-.447.391-.682l.176-.295.567-.977c.073-.097.132-.205.176-.318.142-.227.272-.466.397-.71l.12-.244c.07-.11.13-.226.18-.347l.466-.886c.08-.17.164-.335.244-.499.131-.226.245-.461.34-.705.369-.71.692-1.431.993-2.158l.136-.33c.13-.26.241-.53.335-.806.351-.829.669-1.67.935-2.51 0-.074.052-.142.08-.21.18-.484.33-.98.448-1.483.199-.607.352-1.21.5-1.806.045-.204.096-.403.147-.602a.404.404 0 0 0 .05-.204c0-.046.03-.091.04-.137l.069-.266c.214-.73.38-1.475.499-2.227v-.113a.348.348 0 0 0 0-.194v-.119c0-.068 0-.136.028-.21v-.216a5.12 5.12 0 0 0 .08-.954v-.397a.732.732 0 0 0 0-.279 1.307 1.307 0 0 1 0-.153 2.8 2.8 0 0 0-.142-.824 4.153 4.153 0 0 0-.363-1.135 4.5 4.5 0 0 0-.925-1.58.992.992 0 0 0-.442-.368c0-.035-.04-.08-.097-.063a.754.754 0 0 0-.499-.165 3.625 3.625 0 0 0-1.583.29l-.181.074a2.37 2.37 0 0 0-.448.181l-.085.057c-.102 0-.239.063-.375.142Z"
    />
  </StyledSvg>
);

export default CallIcon;
