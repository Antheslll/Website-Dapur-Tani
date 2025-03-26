"use client";
import { useState } from "react";
import { GoIconWhite } from "@/app/icons/go-icon";

const FeaturedBrandCard = ({ keyId, imageRef, brand, text, clicker }) => {
  const [hover, setHover] = useState(false);
  function handleHover(send) {
    setHover(send);
  }

  const sendClick = (id) => {
    clicker(id);
  };

  return (
    <>
      <div className="w-[20%] h-[250px] grid min-[667px]:grid-rows-[150px_20px_20px] min-[1180px]:grid-rows-[150px_30px_20px] min-[820px]:grid-rows-[160px_20px_20px] m-auto cursor-pointer">
        <div className="w-[100%] h-[150px]">
          <div
            className={`w-[100%] h-[150px] rounded-xl flex justify-center ${
              !hover ? "bg-black/0" : "bg-black/50"
            }`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            onClick={() => {
              sendClick(keyId);
            }}
          >
            <Discover hover={hover} />
            <img
              src={imageRef || null}
              className=" rounded-xl w-[100%] h-[150px] relative -z-10 object-fit"
            />
          </div>
        </div>
        <div>
          <h4 className="font-[Roboto-bold] text-[grey] min-[820px]:text-[12px] min-[667px]:text-[10px]">
            {brand}
          </h4>
        </div>
        <div>
          <p className="font-[verdana] font-bold min-[820px]:text-[9px] min-[667px]:text-[7px] ">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

const Discover = ({ hover }) => {
  return (
    <>
      <div
        className={`absolute z-20 grid grid-cols-[95px_20px] mx-11 my-[65px]  `}
      >
        <div>
          <p
            className={` text-white font-[Roboto-bold] text-[14px] text-center transition-opacity duration-1000 ${
              !hover ? "opacity-0" : "opacity-100"
            }`}
          >
            Discover More
          </p>
        </div>
        <div
          className={`mx-0.5 my-1 ${
            !hover ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000`}
        >
          <GoIconWhite />
        </div>
      </div>
    </>
  );
};

export default FeaturedBrandCard;
