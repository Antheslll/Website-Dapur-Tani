"use client";
import HamburgerIcons from "../../../icons/hamburger-icon.jsx";

export default function MenuButton({ handleOpen }) {
  return (
    <nav role="navigation">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex justify-center "
      >
        <button
          className="dark-green-bg text-white grid md:grid-cols-[25%_60%] lg:w-[8vw] lg:h-[4vh] md:w-[10vw] md:h-[2vh] my-2  "
          onClick={() => {
            handleOpen(true);
          }}
        >
          <span className="scale-x-75">
            <HamburgerIcons />
          </span>
          <span className="min-[820px]:block hidden ">
            <p className="my-0.5 text-[12px] font-bold ">Menu</p>
          </span>
        </button>
      </div>
    </nav>
  );
}
