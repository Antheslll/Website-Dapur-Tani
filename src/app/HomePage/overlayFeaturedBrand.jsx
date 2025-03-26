import { PrevIcon, NextIcon } from "../icons/navIcon";

export default function OverlayFB({
  image,
  brand,
  text,
  isClicked,
  setIsClicked,
  prevClick,
  nextClick,
  isArrowClicked,
}) {
  const closeOverlay = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div
        className={` w-[100%] min-[820px]:h-[110vh] min-[667px]:h-[130vh] bg-black/50 min-[820px]:-mt-[1000px] min-[667px]:-mt-[1050px] fixed z-30 ${
          isClicked === false
            ? "opacity pointer-events-none"
            : "transition-opacity duration-500 ease-in-out opacity-100"
        } `}
        onClick={closeOverlay}
      >
        <img
          className="w-[60%] min-[820px]:h-[400px] min-[667px]:h-[300px] mx-[20%] my-[100px] absolute -z-10 rounded-3xl transition-all duration-500 ease-in-out "
          src={image || null}
          alt="slide image"
        />
        <div
          className="grid min-[820px]:grid-rows-[100px_50px_50px] min-[667px]:grid-rows-[50px_50px_50px] w-[60%] min-[820px]:h-[400px] min-[667px]:h-[300px] mx-[20%] my-[100px] bg-black/50 absolute z-20 rounded-3xl py-[100px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="borde-2">
            <h1 className="text-white font-[Roboto-bold] min-[1180px]:text-[35px] min-[820px]:text-[25px] text-center min-[820px]:py-7">
              {brand}
            </h1>
          </div>
          <div className="grid grid-cols-[20%_60%_20%]">
            <div
              className="-my-5 mx-auto cursor-pointer max-[668px]:scale-[70%]"
              onClick={prevClick}
            >
              <PrevIcon />
            </div>
            <div>
              <p className="text-white font-[verdana] min-[1180px]:text-[12px] min-[820px]:text-[10px] min-[667px]:text-[10px] text-center">
                {text}
              </p>
            </div>
            <div
              className="-my-5 mx-auto cursor-pointer max-[668px]:scale-[70%]"
              onClick={nextClick}
            >
              <NextIcon />
            </div>
          </div>
          <div className="grid grid-cols-[20px_20px_20px] m-auto my-20 gap-2 max-[820px]:mt-[10vh]">
            <div
              className={`w-[10px] h-[10px] rounded-full ${
                isArrowClicked === 1 ? "bg-[#04e824]" : "bg-white"
              } `}
            ></div>
            <div
              className={`w-[10px] h-[10px] rounded-full ${
                isArrowClicked === 2 ? "bg-[#04e824]" : "bg-white"
              } `}
            ></div>
            <div
              className={`w-[10px] h-[10px] rounded-full ${
                isArrowClicked === 3 ? "bg-[#04e824]" : "bg-white"
              } `}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
