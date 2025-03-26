"use client";
import { useState, useEffect, useCallback } from "react";
import {
  useVegetableCartStore,
  useCartStore,
  useFruitCartStore,
  useMeatCartStore,
} from "../Store/cartStore";
import debounce from "lodash.debounce";
import { usePurchaseList } from "../Store/openPurchase";

export default function QuantityController({ itemKey, type, category }) {
  const { allCart, updateAllCart } = useCartStore();
  const { vegetableUpdateCart } = useVegetableCartStore();
  const { fruitUpdateCart } = useFruitCartStore();
  const { meatUpdateCart } = useMeatCartStore();
  const cartItem = allCart.find((item) => item.key === itemKey);
  const initialQuantity = cartItem ? cartItem.quantity : 0;
  const [quantity, setQuantity] = useState(initialQuantity);
  const { use, purchaseList } = usePurchaseList();

  useEffect(() => {
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, [allCart, itemKey]);

  const debouncedUpdateCart = useCallback(
    debounce((newQuantity) => {
      updateAllCart({ key: itemKey, quantity: newQuantity });
      if (category === "vegetable") {
        vegetableUpdateCart({ key: itemKey, quantity: newQuantity });
      } else if (category === "fruit") {
        fruitUpdateCart({ key: itemKey, quantity: newQuantity });
      } else if (category === "meat") {
        meatUpdateCart({ key: itemKey, quantity: newQuantity });
      }
      window.dispatchEvent(new Event("cartUpdated"));
    }, 300),

    [itemKey, updateAllCart]
  );

  useEffect(() => {
    if (quantity !== (cartItem ? cartItem.quantity : 0)) {
      debouncedUpdateCart(quantity);
    }
  }, [quantity]);

  const handleQuantity = (process) => {
    setQuantity((prevQuantity) =>
      process === "add" ? prevQuantity + 1 : Math.max(prevQuantity - 1, 0)
    );
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setQuantity(parsedValue);
    } else if (value === "") {
      setQuantity(0);
    }
  };

  return (
    <div className="h-[50px] grid grid-cols-[25%_50%_25%]">
      <div className="flex justify-center items-center">
        <button
          className={`w-[15px] h-[15px] border-2 flex justify-center items-center text-[15px] ${
            type === "purchase" ? "hidden" : ""
          }`}
          onClick={() => handleQuantity("subtract")}
          disabled={quantity === 0}
        >
          -
        </button>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="w-full h-[20px] border-2 text-center"
          value={use === true ? purchaseList[0].quantity || "" : quantity || ""}
          onChange={handleInputChange}
          disabled={type === "purchase" ? true : false}
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          className={`w-[15px] h-[15px] border-2 flex justify-center items-center text-[15px] ${
            type === "purchase" ? "hidden" : ""
          }`}
          onClick={() => handleQuantity("add")}
        >
          +
        </button>
      </div>
    </div>
  );
}
