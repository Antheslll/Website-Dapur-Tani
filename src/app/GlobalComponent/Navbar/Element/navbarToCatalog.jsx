"use client";
import AboutUsIcon from "../../../icons/aboutus-icon.jsx";
import DropdownIcon from "../../../icons/dropdown-icon.jsx";
import PromotionIcon from "../../../icons/promotion-icon.jsx";
import FruitIcon from "../../../icons/fruit-icon.jsx";
import MeatIcon from "../../../icons/meat-icon.jsx";
import VegetableIcon from "../../../icons/vegetable-icon.jsx";

import Link from "next/link.js";
import { useState } from "react";
export default function NavbarNavpageCatalog() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <nav>
      <ul className="w-full grid min-[667px]:grid-cols-[18%_18%_18%_18%_18%] min-[820px]:grid-cols-[18%_18%_18%_18%_18%] min-[1180px]:grid-cols-[13%_13%_13%_13%_13%] my-2  z-40">
        <li className="list-none">
          <Link href="./vegetablecatalog">
            <ButtonCatalog
              index={0}
              Icon={VegetableIcon}
              label="Vegetable"
              Drop={DropdownIcon}
              choice1="Frozen Vegetable"
              choice2="Fresh Vegetable"
              activeDropdown={activeDropdown}
              handleDropdown={handleDropdown}
            />
          </Link>
        </li>
        <li className="list-none">
          <Link href="./fruitcatalog">
            <ButtonCatalog
              index={1}
              Icon={FruitIcon}
              label="Fruit"
              Drop={DropdownIcon}
              choice1="Frozen Fruit"
              choice2="Fresh Fruit"
              activeDropdown={activeDropdown}
              handleDropdown={handleDropdown}
            />
          </Link>
        </li>
        <li className="list-none">
          <Link href="./meatcatalog">
            <ButtonCatalog
              index={2}
              Icon={MeatIcon}
              label="Meat"
              Drop={DropdownIcon}
              choice1="Frozen Meat"
              choice2="Fresh Meat"
              activeDropdown={activeDropdown}
              handleDropdown={handleDropdown}
            />
          </Link>
        </li>
        <li className="list-none">
          <Link href="./promotioncatalog">
            <ButtonCatalog
              Icon={PromotionIcon}
              label="Promotion"
              activeDropdown={activeDropdown}
              handleDropdown={handleDropdown}
            />
          </Link>
        </li>
        <li className="list-none">
          <Link href="/aboutus">
            <ButtonCatalog
              Icon={AboutUsIcon}
              label="AboutUs"
              activeDropdown={activeDropdown}
              handleDropdown={handleDropdown}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function ButtonCatalog({
  Icon,
  label,
  activeDropdown,
  choice1,
  choice2,
  index,
  Drop,
  handleDropdown,
}) {
  const [isHover, setIsHover] = useState(false);
  const handleHover = (choice) => {
    setIsHover(choice);
  };
  return (
    <>
      <div
        onMouseLeave={() => {
          handleDropdown(null);
        }}
      >
        <button
          className="w-full grid min-[1180px]:grid-cols-[20%_60%_20%] min-[820px]:grid-cols-[10%_60%_10%]"
          onMouseEnter={() => {
            handleDropdown(index);
          }}
          aria-haspopup={Drop ? "true" : "false"}
          aria-expanded={Drop && activeDropdown === index ? "true" : "false"}
        >
          <span className="min-[820px]:block hidden">
            <Icon />
          </span>
          <span className=" m-auto">
            <p className="text-[12px] m-auto">{label}</p>
          </span>
          <span
            className={`m-auto ${
              activeDropdown === index ? "-rotate-90" : ""
            } min-[820px]:block hidden`}
          >
            {Drop ? (
              <Drop />
            ) : (
              <span style={{ width: "16px", height: "16px" }} />
            )}
          </span>
        </button>
        {Drop ? (
          activeDropdown === index ? (
            <DropdownChoice
              choice1={choice1}
              choice2={choice2}
              activeDropdown={activeDropdown}
              handleDropdown={handleDropdown}
              isHover={isHover}
              handleHover={handleHover}
            />
          ) : (
            ""
          )
        ) : null}
      </div>
    </>
  );
}

const DropdownChoice = ({
  choice1,
  choice2,
  choice3,
  index,
  handleHover,
  isHover,
}) => {
  return (
    <div
      className={`w-[120%] ${
        choice3 ? "h-[90px] z-50" : "h-[60px]"
      } bg-[#3f4b3b] grid grid-rows-[30px_30px] rounded-xl relative z-30`}
    >
      <div
        className={`border-b-2 rounded-t-xl border-white ${
          isHover === choice1 ? "bg-[#04E824]" : ""
        }`}
        onMouseEnter={() => {
          handleHover(choice1);
        }}
        onMouseLeave={() => {
          handleHover(null);
        }}
      >
        <button
          className={` bg-black/0 w-[100%] h-30px text-white text-[11px] font-[verdana]`}
        >
          {choice1}
        </button>
      </div>
      <div
        className={`${choice3 ? "" : "rounded-b-xl"} ${
          isHover === choice2 ? "bg-[#04E824]" : ""
        }`}
        onMouseEnter={() => {
          handleHover(choice2);
        }}
        onMouseLeave={() => {
          handleHover(null);
        }}
      >
        <button className="bg-black/0 w-[100%] h-30px text-white text-[11px] font-[verdana]">
          {choice2}
        </button>
      </div>
      {choice3 ? (
        <div
          className={`border-t-2 border-white rounded-b-xl ${
            isHover === choice3 ? "bg-[#04E824]" : ""
          }`}
          onMouseEnter={() => {
            handleHover(choice3);
          }}
          onMouseLeave={() => {
            handleHover(null);
          }}
        >
          <button className="bg-black/0 w-[100%] h-30px text-white text-[11px] font-[verdana]">
            {choice3}
          </button>
        </div>
      ) : null}
    </div>
  );
};
export { DropdownChoice };
