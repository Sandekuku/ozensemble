import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components';

const StyledSvg = styled(Svg)``;

const ManAndWomanBust = ({ color = '#DE285E', size, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 70 45" {...props}>
    <Path
      d="M38.074 42.91c.111-4.645.678-11.576-5.725-11.576H23.82v-6.398c1.325-.974 2.246-1.846 3.146-3.25a13.61 13.61 0 0 0 1.669-3.794l.142-.532.516-.185c.313-.102.607-.338.86-.646.789-1.004 1.032-3.332-.334-3.844l-.657-.246c-.03-1.836-.01-5.793-1.68-6.91-.98-.646-2.154-.236-3.368-.852-1.79-1.814-5.603-1.907-7.92-1.353-4.764 1.148-5.077 3.578-5.199 7.864l-.04 1.25-.617.257c-1.356.563-1.083 2.912-.253 3.896.486.553.85.594 1.497.769.354 1.271.79 2.594 1.386 3.824.89 1.825 1.8 2.912 3.398 4.101v6.05H7.85c-6.413 0-5.836 6.93-5.735 11.575h35.959Zm-2.296-16.005h7.708v-2.143c-1.77 0-3.227.144-4.653-1.281-2.387-2.379-.506-10.56-.243-13.544C39.106 4.205 43.476-.5 49.413.043c1.386.133 2.893.533 4.491 1.27 4.997-.594 6.95 4.03 7.708 9.074.435 2.81 1.507 10.99-.607 13.103-1.446 1.436-2.872 1.271-4.653 1.271v2.143h7.83c7.394 0 5.35 10.53 5.35 15.45H40.168c-.02.913-.05 1.805-.05 2.646H.07c0-6.449-1.355-15.759 7.779-15.759h6.453V26.32c-2.174-1.825-3.58-4.603-4.39-7.3a3.98 3.98 0 0 1-1.385-1.076c-1.598-1.887-1.73-5.311.405-6.829.162-5.249 1.021-8.437 6.787-9.822 2.984-.717 7.172-.471 9.58 1.651.94.082 1.992.113 2.872.462 1.608.625 2.832 2.347 3.024 7.658 2.155 1.466 2.084 4.85.556 6.767a3.99 3.99 0 0 1-1.264 1.087c-.83 2.727-2.387 5.27-4.602 7.064v3.26h5.472c.86-1.415 2.236-2.337 4.42-2.337v.001Zm4.41 13.493H67.63c.213-3.404 1.244-11.534-3.449-11.534H54.42v-6.07c1.497 0 4.137.39 5.23-.707 1.244-1.23.313-9.69.05-11.411-.627-4.142-2.124-7.957-5.806-7.382l-.556-.082c-1.487-.718-2.852-1.108-4.086-1.22-4.856-.442-8.325 3.475-8.74 8.12-.182 2.091-1.74 10.56-.324 11.975 1.093 1.097 3.733.707 5.24.707v6.07h-9.65c-.697 0-1.284.184-1.75.502 5.533.841 6.17 5.967 6.16 11.032Z"
      fill={color}
    />
  </StyledSvg>
);

export default ManAndWomanBust;
