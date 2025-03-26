"use client";
import { useState, useEffect } from "react";
import ProductList from "../../ProductList/productList";
import TotalPriceOnCart from "./SubElement/totalPriceOnCart";
import { useCartStore } from "../../Store/cartStore";
import { usePurchase, usePurchaseList } from "../../Store/openPurchase";

export default function CartAll({ isCartOpen, handleCartOpen }) {
  const { purchaseNav } = usePurchase();
  const { updatePurchaseList } = usePurchaseList();
  const { allCart, updateAllCartChecked } = useCartStore();
  const [mouseIn, setMouseIn] = useState(false);
  const [cartItems, setCartItems] = useState(allCart);
  const [forceRender, setForceRender] = useState(0);
  const addToPurchaseList = () => {
    const productChecked = allCart.filter((item) => item.checked === true);
    updatePurchaseList(productChecked);
  };
  useEffect(() => {
    setCartItems([...allCart]);
    setForceRender((prev) => prev + 1);
  }, [allCart]);

  useEffect(() => {
    const handleCartUpdate = () => {
      setCartItems([...allCart]);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, [allCart]);

  const unchecked = () => {
    updateAllCartChecked({ checked: false });
  };

  return (
    <div
      className={`w-full h-full bg-black/70 fixed z-50 flex justify-center items-center ${
        isCartOpen === true ? "" : "hidden"
      }`}
      onClick={() => {
        unchecked();
        handleCartOpen(false);
      }}
    >
      <div
        className="bg-white absolute z-60 lg:w-[45%] md:w-[60%] h-[450px]  grid grid-rows-[70px_270px_50px_40px] rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center ">
          <div className="w-[80%] grid grid-cols-2 border-b border-[#767676]">
            <div className="flex items-end pl-2">
              <h1 className="font-[Roboto-bold] text-[25px]">Cart</h1>
            </div>
            <div className="items-end font-[Roboto-bold] text-[25px] flex justify-end pr-2">
              <span>Items</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="w-[80%] flex justify-center pt-5 border-b border-[#767676]">
            <table className="w-full">
              <thead className="h-[30px]">
                <tr className="text-[12px] text-[#767676] font-[Roboto] grid grid-cols-[46%_18%_18%_18%] ">
                  <th className="text-left">Products Details</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody
                key={forceRender}
                className={`block h-[210px] ${
                  mouseIn === true
                    ? "overflow-y-scroll custom-scrollbar"
                    : "overflow-hidden"
                }`}
                onMouseEnter={() => setMouseIn(true)}
                onMouseLeave={() => setMouseIn(false)}
              >
                {cartItems.map((item) => (
                  <ProductList
                    key={`${item.key}-${item.productName}`}
                    itemKey={item.key}
                    imgSrc={item.imgSrc}
                    productName={item.productName}
                    price={item.price}
                    quantity={item.quantity}
                    alt={`Photo of ${item.productName}`}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center ">
          <TotalPriceOnCart />
        </div>
        <div className="flex justify-center items-end">
          <div className="w-[80%] flex justify-end">
            <button
              className={` h-[30px] w-[120px] bg-[#04E824] text-[13px] text-white rounded-full`}
              onClick={() => {
                purchaseNav(true);
                handleCartOpen(false);
                addToPurchaseList();
              }}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
