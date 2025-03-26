"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function FruitCatalogHeader() {
  const [int, setInt] = useState(0);

  const slideSource = [
    "/catalogBanner/fruit_banner1.png",
    "/catalogBanner/fruit_banner2.png",
    "/catalogBanner/fruit_banner3.png",
  ];

  const header = [
    "Fresh Fruits for a Refreshing Life!",
    "Juicy & Sweet, Just for You!",
    "Nature’s Best in Every Bite!",
  ];

  const subHeader = [
    "~Enjoy farm-fresh fruits—naturally sweet, nutritious, and full of flavor!~",
    "~Taste the goodness of fresh-picked fruits—healthy, delicious, and full of vitamins!~",
    "~Get the freshest fruits, packed with nutrients and bursting with flavor!~",
  ];
  useEffect(() => {
    const changeSlide = setInterval(() => {
      setInt((prev) => (prev + 1) % slideSource.length);
    }, 3000);

    return () => clearInterval(changeSlide);
  }, []);
  return (
    <div>
      <div className="bg-black">
        <div className="relative w-full h-[550px]">
          <Image
            src={slideSource[int] || "/catalogBanner/vegetable_banner1.png"}
            className="object-cover  relative z-0"
            alt="fruit catalog"
            fill
            priority
          />
        </div>
      </div>
      <div className="w-full h-[550px] bg-black/80 absolute top-[125px] flex justify-center items-center">
        <div>
          <h1 className="font-verdana font-bold text-white text-[20px] text-center">
            {header[int]}
          </h1>
          <br />
          <h3 className="font-verdana text-white text-[12px] ">
            {subHeader[int]}
          </h3>
        </div>
      </div>
    </div>
  );
}
