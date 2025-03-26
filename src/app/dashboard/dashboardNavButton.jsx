"use client";
import { useState } from "react";
export default function DashboardNav({
  icons,
  nav,
  isClicked,
  handleClicked,
  Key,
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={() => handleClicked(nav)}
    >
      <button
        className={`xl:w-[10vw] lg:w-[12vw] md:w-[14vw] h-[30px] grid grid-cols-[40px_100px]  rounded-2xl ${
          isHover === true ? "bg-[#00620E]" : ""
        } ${isClicked === nav ? "bg-[#00620E]" : ""}`}
      >
        <div
          className={`${
            nav === "Dashboard" ? "scale-[70%]" : "scale-[80%]"
          } flex justify-center items-center`}
        >
          {icons}
        </div>
        <div className="flex justify-start items-center text-white text-[0.8rem]">
          {nav}
        </div>
      </button>
    </div>
  );
}
