"use client";
import { useCatalogHooks } from "../Hooks/catalogHooks";
import { useEffect } from "react";
import { useProductDetails } from "../Store/productDetailsStore";
export default function CartBox() {
  const { state, dispatch } = useCatalogHooks();
  const { productDetails } = useProductDetails();

  useEffect(() => {
    if (state.addToCart) {
      const cartBoxTimeOut = setTimeout(() => {
        dispatch({ type: "ADD_TO_CART", payload: false });
      }, 1000);
      return () => clearTimeout(cartBoxTimeOut);
    }
  });
  return (
    <div
      className={`w-full h-[500px] ${
        state.addToCart === true ? "" : "hidden"
      } fixed flex justify-center items-center`}
    >
      <div
        className={` w-[50%] h-[100px] bg-[#04E824] px-5 flex justify-center items-center`}
      >
        <span className="text-[12px] text-white font-[Roboto-bold] text-center ">
          {state.productName || productDetails[0].productDetailsName} <br />{" "}
          Added To Cart
        </span>
      </div>
    </div>
  );
}
