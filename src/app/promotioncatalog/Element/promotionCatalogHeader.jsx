"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function PromotionCatalogHeader() {
  const [int, setInt] = useState(0);

  const slideSource = [
    "/catalogBanner/promotion_banner1.png",
    "/catalogBanner/promotion_banner2.png",
    "/catalogBanner/promotion_banner3.png",
  ];

  const header = [
    "Maximum Freshness, Minimum \n Price – 20% Off!",
    "Fresh Vegetables, Big Sale\n – 20% Off!",
    "Premium Meat, Affordable\n Price! 20% Discount",
  ];

  const subHeader = [
    "~Sweet, fresh, and full of nutrition! Get selected fruits with special discounts.~",
    "~Healthy from nature for your family! Organic vegetable choices are now more economical and still high quality.~",
    "~ Delicious, juicy, and high quality! Enjoy fresh meat at a more economical price.~",
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
            alt="vegetable catalog-1"
            fill
            priority
          />
        </div>
      </div>
      <div className="w-full h-[550px] bg-black/80 absolute top-[125px] flex justify-center items-center">
        <div>
          <h1 className=" font-bold text-white text-[20px] text-center">
            <pre className="font-[verdana]">{header[int]}</pre>
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
