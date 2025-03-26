"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function VegetableCatalogHeader() {
  const [int, setInt] = useState(0);

  const slideSource = [
    "/catalogBanner/vegetable_banner1.png",
    "/catalogBanner/vegetable_banner2.png",
    "/catalogBanner/vegetable_banner3.png",
  ];

  const header = [
    "Fresh Vegetables for a Healthier Life!",
    " Premium Quality, Farm to Table!",
    "Nutritious & Delicious Every Day!",
  ];

  const subHeader = [
    "~Get fresh vegetables straight from the farm—healthy, natural, and high-quality!~",
    "~Handpicked fresh produce, delivered straight from the farm to your table!~",
    "~Complete your daily nutrition with fresh, wholesome vegetables!~",
  ];
  useEffect(() => {
    const changeSlide = setInterval(() => {
      setInt((prev) => (prev + 1) % slideSource.length);
    }, 3000);

    return () => clearInterval(changeSlide);
  }, []);
  return (
    <div className="relative z-10">
      <div className="bg-black">
        <div className=" w-full h-[550px]">
          <Image
            src={slideSource[int] || "/catalogBanner/vegetable_banner1.png"}
            className="object-cover"
            alt="vegetable catalog-1"
            fill
            priority
          />
        </div>
      </div>
      <div className="w-full h-[550px] bg-black/80 absolute top-[0vh] flex justify-center items-center">
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
