import { IconProp } from '../types/common';

const MailIcon = ({ width = 39, height = 31, ...props }: IconProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.5 27.2285H30.75V10.8223L19.5 17.8535L8.25 10.8223V27.2285H4.5V4.72852H6.75L19.5 12.6973L32.25 4.72852H34.5M34.5 0.978516H4.5C2.41875 0.978516 0.75 2.64727 0.75 4.72852V27.2285C0.75 28.2231 1.14509 29.1769 1.84835 29.8802C2.55161 30.5834 3.50544 30.9785 4.5 30.9785H34.5C35.4946 30.9785 36.4484 30.5834 37.1516 29.8802C37.8549 29.1769 38.25 28.2231 38.25 27.2285V4.72852C38.25 2.64727 36.5625 0.978516 34.5 0.978516Z"
        fill="#6D95FC"
      />
    </svg>
  );
};

export default MailIcon;
