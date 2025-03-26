"use client";
import { useProductDetails } from "@/app/GlobalComponent/Store/productDetailsStore";
import Image from "next/image";

export default function ProductImageDisplay() {
  const { productDetails } = useProductDetails();

  return (
    <div className="flex xl:justify-end lg:justify-end md:justify-center pt-[57px]">
      {productDetails[0].productDetailsImage ? (
        <Image
          src={productDetails[0].productDetailsImage}
          alt=""
          width={300}
          height={300}
          className="lg:w-[320px] lg:h-[320px] xl:h-[350px] xl:w-[70%] md:w-[350px] md:h-[350px] object-cover shadow-xl shadow-black"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
