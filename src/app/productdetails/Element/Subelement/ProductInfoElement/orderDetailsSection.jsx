"use client";
import { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import TruckIcon from "@/app/icons/truck-icon";
import { usePurchaseList } from "@/app/GlobalComponent/Store/openPurchase";
import { useProcessedTotal } from "@/app/GlobalComponent/Store/processedTotalStore";

export default function OrderDetailSection() {
  const [localQuantity, setQuantity] = useState(1);
  const { updateQuantity, quantity } = usePurchaseList();
  const { updateProcessedTotal, updateShippingPrice, updateSelectedShipping } =
    useProcessedTotal();

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);
  const handleShipping = (e) => {
    const shippingPicked = e.target.value;
    let shippingValue =
      shippingPicked === "Reguler-Rp10.000,-"
        ? 10000
        : shippingPicked === "Express-Rp30.000,-"
        ? 30000
        : shippingPicked === "Economy-5.000,-"
        ? 5000
        : 0;
    updateShippingPrice(shippingValue);
    updateSelectedShipping(shippingPicked);
    setTimeout(() => {
      const { total, promotionPrice, shippingPrice } =
        useProcessedTotal.getState();
      updateProcessedTotal(total + shippingPrice + promotionPrice);
    }, 0);
  };
  const debouncedUpdateCart = useCallback(
    debounce((newQuantity) => {
      updateQuantity(newQuantity);
    }, 300),
    [updateQuantity]
  );

  const handleSubtract = () => {
    setQuantity((prev) => {
      const newQuantity = prev - 1;
      debouncedUpdateCart(newQuantity);
      return newQuantity;
    });
  };
  const handleAdd = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      debouncedUpdateCart(newQuantity);
      return newQuantity;
    });
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
    <div className="w-[70%] grid grid-rows-[50px_50px] pt-5 pl-10">
      <div className="grid grid-cols-3">
        <div>
          <span className="text-[12px] text-[#9F9F9F]">Deliver</span>
        </div>
        <div className="grid grid-rows-2">
          <div className="grid grid-cols-[30%_70%]">
            <div className="flex justify-center items-center">
              <div className="scale-[60%]">
                <TruckIcon />
              </div>
            </div>
            <div className="text-[12px] text-[#9F9F9F]">Deliver To</div>
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <div></div>
            <div className="text-[12px] text-[#9F9F9F]">Shipping Cost</div>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="flex justify-center">
            <div className="text-[12px] font-[Roboto-bold]">Jakarta</div>
          </div>
          <div className="pl-[35%] ">
            <select
              className="text-[12px] font-[Roboto-reguler] w-[65px] h-[20px]"
              onChange={(e) => handleShipping(e)}
            >
              <option>-</option> <option>Reguler-Rp10.000,-</option>{" "}
              <option>Express-Rp30.000,-</option>
              <option>Economy-5.000,-</option>{" "}
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <span className="text-[12px] text-[#9F9F9F]">Qty</span>
        </div>
        <div className="h-[50px] grid grid-cols-[25%_30%_25%_20%]">
          <div className="flex justify-center items-center">
            <button
              className="w-[15px] h-[15px] border-2 flex justify-center items-center text-[15px]"
              onClick={handleSubtract}
            >
              -
            </button>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-full h-[20px] border-2 text-center"
              value={localQuantity}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-[15px] h-[15px] border-2 flex justify-center items-center text-[15px]"
              onClick={handleAdd}
            >
              +
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-[14px] font-bold">kg</span>
          </div>
        </div>
      </div>
    </div>
  );
}
