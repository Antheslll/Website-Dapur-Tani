"use client";
import { useProductDetails } from "@/app/GlobalComponent/Store/productDetailsStore";
import Star0, { Star1, Star2, Star3, Star4, Star5 } from "@/app/icons/star";

export default function ProductRatingOnInfo() {
  const { productDetails } = useProductDetails();
  return (
    <>
      <div className="">
        <div className="w-[40%]  grid grid-cols-[12%_30%]">
          <div className="flex justify-center items-center">
            <u>{productDetails[0].productDetailsStar}.0</u>
          </div>
          <div className="flex items-center pl-3">
            <div className="scale-[150%]">
              {productDetails[0].productDetailsStar === 0 ? (
                <Star0 />
              ) : productDetails[0].productDetailsStar === 1 ? (
                <Star1 />
              ) : productDetails[0].productDetailsStar === 2 ? (
                <Star2 />
              ) : productDetails[0].productDetailsStar === 3 ? (
                <Star3 />
              ) : productDetails[0].productDetailsStar === 4 ? (
                <Star4 />
              ) : (
                <Star5 />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
