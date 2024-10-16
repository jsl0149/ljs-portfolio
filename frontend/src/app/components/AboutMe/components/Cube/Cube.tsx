const Cube = () => {
  return (
    <svg className="relative w-full h-[400px] bottom-[7rem] left-[2rem]  ">
      <ellipse
        cx="166"
        cy="350"
        rx="80"
        ry="20"
        className="stroke-current text-white"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="0"
        y1="400"
        x2="30"
        y2="350"
        className="stroke-current text-white animate-liner"
        stroke-width="2"
        id="ani3"
      />
      <line
        x1="0"
        y1="400"
        x2="1100"
        y2="400"
        className="stroke-current text-white animate-slide"
        stroke-width="2"
        id="ani3"
      />
      <line
        x1="1100"
        y1="400"
        x2="1100"
        y2="50"
        className="stroke-current text-white"
        stroke-width="2"
      />
      <line
        x1="1100"
        y1="400"
        x2="1130"
        y2="350"
        className="stroke-current text-white"
        stroke-width="2"
      />
      <line
        x1="1130"
        y1="350"
        x2="1130"
        y2="0"
        className="stroke-current text-white"
        stroke-width="2"
      />
      <line
        x1="1100"
        y1="50"
        x2="1130"
        y2="0"
        className="stroke-current text-white"
        stroke-width="2"
      />
    </svg>
  );
};

export default Cube;