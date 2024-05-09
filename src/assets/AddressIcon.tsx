import { IconProp } from '../types/common';

const AddressIcon = ({ width = 33, height = 45, ...props }: IconProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 21.375C14.9845 21.375 13.531 20.7824 12.4594 19.7275C11.3878 18.6726 10.7857 17.2418 10.7857 15.75C10.7857 14.2582 11.3878 12.8274 12.4594 11.7725C13.531 10.7176 14.9845 10.125 16.5 10.125C18.0155 10.125 19.469 10.7176 20.5406 11.7725C21.6122 12.8274 22.2143 14.2582 22.2143 15.75C22.2143 16.4887 22.0665 17.2201 21.7793 17.9026C21.4921 18.5851 21.0712 19.2051 20.5406 19.7275C20.01 20.2498 19.3801 20.6641 18.6868 20.9468C17.9935 21.2295 17.2504 21.375 16.5 21.375ZM16.5 0C12.2565 0 8.18687 1.65937 5.18629 4.61307C2.18571 7.56677 0.5 11.5728 0.5 15.75C0.5 27.5625 16.5 45 16.5 45C16.5 45 32.5 27.5625 32.5 15.75C32.5 11.5728 30.8143 7.56677 27.8137 4.61307C24.8131 1.65937 20.7435 0 16.5 0Z"
        fill="#6D95FC"
      />
    </svg>
  );
};

export default AddressIcon;
