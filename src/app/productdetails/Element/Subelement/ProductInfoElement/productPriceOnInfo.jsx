"use client";
import { useProductDetails } from "@/app/GlobalComponent/Store/productDetailsStore";
import {
  Cashback,
  Discount,
  FreeDelivery,
  Membership,
} from "@/app/icons/promotionType-icon";

export default function ProductPriceOnInfo() {
  const { productDetails } = useProductDetails();
  const type = productDetails[0].productDetailsPromotionType;
  return (
    <div className="w-full bg-[#D9D9D9] pl-10 grid grid-cols-[30%_70%]">
      <div className="flex items-center">
        <span className="text-[#04E824] text-[1.8rem] font-[Roboto-reguler]">
          Rp{productDetails[0].productDetailsPrice.toLocaleString("id-ID")},-
        </span>
      </div>
      {productDetails[0].productDetailsPromotionType === "none" ? (
        ""
      ) : (
        <div className="w-[50%] grid grid-cols-[50%_30%]">
          {type === "Free Delivery" ||
          type === "Cashback" ||
          type === "none" ? (
            ""
          ) : (
            <div className="flex items-center">
              <span className="text-[#9F9F9F] font-[Roboto-reguler]">
                <s>{productDetails[0].productDetailsUndiscountPrice}</s>
              </span>
            </div>
          )}

          <div className="flex items-center">
            <div
              className={`text-[#04E824] text-[10px] font-bold bg-[#04E824]/30 ${
                type === "Free Delivery" ||
                type === "Cashback" ||
                type === "none"
                  ? ""
                  : "grid grid-cols-2"
              }`}
            >
              {type === "Free Delivery" ||
              type === "Cashback" ||
              type === "none" ? (
                ""
              ) : (
                <div className="flex items-center">
                  -{`${productDetails[0].productDetailsPromotionValue * 100}%`}
                </div>
              )}
              <div className="scale-[50%]">
                {type === "Discount" ? (
                  <Discount />
                ) : type === "Membership" ? (
                  <Membership />
                ) : type === "Free Delivery" ? (
                  <FreeDelivery />
                ) : (
                  <Cashback />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
