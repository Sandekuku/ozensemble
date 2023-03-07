import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LockedBadge = ({ size = 96 }) => {
  return (
    <Svg width={size} height={size} className="m-auto border" viewBox="0 0 60 60">
      <Path // large grey bg
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.5516 0.202896C27.6359 0.549133 26.8423 1.09904 25.133 2.62655C23.3017 4.2559 22.8744 4.35774 20.1477 3.8282C18.9268 3.5838 17.5634 3.40049 17.0954 3.40049C14.8774 3.42086 13.1275 5.21315 12.2728 8.32927C11.642 10.7529 10.8891 11.4658 8.12175 12.3619C6.10726 13.0137 5.35436 13.4414 4.52008 14.3579C3.48231 15.4984 3.25848 16.7204 3.66544 18.92C4.41834
        23.0341 4.37764 23.2174 2.3021 25.5393C-0.668773 28.8591 -0.750166 31.0383 1.97652 34.073C4.2759 36.6188 4.43868 37.1076 3.82823 39.8979C3.31952 42.2401 3.38057 43.9102 4.01137 44.9896C4.66252 46.1302 5.65959 46.7819 7.83687 47.5558C10.1769 48.3909 10.2583 48.4316 10.2583 48.6353L12.1507 51.4663L12.7002 52.8512C13.0054 53.6252 13.4937 54.5824 13.799 54.9898C14.9385 56.4765 16.9937 56.9246 19.7204 56.2525C21.511 55.8248 23.0372 55.8655 23.8511 56.3543C24.2377 56.5784 24.5022 56.8635 24.4615 56.9653L27.1272 59.0835C28.4702 60.3055 31.5225 60.3055 32.8654 59.0835L35.5311 56.9653C35.4904 56.8635 35.7549 56.5784 36.1415 56.3543C36.9555 55.8655 38.4816 55.8248 40.2723 56.2525C44.0367 57.169 46.1326 56.1303 47.3332 52.7698C47.5774 52.0569 47.8012 51.507 47.8419
        51.5274L49.7343 48.6353C49.7916 48.452 49.8157 48.3909 52.1558 47.5558C54.3331 46.7819 55.3301 46.1302 55.9813 44.9896C56.6121 43.9102 56.6731 42.2401 56.1644 39.8979C55.554 37.1076 55.7167 36.6188 58.0161 34.073C60.7428 31.018 60.6818 28.8794 57.6905 25.5393C56.9987 24.7857 56.3069 23.8896 56.1441 23.5637C55.7981 22.8916 55.7574 21.7918 56.0423 20.6105C56.8156 17.4129 56.6528 15.6817 55.4726 14.3579C54.6383 13.4414 53.8854 13.0137 51.8709 12.3619C49.0221 11.425 48.371 10.814 47.6995 8.28854C46.8652 5.15205 45.0745 3.40049 42.6937 3.40049C42.3275 3.40049 41.0659 3.5838 39.845 3.8282C37.0979 4.37811 36.7113 4.27627 34.6765 2.46362C33.8422 1.73042 32.7637 0.89537 32.2957 0.610233C31.2579 -0.000770569 29.5894 -0.184074 28.5516 0.202896ZM32.6213 4.47994C31.787 3.74673 30.912 3.07462 30.6475 2.97279C30.3829 2.87096 30.0574 2.78949 29.9353 2.78949C29.5283 2.78949 28.3277 3.60416 27.1068 4.72434C25.2755 6.37406 24.1156 6.92396 22.386 6.94433C21.5924 6.94433 20.107 6.78139 19.1099 6.57772C16.2204 5.96672 16.0576 6.08892 14.8978 9.51055C13.7786 12.8507 12.6391 13.9302 8.91534 15.0911C7.26712 15.6206 6.51423 16.1094 6.31074 16.8019C6.22935 17.0259 6.37179 18.1461 6.59562 19.307C6.81945 20.4679 7.00259 21.8732 7.00259 22.4435C7.00259 23.8488 6.14795 25.58 4.60147 27.2705C2.9329 29.1238 2.62767 29.7348 2.95325 30.5495C3.09569 30.8754 3.84858 31.8937 4.62182 32.8102C7.10433 35.682 7.38921 36.8632 6.57527 40.7737C5.96482
        43.7676 6.1683 44.0731 9.54614 45.1322C12.8222 46.1913 13.8397 47.2707 15.0606 51.0182C15.3454 51.8533 15.7524 52.8105 15.9762 53.1364C16.3425 53.6252 16.5257 53.7066 17.3396 53.7066C17.8687 53.6863 18.8861 53.5641 19.6186 53.4011C20.3512 53.2382 21.5721 53.116 22.325 53.0956C24.0749 53.0956 25.1534 53.6048 27.3917 55.56C29.8539 57.6782 30.0981 57.6782 32.6416 55.5193C35.0224 53.5233 35.9177 53.0956 37.7694 53.0956C38.5834 53.116 39.8043 53.2382 40.4758 53.4011C41.1473 53.5641 42.124 53.7066 42.653 53.7066C43.8129 53.7066 44.1995 53.2789 44.9321 51.0182C46.153 47.2707 47.1704 46.1913 50.4465 45.1322C52.4406 44.5008 53.3767 43.9916 53.6005 43.4214C53.7836 42.9326 53.6616 41.7513 53.2139 39.8572C53.0918 39.348 52.9901 38.3908 52.9901 37.7187C52.9901 36.1097 53.5802 34.8469 55.2691 32.9121C57.0801 30.8347 57.3446 30.2847 56.9783 29.409C56.8359 29.022 56.1237 28.0851 55.4319 27.3112C53.8447 25.58 52.9901 23.8488 52.9901 22.4435C52.9901 21.8732 53.1732 20.4679 53.397 19.307C53.6209 18.1461 53.7633 17.0259 53.6819 16.8019C53.4784 16.1094 52.7459 15.641 51.0773 15.0911C47.2721 13.8487 46.214 12.8507 45.0949 9.51055C43.935 6.08892 43.7722 5.96672 40.8827 6.57772C39.8857 6.78139 38.4002 6.94433 37.6066 6.94433C35.8363 6.92396 34.7985 6.41479 32.6213 4.47994Z"
        fill="#BEBEBE"
      />
      <Path // lock
        d="M35.125 26.1341V23.882C35.125 20.7292 32.65 18.252 29.5 18.252C26.35 18.252 23.875 20.7292 23.875 23.882V26.1341C21.9625 26.1341 20.5 27.5979 20.5 29.5121V37.3943C20.5 39.3085 21.9625 40.7723 23.875 40.7723H35.125C37.0375 40.7723 38.5 39.3085 38.5 37.3943V29.5121C38.5 27.5979 37.0375 26.1341 35.125 26.1341ZM26.125 23.882C26.125 21.9678 27.5875 20.504 29.5 20.504C31.4125 20.504 32.875 21.9678 32.875 23.882V26.1341H26.125V23.882ZM30.7375 33.4532L30.625 33.5658V35.1422C30.625 35.8178 30.175 36.2682 29.5 36.2682C28.825 36.2682 28.375 35.8178 28.375 35.1422V33.5658C27.7 32.8902 27.5875 31.8768 28.2625 31.2012C28.9375 30.5256 29.95 30.413 30.625 31.0886C31.3 31.6516 31.4125 32.7776 30.7375 33.4532Z"
        fill="#959595"
      />
    </Svg>
  );
};

