"use client";
import { useState } from "react";
import RecentOrdersCard from "./recentOrdersCard";
import SeeMoreNav from "./Subsubelement/seeMoreNav";
import { useAccountStore } from "@/app/GlobalComponent/Store/accountStore";
import { orderHistory } from "@/app/GlobalComponent/Data/ProductData/ordersHistory";
export default function RecentOrdersCardArea() {
  const [isHoverOrder, setIsHoverOrder] = useState(false);
  const { activeAccount } = useAccountStore();
  return (
    <div className="grid grid-rows-[50px_300px_30px]">
      <div className="grid grid-cols-5">
        {["Invoice", "Type", "Purchase On", "Amount", "Status"].map((atr) => (
          <div key={atr} className="flex justify-center items-center">
            {atr}
          </div>
        ))}
      </div>
      <div
        className={`overflow-hidden h-[300px]  ${
          isHoverOrder === true ? "overflow-y-scroll" : ""
        }`}
        onMouseEnter={() => {
          setIsHoverOrder(true);
        }}
        onMouseLeave={() => {
          setIsHoverOrder(false);
        }}
      >
        {activeAccount.email === "liemanthony27@gmail.com" ? (
          <>
            {orderHistory
              .map((item) => (
                <RecentOrdersCard
                  key={item.invoice}
                  invoice={item.invoice}
                  type={item.type}
                  purchasedOn={item.purchasedOn}
                  amount={item.amount}
                  status={item.status}
                />
              ))
              .slice(0, 5)}
          </>
        ) : (
          <div className="flex justify-center items-center">
            <span className="text-red-600">No Data Available</span>
          </div>
        )}
      </div>
      {activeAccount.email === "liemanthony27@gmail.com" ? (
        <div className="h-[30px] flex justify-center text-[#3D57FF]">
          <SeeMoreNav page="History" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
