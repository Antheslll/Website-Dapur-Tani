"use client";

import { useButtonContext } from "../GlobalComponent/Hooks/activeButtonContext";

export default function NextPrevButton() {
  const { activeButton, setActiveButton } = useButtonContext();
  const handleClick = (button) => {
    setActiveButton(button);
  };

  const ButtonPrev = () => {
    return (
      <button
        className="w-[35px] h-[35px] mx-3 rounded-[5px] bg-white text-black transition-all duration-300 active:text-white active:bg-[#04e824]"
        onClick={() => handleClick("prev")}
        style={{
          backgroundColor:
            (activeButton === "prev") | (activeButton === null)
              ? "white"
              : "#04e824",
          color:
            (activeButton === "prev") | (activeButton === null)
              ? "black"
              : "white",
        }}
      >
        {"<"}
      </button>
    );
  };

  const ButtonNext = () => {
    return (
      <button
        className="w-[35px] h-[35px]  rounded-[5px]"
        onClick={() => handleClick("next")}
        style={{
          backgroundColor: activeButton === "next" ? "white" : "#04e824",
          color: activeButton === "next" ? "black" : "white",
        }}
      >
        {">"}
      </button>
    );
  };

  return (
    <div className=" w-[100px] h-[50px] grid grid-cols-[50px_50px] my-[120px] min-[1180px]:mx-[17vw] min-[820px]:mx-[13vw] min-[667px]:mx-[9vw] ">
      <div className="m-auto">
        <ButtonPrev />
      </div>
      <div className="m-auto">
        <ButtonNext />
      </div>
    </div>
  );
}
