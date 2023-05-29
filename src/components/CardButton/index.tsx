function CardButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      fill="none"
      viewBox="0 0 41 40"
      className='rounded-full text-[#F0F0F0] bg-rosa-200 p-2 cursor-pointer hover:scale-150 transition'
    >
      <path
        stroke="#F0F0F0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.617 6l-4.442 5.6v19.6c0 .743.312 1.455.867 1.98a3.05 3.05 0 002.094.82h20.728a3.05 3.05 0 002.094-.82 2.725 2.725 0 00.867-1.98V11.6L29.383 6H11.617zM7.175 11h26.65"
      ></path>
      <path
        stroke="#F0F0F0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M26.65 17c0 1.857-.648 3.637-1.801 4.95C23.695 23.263 22.13 24 20.5 24c-1.631 0-3.195-.738-4.349-2.05-1.153-1.313-1.8-3.093-1.8-4.95"
      ></path>
    </svg>
  );
}

export default CardButton
