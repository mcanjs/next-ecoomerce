interface IProps {
  width: number;
  height: number;
  center?: boolean;
  className?: string;
}

export default function Loader({ width, height, center, className }: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={`${center ? 'mx-auto' : ''} stroke-blue-500 ${className}`}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
}
