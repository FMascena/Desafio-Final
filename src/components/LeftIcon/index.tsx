interface LeftIconProps {
  onClick: () => void
}

function LeftIcon({onClick}: LeftIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="85"
      height="85"
      fill="none"
      viewBox="0 0 85 85"
      className="z-40 cursor-pointer transition 
      hover:scale-125"
    >
      <circle
        cx="42.5"
        cy="42.5"
        r="42.5"
        fill="#BC8383"
        transform="rotate(-180 42.5 42.5)"
      ></circle>
      <path
        stroke="#F9F7F4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M57 42.125H27.25M42.125 57L27.25 42.125 42.125 27.25"
      ></path>
    </svg>
  );
}

export default LeftIcon