<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M30.6475 2.97279C30.912 3.07462 31.787 3.74673 32.6213 4.47994C34.7985 6.41479 35.8363 6.92396 37.6066 6.94433C38.4002 6.94433 39.8857 6.78139 40.8827 6.57772C43.7722 5.96672 43.935 6.08892 45.0949 9.51055C46.214 12.8507 47.2721 13.8487 51.0773 15.0911C52.7459 15.641 53.4784 16.1094 53.6819 16.8019C53.7633 17.0259 53.6209 18.1461 53.397 19.307C53.1732 20.4679 52.9901 21.8732 52.9901 22.4435C52.9901 23.8488 53.8447 25.58 55.4319 27.3112C56.1237 28.0851 56.8359 29.022 56.9783 29.409C57.3446 30.2847 57.0801 30.8347 55.2691 32.9121C53.5802 34.8469 52.9901 36.1097 52.9901 37.7187C52.9901 38.3908 53.0918 39.348 53.2139 39.8572C53.6616 41.7513 53.7836 42.9326 53.6005 43.4214C53.3767 43.9916 52.4406 44.5008 50.4465 45.1322C47.1704 46.1913 46.153 47.2707 44.9321 51.0182C44.1995 53.2789 43.8129 53.7066 42.653 53.7066C42.124 53.7066 41.1473 53.5641 40.4758 53.4011C39.8043 53.2382 38.5834 53.116 37.7694 53.0956C35.9177 53.0956 35.0224 53.5233 32.6416 55.5193C30.0981 57.6782 29.8539 57.6782 27.3917 55.56C25.1534 53.6048 24.0749 53.0956 22.325 53.0956C21.5721 53.116 20.3512 53.2382 19.6186 53.4011C18.8861 53.5641 17.8687 53.6863 17.3396 53.7066C16.5257 53.7066 16.3425 53.6252 15.9762 53.1364C15.7524 52.8105 15.3454 51.8533 15.0606 51.0182C13.8397 47.2707 12.8222 46.1913 9.54614 45.1322C6.1683 44.0731 5.96482 43.7676 6.57527 40.7737C7.38921 36.8632 7.10433 35.682 4.62182 32.8102C3.84858 31.8937 3.09569 30.8754 2.95325 30.5495C2.62767 29.7348 2.9329 29.1238 4.60147 27.2705C6.14795 25.58 7.00259 23.8488 7.00259 22.4435C7.00259 21.8732 6.81945 20.4679 6.59562 19.307C6.37179 18.1461 6.22935 17.0259 6.31074 16.8019C6.51423 16.1094 7.26712 15.6206 8.91534 15.0911C12.6391 13.9302 13.7786 12.8507 14.8978 9.51055C16.0576 6.08892 16.2204 5.96672 19.1099 6.57772C20.107 6.78139 21.5924 6.94433 22.386 6.94433C24.1156 6.92396 25.2755 6.37406 27.1068 4.72434C28.3277 3.60416 29.5283 2.78949 29.9353 2.78949C30.0574 2.78949 30.3829 2.87096 30.6475 2.97279Z"
    fill="#BEBEBE"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M42.8274 0.304346C41.4539 0.823701 40.2635 1.64856 37.6996 3.93983C34.9525 6.38385 34.3116 6.53661 30.2215 5.7423C28.3902 5.37569 26.3451 5.10074 25.6431 5.10074C22.3161 5.13129 19.6912 7.81972 18.4092 12.4939C17.463 16.1294 16.3337 17.1987 12.1826 18.5429C9.16088 19.5205 8.03155 20.162 6.78012 21.5368C5.22346 23.2476 4.88771 25.0806 5.49817 28.3801C6.6275 34.5512 6.56646 34.8262 3.45315 38.3089C-1.00316 43.2886 -1.12525 46.5575 2.96479 51.1095C6.41385 54.9283 6.65803 55.6615 5.74235 59.8469C4.97928 63.3601 5.07085 65.8653 6.01705 67.4844C6.99378 69.1952 8.48939 70.1729 11.7553 71.3338C15.2654 72.5863 15.3875 72.6474 15.3875 72.9529L18.2261 77.1994L19.0502 79.2768C19.5081 80.4378 20.2406 81.8736 20.6984 82.4846C22.4077 84.7148 25.4905 85.3869 29.5805 84.3787C32.2665 83.7372 34.5557 83.7983 35.7766 84.5315C36.3566 84.8676 36.7534 85.2953 36.6923 85.448L40.6908 88.6252C42.7053 90.4583 47.2837 90.4583 49.2982 88.6252L53.2966 85.448C53.2356 85.2953 53.6324 84.8676 54.2123 84.5315C55.4332 83.7983 57.7224 83.7372 60.4084 84.3787C66.0551 85.7535 69.1989 84.1954 70.9998 79.1546C71.3661 78.0854 71.7018 77.2605 71.7628 77.2911L74.6015 72.9529C74.6874 72.678 74.7235 72.5863 78.2337 71.3338C81.4996 70.1729 82.9952 69.1952 83.9719 67.4844C84.9181 65.8653 85.0097 63.3601 84.2466 59.8469C83.3309 55.6615 83.5751 54.9283 87.0242 51.1095C91.1142 46.5269 91.0226 43.3192 86.5358 38.3089C85.498 37.1785 84.4603 35.8343 84.2161 35.3455C83.6972 34.3374 83.6362 32.6877 84.0635 30.9157C85.2233 26.1193 84.9792 23.5226 83.2088 21.5368C81.9574 20.162 80.8281 19.5205 77.8063 18.5429C73.5332 17.1376 72.5564 16.221 71.5492 12.4328C70.2978 7.72807 67.6118 5.10074 64.0406 5.10074C63.4912 5.10074 61.5988 5.37569 59.7674 5.7423C55.6469 6.56716 55.067 6.41441 52.0147 3.69543C50.7633 2.59562
          49.1456 1.34306 48.4435 0.915352C46.8869 -0.00115679 44.384 -0.276109 42.8274 0.304346ZM48.9319 6.71991C47.6805 5.6201 46.368 4.61194 45.9712 4.45919C45.5744 4.30643 45.086 4.18423 44.9029 4.18423C44.2925 4.18423 42.4916 5.40624 40.6603 7.08651C37.9132 9.56108 36.1734 10.3859 33.579 10.4165C32.3886 10.4165 30.1605 10.1721 28.6649 9.86659C24.3306 8.95008 24.0865 9.13338 22.3467 14.2658C20.6679 19.2761 18.9587 20.8952 13.373 22.6366C10.9007 23.4309 9.77134 24.1641 9.46611 25.2028C9.34402 25.5389 9.55768 27.2192 9.89343 28.9605C10.2292 30.7019 10.5039 32.8099 10.5039 33.6653C10.5039 35.7732 9.22193 38.37 6.90221 40.9057C4.39935 43.6858 3.94151 44.6023 4.42987 45.8243C4.64353 46.3131 5.77287 47.8406 6.93273 49.2154C10.6565 53.5229 11.0838 55.2949 9.86291 61.1605C8.94723 65.6514 9.25245 66.1097 14.3192 67.6983C19.2334 69.2869 20.7595 70.9061 22.5909 76.5273C23.0182 77.7799 23.6286 79.2157 23.9644 79.7045C24.5138 80.4378 24.7885 80.56 26.0094 80.56C26.803 80.5294 28.3291 80.3461 29.4279 80.1017C30.5267 79.8573 32.3581 79.674 33.4874 79.6434C36.1124 79.6434 37.7301 80.4072 41.0876 83.34C44.7808 86.5173 45.1471 86.5173 48.9624 83.2789C52.5336 80.285 53.8766 79.6434 56.6541 79.6434C57.875 79.674 59.7064 79.8573 60.7136 80.1017C61.7209 80.3461 63.186 80.56 63.9796 80.56C65.7194 80.56 66.2993 79.9184 67.3981 76.5273C69.2295 70.9061 70.7556 69.2869 75.6697 67.6983C78.661 66.7512 80.065 65.9875 80.4008 65.1321C80.6755 64.3989 80.4923 62.6269 79.8208 59.7858C79.6377 59.022 79.4851 57.5861 79.4851 56.578C79.4851 54.1645 80.3702 52.2704 82.9036 49.3681C85.6201 46.252 86.0169 45.4271 85.4675 44.1135C85.2539 43.533 84.1856 42.1277 83.1478 40.9668C80.767 38.37 79.4851 35.7732 79.4851 33.6653C79.4851 32.8099 79.7598 30.7019 80.0955 28.9605C80.4313 27.2192 80.6449 25.5389 80.5229 25.2028C80.2176 24.1641 79.1188 23.4615 76.616 22.6366C70.9082 20.773 69.321 19.2761 67.6423 14.2658C65.9025 9.13338 65.6583 8.95008 61.3241 9.86659C59.8285 10.1721 57.6003 10.4165 56.41 10.4165C53.7545 10.3859 52.1978 9.62218 48.9319 6.71991Z"
    fill="#BEBEBE"
  />
  <path
    d="M26.1522 11.0314C19.9866 12.3756 14.9606 16.3879 12.3967 21.9888C11.1351 24.7587 10.7891 26.551 10.7688 29.9726C10.7688 33.659 11.1758 35.3902 12.7019 38.5267C15.6117 44.4942 21.2076 48.425 27.9225 49.2397C33.498 49.9118 39.4194 47.8547 43.4891 43.8221C47.1315 40.2171 49.0239 35.8994 49.2681 30.7873C49.4919 25.4308 47.6809 20.6038 43.9368 16.6527C41.088 13.6587 37.3846 11.6424 33.3759 10.95C31.7074 10.6445 27.7191 10.7056 26.1522 11.0314ZM34.78 14.1883C42.1868 16.5508 46.9076 23.4145 46.4193 31.052C46.2361 33.5979 45.8495 35.0439 44.7304 37.3047C42.6345 41.5817 38.7683 44.7386 34.1085 46.0013C31.9108 46.592 28.0853 46.592 25.8877 46.0013C22.6319 45.1255 19.4372 43.0889 17.3617 40.5837C13.5769 36.0216 12.5188 29.8708 14.5536 24.2902C16.4257 19.1374 21.0244 15.1048 26.4371 13.8624C28.3499 13.4347 32.969 13.5976 34.78 14.1883Z"
    fill="#BEBEBE"
  />
  <path
    d="M35.125 26.1341V23.882C35.125 20.7292 32.65 18.252 29.5 18.252C26.35 18.252 23.875 20.7292 23.875 23.882V26.1341C21.9625 26.1341 20.5 27.5979 20.5 29.5121V37.3943C20.5 39.3085 21.9625 40.7723 23.875 40.7723H35.125C37.0375 40.7723 38.5 39.3085 38.5 37.3943V29.5121C38.5 27.5979 37.0375 26.1341 35.125 26.1341ZM26.125 23.882C26.125 21.9678 27.5875 20.504 29.5 20.504C31.4125 20.504 32.875 21.9678 32.875 23.882V26.1341H26.125V23.882ZM30.7375 33.4532L30.625 33.5658V35.1422C30.625 35.8178 30.175 36.2682 29.5 36.2682C28.825 36.2682 28.375 35.8178 28.375 35.1422V33.5658C27.7 32.8902 27.5875 31.8768 28.2625 31.2012C28.9375 30.5256 29.95 30.413 30.625 31.0886C31.3 31.6516 31.4125 32.7776 30.7375 33.4532Z"
    fill="#959595"
  />
</svg>;
