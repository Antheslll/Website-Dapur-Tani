"use client";
import { GridIcon, WhiteGridIcon } from "@/app/icons/grid-icon";
import { ListIcon, WhiteListIcon } from "@/app/icons/list-icon";
import { useState } from "react";
import ListView from "../DashboardInventoryPage/Element/Subelement/listView";
import GridView from "../DashboardInventoryPage/Element/Subelement/gridView";
import { useInvoiceStore } from "@/app/GlobalComponent/Store/historyInvoiceStore";
export default function Invoice() {
  const [isView, setIsView] = useState("List");
  const { invoiceContent, invoiceOpen, setInvoiceOpen, invoiceType } =
    useInvoiceStore();
  return (
    <div
      className={` ${
        invoiceOpen === true ? "" : "hidden"
      } flex justify-center items-center fixed w-full h-[100vh] bg-black/50 z-20`}
    >
      <div className="lg:w-[70%] md:w-[90%] md:h-[60vh] lg:h-[90vh] bg-white rounded-[15px] grid md:grid-rows-[16vh_5vh_30vh_10vh] lg:grid-rows-[20vh_10vh_50vh_10vh]">
        <div className="grid grid-cols-2 ">
          <div className="font-[Roboto-reguler]  flex items-center pl-[15%]">
            <div className="grid grid-cols-2">
              <div className="font-[Roboto-reguler] flex flex-col gap-2">
                <span>Invoice:</span>
                <span>Type:</span>
                <span>Status:</span>
              </div>
              <div className="font-[Roboto-reguler] flex flex-col gap-2">
                <span>{invoiceContent.invoice}</span>
                <span>{invoiceContent.type}</span>
                <span>{invoiceContent.status}</span>
              </div>
            </div>
          </div>
          <div className="font-[Roboto-reguler]  flex lg:pt-7 md:pt-[4.5vh] pl-10">
            <div className="grid grid-cols-2">
              <div className="font-[Roboto-reguler] flex flex-col gap-2">
                <span>Purchased On:</span>
                <span>Amount:</span>
              </div>
              <div className="font-[Roboto-reguler] flex flex-col gap-2">
                <span>{invoiceContent.purchasedOn}</span>
                <span>Rp {invoiceContent.amount},-</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="-mt-5 grid grid-cols-[30px_30px] pl-9 pt-[30px]">
            <div
              className={`w-[20px] h-[20px] ${
                isView === "List" ? "bg-[#04E824]" : "bg-[#9F9F9F]"
              } rounded-sm flex justify-center items-center cursor-pointer`}
              onClick={() => {
                setIsView("List");
              }}
            >
              {isView === "List" ? <WhiteListIcon /> : <ListIcon />}
            </div>
            <div
              className={`w-[20px] h-[20px] ${
                isView === "Grid" ? "bg-[#04E824]" : "bg-[#9F9F9F]"
              } rounded-sm flex justify-center items-center cursor-pointer`}
              onClick={() => {
                setIsView("Grid");
              }}
            >
              {isView === "Grid" ? <WhiteGridIcon /> : <GridIcon />}
            </div>
          </div>
        </div>
        <div className="pt-[2vh]">
          {isView === "List" ? (
            <ListView
              type={
                invoiceType === "order-status"
                  ? "order-status"
                  : "order-history"
              }
              productKey={invoiceContent.productKey}
            />
          ) : (
            <GridView
              type={
                invoiceType === "order-status"
                  ? "order-status"
                  : "order-history"
              }
              productKey={invoiceContent.productKey}
            />
          )}
        </div>
        <div className="flex justify-end pr-7">
          <button
            className="w-[130px] h-[30px] text-white  bg-[#04E824] rounded-full"
            onClick={() => setInvoiceOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
