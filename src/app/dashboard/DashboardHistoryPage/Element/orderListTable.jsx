"use client";
import { useState } from "react";
import HistoryList from "./Subelement/historyList";
import { useAccountStore } from "@/app/GlobalComponent/Store/accountStore";
import { orderHistory } from "@/app/GlobalComponent/Data/ProductData/ordersHistory";
export default function OrderListTable() {
  const [isListHover, setIsListHover] = useState(null);
  const { activeAccount } = useAccountStore();
  const handleListHover = (list) => {
    setIsListHover(list);
  };
  return (
    <div>
      <div className="w-full flex justify-center">
        {activeAccount.email === "liemanthony27@gmail.com" ? (
          <table className="w-[90%]">
            <thead className="border-b-2 border-black  ">
              <tr className="text-[14px] h-[30px] text-[#767676] font-[Roboto] grid grid-cols-5  ">
                <th>Invoice</th>
                <th>Type</th>
                <th>Purchase On</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((item) => (
                <HistoryList
                  isListHover={isListHover}
                  handleListHover={handleListHover}
                  key={item.invoice}
                  invoice={item.invoice}
                  type={item.type}
                  purchasedOn={item.purchasedOn}
                  amount={item.amount}
                  status={item.status}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center">
            <span className="text-red-600">No Data Available</span>
          </div>
        )}
      </div>
    </div>
  );
}
