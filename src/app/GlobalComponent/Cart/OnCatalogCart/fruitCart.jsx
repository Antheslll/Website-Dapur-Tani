"use client";
import QuantityController from "@/app/GlobalComponent/QuantityController/quantityController";
import Image from "next/image";
import { useCatalogHooks } from "../../Hooks/catalogHooks";
import { useEffect } from "react";
import { useCartStore, useFruitCartStore } from "../../Store/cartStore";

export default function FruitCart() {
  const { state } = useCatalogHooks();
  const { fruitCart, fruitAddToCart } = useFruitCartStore();
  const { addToAllCart } = useCartStore();

  const total =
    fruitCart.length != 0
      ? fruitCart
          .map((item) => item.price * item.quantity)
          .reduce((acc, cur) => acc + cur, 0)
      : "";

  useEffect(() => {
    if (state.addToCart) {
      fruitAddToCart({
        key: state.productKey,
        productName: state.productName,
        imgSrc: state.imgSrc,
        quantity: 1,
        price: state.productPrice,
      });

      addToAllCart({
        key: state.productKey,
        productName: state.productName,
        imgSrc: state.imgSrc,
        quantity: 1,
        price: state.productPrice,
        checked: false,
      });
    }
  }, [
    state.addToCart,
    state.productKey,
    state.productName,
    state.imgSrc,
    state.priceNominal,
    state.productNominal,
    state.productPrice,
    fruitAddToCart,
    addToAllCart,
  ]);

  return (
    <div className="pt-[20px]">
      <div className="w-[450px] h-auto bg-[#3F4B3B] rounded-xl grid grid-rows-[50px_120px_50px]">
        <div className="flex justify-center items-end">
          <div className="w-[95%] h-[40px] flex justify-end items-center pr-3 bg-white rounded-sm">
            <h4 className="font-[Roboto-bold] ">fruit on Cart</h4>
          </div>
        </div>
        <div className=" h-[145px] overflow-scroll custom-scrollbar">
          {(fruitCart ?? []).length === 0 ? (
            <p className="text-[#04e824] text-center">Cart is Empty</p>
          ) : (
            fruitCart.map((item) => (
              <FruitOnCartList
                key={item.key}
                itemKey={item.key}
                imgSrc={item.imgSrc}
                productName={item.productName}
                alt={`Photo of ${item.productName}`}
              />
            ))
          )}
        </div>
        <div>
          <div className="flex justify-center items-end">
            <div className="w-[95%] h-[40px] bg-white rounded-sm grid grid-cols-2">
              <div className="pl-2 flex items-center">
                <span className="font-[Roboto-bold] ">Total</span>
              </div>
              <div className="pr-2 flex justify-end items-center">
                <span className="font-[Roboto-bold] ">
                  Rp{total.toLocaleString("id-ID")},-
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FruitOnCartList = ({ imgSrc, productName, alt, itemKey }) => {
  return (
    <div className="flex justify-center mt-2">
      <div className="w-[95%] h-[40px] grid grid-cols-[15%_65%_20%] pr-3 bg-white rounded-sm">
        <div className=" flex justify-center items-center">
          <Image
            src={imgSrc || "/Products/fruit/fresh/asparagus.jpg"}
            alt={alt}
            className="w-[30px] h-[30px] rounded-md"
            width={500}
            height={500}
          />
        </div>
        <div className="pt-2">
          <h6 className="text-[#0084FF] text-[9px]">{productName}</h6>
        </div>
        <div className="-my-1">
          <QuantityController itemKey={itemKey} category="fruit" />
        </div>
      </div>
    </div>
  );
};
