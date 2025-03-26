"use client";

import { useProductDetails } from "@/app/GlobalComponent/Store/productDetailsStore";
import SpeficationProductLines from "./Subelement/specificationProductsLine";

export default function ProductSpecification() {
  const { productDetails } = useProductDetails();
  return (
    <div>
      <div className="w-[91%] grid grid-rows-[80px_300px] pl-[12%]">
        <div className="bg-[#D9D9D9]/50 flex items-center pl-[3%]">
          <h2 className="font-[Roboto-reguler] text-[30px]">
            Spesifikasi Produk
          </h2>
        </div>
        <div className=" grid grid-rows-[50px_50px_50px_50px_50px_50px]">
          <SpeficationProductLines
            col1="Category"
            col2={productDetails[0].productDetailsCategory}
          />
          <SpeficationProductLines
            col1="Type"
            col2={productDetails[0].productDetailsType}
          />
          <SpeficationProductLines
            col1="Unit"
            col2={productDetails[0].productDetailsUnit}
          />
          <SpeficationProductLines col1="Stock" col2="1.000.000 unit" />
          <SpeficationProductLines
            col1="Supplier"
            col2={productDetails[0].productDetailsBrand}
          />
          <SpeficationProductLines
            col1="Certificate"
            col2={productDetails[0].productDetailsCertificate}
          />
        </div>
      </div>
    </div>
  );
}
