"use client";

import { useProductDetails } from "@/app/GlobalComponent/Store/productDetailsStore";

export default function ProductDescription() {
  const { productDetails } = useProductDetails();
  return (
    <div>
      <div className="w-[91%] grid grid-rows-[80px_300px] pl-[12%]">
        <div className="bg-[#D9D9D9]/50 flex items-center pl-[3%]">
          <h2 className="font-[Roboto-reguler] text-[30px]">
            Deskripsi Produk
          </h2>
        </div>
        <div className="pt-[30px]">
          <p className="text-[12px] whitespace-pre-line">
            {productDetails[0].productDetailsDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
