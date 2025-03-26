"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function MeatCatalogHeader() {
  const [int, setInt] = useState(0);

  const slideSource = [
    "/catalogBanner/meat_banner1.png",
    "/catalogBanner/meat_banner2.png",
    "/catalogBanner/meat_banner3.png",
  ];

  const header = [
    "Premium Meat for Every Meal!",
    "Farm-Fresh Meat, Straight to You!",
    "Quality Meat for a Better Taste!",
  ];

  const subHeader = [
    "~Enjoy fresh, high-quality cuts—tender, juicy, and full of flavor!~",
    "~Sourced from trusted farms, our meats are fresh, healthy, and delicious!~",
    "~From farm to table—get the finest cuts for your favorite dishes!~",
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
            src={slideSource[int] || "/catalogBanner/meat_banner1.png"}
            className="object-cover  relative z-0"
            alt="meat catalog-1"
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
