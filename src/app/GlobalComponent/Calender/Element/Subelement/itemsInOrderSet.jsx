"use client";
import {
  useAutomationStorage,
  useTempAutomationList,
} from "@/app/GlobalComponent/Store/calendarStore";
import { useState, useEffect } from "react";
export function ItemsInOrderSet({ imageRef, type, productKey }) {
  const [checked, setChecked] = useState(false);
  const {
    setTempAutomationOrderList,
    updateQtyInOrderList,
    fixTempAutomationOrderList,
  } = useTempAutomationList();
  const handleAddProducts = (e) => {
    setChecked(!checked);
    setTempAutomationOrderList({
      productKey: productKey,
      imageRef: imageRef,
      qty: 1,
    });
  };
  const { automationOrderList } = useAutomationStorage();

  const handleChangeQty = (newQty) => {
    const parsedQty = parseInt(newQty, 10) || 1;
    updateQtyInOrderList(productKey, parsedQty);
  };

  useEffect(() => {
    if (automationOrderList.some((item) => item.productKey === productKey)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [automationOrderList, productKey]);
  return (
    <div className="relative z-0 ">
      {type === "searchAuto" ? (
        <input
          type="checkbox"
          onChange={(e) => {
            handleAddProducts(e);
          }}
          checked={checked}
          className="absolute z-20 bg-white mt-[50px] ml-[5px]"
        />
      ) : (
        ""
      )}
      <div className="w-[70px] h-[70px] bg-black rounded-md">
        <img
          src={imageRef}
          alt="foto buah apel"
          className="w-[70px] h-[70px] object-cover relative z-10 border-2 border-black rounded-md"
        />
      </div>
      {type === "searchAuto" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-[20px] h-[20px] text-[13px] relative z-20 bg-white -mt-7 ml-10 rounded-xl flex justify-center items-center text-center border-2 border-black"
          onChange={(e) => handleChangeQty(e.target.value)}
        />
      )}
    </div>
  );
}
