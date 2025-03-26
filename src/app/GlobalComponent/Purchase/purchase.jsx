"use client";
import { useEffect } from "react";
import CheckoutButton from "../Button/CheckoutButton/checkoutButton";
import ProductList from "../ProductList/productList";
import { usePurchase, usePurchaseList } from "../Store/openPurchase";
import { useProcessedTotal } from "../Store/processedTotalStore";
import OrderSettingsPicked from "./Element/orderSettingsPicked";
import TotalItemsAndPriceOnShoppingCart from "./Element/totalItemsAndPriceOnShoppingCart";
import TotalPriceOnShoppingCart from "./Element/totalPriceOnShoppingCart";

export default function Purchase() {
  const { open, purchaseNav } = usePurchase();
  const {
    updateTotal,
    updateSelectedShipping,
    updatePromotionPrice,
    updateSelectedPromotion,
    updateProcessedTotal,
    updateShippingPrice,
  } = useProcessedTotal();
  const { purchaseList, use, updateUse, updateQuantity } = usePurchaseList();
  const total =
    purchaseList.length != 0
      ? purchaseList
          .map((item) => item.quantity * item.price)
          .reduce((acc, cur) => acc + cur)
      : 0;

  useEffect(() => {
    updateTotal(total);
  }, [total]);

  const backgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      purchaseNav(false);
      updateUse(false);
      updateShippingPrice(0);
      updateSelectedShipping(0);
      updatePromotionPrice(0);
      updateSelectedPromotion("");
      updateProcessedTotal(0);
      updateQuantity(1);
    }
  };
  return (
    <div
      className={`w-full h-full bg-black/50 fixed z-50 flex justify-center lg:pt-9 md:pt-[30vh] ${
        open === false ? "hidden" : ""
      }`}
      onClick={backgroundClick}
    >
      <div className="w-[80%] h-[500px] bg-white grid grid-cols-[70%_30%] fixed">
        <div className="flex justify-center">
          <div className="w-[80%] grid grid-rows-[80px_400px] ">
            <div className="border-b border-black grid grid-cols-[80%_20%]">
              <div className="pt-[30px] pl-[5%]">
                <h1 className="text-[20px] font-[Roboto-bold] ">
                  Shopping Cart
                </h1>
              </div>
              <div className="pt-[30px] flex justify-end">
                <span className="font-[Roboto-bold] text-[20px] ">
                  {purchaseList.length} Items
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[90%] pt-8">
                <table className="w-full">
                  <thead className="h-[30px]">
                    <tr className="text-[12px] text-[#767676] font-[Roboto] grid grid-cols-[46%_18%_18%_18%] ">
                      <th className="text-left">Products Details</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {purchaseList.map((item) => (
                      <ProductList
                        type="purchase"
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
          </div>
        </div>
        <div className="bg-[#D9D9D9] flex justify-center">
          <div className="w-[80%] grid grid-rows-[80px_400px]">
            <div className="border-b border-black ">
              <div className="pt-[30px] ">
                <h1 className="text-[20px] font-[Roboto-bold] ">
                  Order Summary
                </h1>
              </div>
            </div>
            <div className="grid grid-rows-[40px_80px_140px_20px_60px]">
              <TotalItemsAndPriceOnShoppingCart
                totalItems={purchaseList.length}
                totalPrices={`Rp${total.toLocaleString("id-ID")},-`}
              />
              <OrderSettingsPicked settings="Shipping" />
              <OrderSettingsPicked settings="Promotion" />
              <TotalPriceOnShoppingCart totalPrices={total} />
              <CheckoutButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
