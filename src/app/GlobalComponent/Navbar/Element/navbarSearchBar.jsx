"use client";
import SearchButton from "../../../icons/search-icon.jsx";
import DropdownIcon from "../../../icons/dropdown-icon.jsx";

import { useState } from "react";
export default function SearchBar() {
  const [activeDrop, setActiveDrop] = useState(false);
  const handleDrop = (statusDrop) => {
    setActiveDrop(statusDrop);
  };
  const [isPicked, setIsPicked] = useState("ALL CATEGORIES");
  const handlePick = (pick) => {
    setIsPicked(pick);
  };
  return (
    <nav>
      <div className="min-[667px]:pl-[5%] ">
        <form role="search">
          <div className="grid grid-cols-[25%_3%_65%_7%] min-[667px]:w-[95%] min-[1180px]:w-full h-9 my-5">
            <SearchBarCategories
              activeDrop={activeDrop}
              handleDrop={handleDrop}
              handlePick={handlePick}
              isPicked={isPicked}
            />
            <SearchBarDivider />
            <label htmlFor="search-input" className="sr-only">
              search
            </label>
            <input
              type="text"
              id="search-input"
              className="grey text-black focus:outline-none"
              placeholder={`Search for... ${isPicked}`}
            />
            <button className="grey rounded-r-[5px]">
              <div className="my-1.5 mx-1.5 ">
                <SearchButton />
              </div>
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

function SearchBarCategories({ activeDrop, handleDrop, handlePick, isPicked }) {
  return (
    <>
      <div className="grey rounded-l-[5px] grid grid-cols-[80%_10%] h-9">
        <button
          type="button"
          aria-haspopup="listbox"
          className=" mx-2 cursor-pointer"
          onClick={() => handleDrop(!activeDrop)}
        >
          <span className="xl:text-[0.8rem] lg:text-[0.6rem] md:text-[0.6rem] font-bold font-[Roboto] ">
            {isPicked}
          </span>
        </button>
        <div
          className={` my-[14px] h-2 ${
            activeDrop ? "origin-center -rotate-90" : ""
          }`}
        >
          <DropdownIcon />
        </div>
        {activeDrop ? (
          <DropdownChoice
            choice0="ALL CATEOGRIES"
            choice1="VEGETABLE"
            choice2="FRUIT"
            choice3="MEAT"
            handlePick={handlePick}
          />
        ) : null}
      </div>
    </>
  );
}
function SearchBarDivider() {
  return (
    <div className="grey grid grid-cols-[100%]">
      <div className=" bg-black w-0.5 h-7 my-1 "></div>
    </div>
  );
}

const DropdownChoice = ({ choice0, choice1, choice2, choice3, handlePick }) => {
  return (
    <ul
      role="listbox"
      className={`w-[120%] h-[120px] z-50 bg-[#3f4b3b] grid grid-rows-[30px_30px_30px_30px] rounded-xl`}
    >
      {[choice0, choice1, choice2, choice3].map((category, index) => (
        <li
          className={`${index === 3 ? "" : "border-b-2"} border-white`}
          key={index}
        >
          <button
            className="bg-black/0 w-[100%] h-30px text-white text-[11px] font-[verdana]"
            onClick={() => {
              handlePick(category);
            }}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};
