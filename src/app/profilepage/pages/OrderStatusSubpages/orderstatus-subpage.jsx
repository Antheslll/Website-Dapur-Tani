"use client";
import { useState } from "react";
import OrderStatusHeader from "./Element/orderStatusHeader";
import OrderStep from "./Element/orderStep";
import ListOfOrder from "./Element/listOfOrder";
import Invoice from "@/app/dashboard/DashboardHistoryPage/dashboardHistoryToInvoice";

export default function OrderStatusSubpage() {
  const [isStep, setIsStep] = useState(1);
  const [isEnter, setIsEnter] = useState(false);

  const handleStep = (num) => {
    setIsStep(num);
  };
  return (
    <div className="w-[90%]  ml-[3.3%] grid grid-rows-[60px_300px] ">
      <OrderStatusHeader />
      <div className="w-full h-[300px] grid grid-rows-[90px_195px] border-4 rounded-3xl">
        <OrderStep handleStep={handleStep} isStep={isStep} />
        <ListOfOrder isEnter={isEnter} setIsEnter={setIsEnter} />
      </div>
    </div>
  );
}
