"use client";
import { useState } from "react";
import { orderStatusData } from "@/app/GlobalComponent/Data/ProductData/orderstatusData";
import { useOrderStatusStore } from "@/app/GlobalComponent/Store/orderStatusStore";
import { useInvoiceStore } from "@/app/GlobalComponent/Store/historyInvoiceStore";
export default function ListOfOrder({ isEnter, setIsEnter }) {
  const { status } = useOrderStatusStore();

  return (
    <div
      className={`overflow-hidden ${
        isEnter === true ? "overflow-y-scroll pl-4" : ""
      } pt-3`}
      onMouseEnter={() => {
        setIsEnter(true);
      }}
      onMouseLeave={() => {
        setIsEnter(false);
      }}
    >
      {orderStatusData
        .filter((item) => item.status === status)
        .map((item) => (
          <OrderTrackingCard
            key={item.orderCode}
            orderTrackingCode={item.orderCode}
            status={item.status}
            type={item.type}
            expected={item.expected}
          />
        ))}
    </div>
  );
}

const OrderTrackingCard = ({ orderTrackingCode, status, type, expected }) => {
  const [isCardHover, setIsCardHover] = useState(false);
  const { setInvoiceOpen, setInvoiceContent, setInvoiceType } =
    useInvoiceStore();

  const invoiceInOrderStatus = orderStatusData
    .filter((item) => item.orderCode === orderTrackingCode)
    .map((item) => item.invoice);
  const productForInvoice = orderStatusData
    .filter((item) => item.orderCode === orderTrackingCode)
    .map((item) => item.invoice.product);
  console.log(productForInvoice);
  const handleSavedInvoiceInfo = (
    invoice,
    type,
    purchasedOn,
    amount,
    status,
    productForInvoice
  ) => {
    setInvoiceType("order-status");
    setInvoiceContent({
      invoice: invoice,
      type: type,
      purchasedOn: purchasedOn,
      amount: amount,
      status: status,
      product: productForInvoice,
      // product: product,
    });
    setInvoiceOpen(true);

    console.log(productForInvoice);
  };

  return (
    <div className="w-full flex justify-center mt-3">
      <div
        className={`w-[70%] h-[100px] grid grid-rows-[30px_70px] border border-black rounded-[15px] ${
          isCardHover === true ? "bg-[#04E824]" : ""
        }`}
        onClick={() => {
          handleSavedInvoiceInfo(
            invoiceInOrderStatus[0].code,
            type,
            invoiceInOrderStatus[0].purchasedOn,
            productForInvoice[0].amount,
            status,
            productForInvoice
          );
        }}
        onMouseEnter={() => {
          setIsCardHover(true);
        }}
        onMouseLeave={() => {
          setIsCardHover(false);
        }}
      >
        <div
          className={` grid grid-cols-2 border-b border-black rounded-t-[15px] ${
            isCardHover === true ? "bg-[#04E824]" : "bg-[#9F9F9F]"
          }`}
        >
          <div className="text-white font-[Roboto-bold] text-[10px] pl-2 pt-2">
            {orderTrackingCode}
          </div>
          <div className="text-red-700 text-[13px] pr-5 pt-1.5 flex justify-end font-[Roboto-reguler]">
            {status === "Payment" ? "NOT PAID" : status.toUpperCase()}
          </div>
        </div>
        <div className=" grid grid-cols-3 text-center">
          <div className="pt-2">
            <h4
              className={` ${
                isCardHover === true ? "text-white" : "text-[#9F9F9F]"
              }`}
            >
              Type
            </h4>
            <p className="text-[18px]">{type.toUpperCase()}</p>
          </div>
          <div className="pt-2">
            <h4
              className={` ${
                isCardHover === true ? "text-white" : "text-[#9F9F9F]"
              }`}
            >
              Status
            </h4>
            <p className="text-[18px]">{status.toUpperCase()}</p>
          </div>
          <div className="pt-2">
            <h4
              className={` ${
                isCardHover === true ? "text-white" : "text-[#9F9F9F]"
              }`}
            >
              Expected
            </h4>
            <p className="text-[18px]">{expected}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
