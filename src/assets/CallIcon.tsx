import { IconProp } from '../types/common';

const CallIcon = ({ width = 35, height = 34, ...props }: IconProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.03889 14.4886C9.83889 19.7522 14.35 24.0671 19.8528 26.7454L24.1306 22.6536C24.675 22.1329 25.4333 21.9841 26.1139 22.1886C28.2917 22.8768 30.625 23.2488 33.0556 23.2488C33.5713 23.2488 34.0658 23.4447 34.4305 23.7935C34.7951 24.1423 35 24.6154 35 25.1087V31.6184C35 32.1116 34.7951 32.5847 34.4305 32.9335C34.0658 33.2823 33.5713 33.4783 33.0556 33.4783C24.2887 33.4783 15.8809 30.147 9.68175 24.2175C3.48263 18.2879 0 10.2456 0 1.8599C0 1.36663 0.20486 0.893553 0.569515 0.544753C0.934169 0.195953 1.42875 0 1.94444 0H8.75C9.2657 0 9.76027 0.195953 10.1249 0.544753C10.4896 0.893553 10.6944 1.36663 10.6944 1.8599C10.6944 4.18478 11.0833 6.41667 11.8028 8.49976C12.0167 9.15072 11.8611 9.87609 11.3167 10.3969L7.03889 14.4886Z"
        fill="#6D95FC"
      />
    </svg>
  );
};

export default CallIcon;
