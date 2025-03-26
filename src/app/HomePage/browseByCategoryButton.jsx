"use client";
import GoIcon, { GoIconHover } from "../icons/go-icon";
import { useState } from "react";

export default function BrowseByCategoryButton({ buttonName }) {
  const [hover, setHover] = useState(false);

  const handleHover = (y) => {
    setHover(y);
  };

  return (
    <button
      className="w-[100%] h-[40px] grey px-5 my-0.5 hover:bg-black hover:text-[#04e824] duration-500 "
      onMouseOver={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="grid grid-cols-2">
        <div>
          <p className="text-left font-[verdana] font-bold text-[18px] ">
            {buttonName}
          </p>
        </div>
        <div className="flex justify-end">
          {hover === false ? <GoIcon /> : <GoIconHover />}
        </div>
      </div>
    </button>
  );
}
