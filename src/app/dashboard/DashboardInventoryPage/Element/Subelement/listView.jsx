"use client";
import { orderHistory } from "@/app/GlobalComponent/Data/ProductData/ordersHistory";
import { useInvoiceStore } from "@/app/GlobalComponent/Store/historyInvoiceStore";
import { inventoryData } from "@/app/GlobalComponent/Data/ProductData/inventoryData";
import { useInventoryHooks } from "@/app/GlobalComponent/Store/inventoryStore";
import { useState } from "react";
export default function ListView({ type }) {
  const { invoiceContent } = useInvoiceStore();

  return (
    <div className="w-full flex justify-center">
      <table className="w-[95%]">
        <thead className="border-b-2 border-black  ">
          <tr
            className={`lg:text-[0.8rem] md:text-[0.6rem] h-[30px] text-[#767676] grid font-[Roboto] ${
              type === "order-history"
                ? " grid-cols-[7.2%_11%_17%_30%_17.4%_17.4%]"
                : type === "order-status"
                ? " grid-cols-[8%_22%_50%_20%]"
                : " grid-cols-[7.2%_11%_17%_30%_11.6%_17.2%_6%]"
            }`}
          >
            <th>QTY</th>
            <th>Photo</th>
            {type === "order-status" ? null : <th>Material Category</th>}
            <th className="text-left">Name</th>
            {type === "order-status" ? null : <th>Material Type</th>}
            {type === "order-history" || "order-status" ? (
              ""
            ) : (
              <th>Condition</th>
            )}
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {type === "order-history" ? (
            orderHistory
              .filter((item) => item.invoice === invoiceContent.invoice)
              .flatMap((item) => item.product || [])
              .map((productItem) => (
                <ListOfProduct
                  type={type}
                  productKey={productItem.key}
                  key={productItem.key}
                  qty={productItem.qty}
                  photo={productItem.photo}
                  materialCategory={productItem.category}
                  name={productItem.name}
                  materialType={productItem.materialType}
                  amount={productItem.amount}
                />
              ))
          ) : type === "order-status" ? (
            <ListOfProduct
              type={type}
              key={invoiceContent.invoice}
              qty={invoiceContent.product[0].qty}
              photo={invoiceContent.product[0].photo}
              name={invoiceContent.product[0].name}
              amount={invoiceContent.amount}
            />
          ) : (
            inventoryData.map((productItem) => (
              <ListOfProduct
                type={type}
                productKey={productItem.key}
                key={productItem.key}
                qty={productItem.qty}
                photo={productItem.photo}
                materialCategory={productItem.materialCategory}
                name={productItem.name}
                materialType={productItem.materialType}
                condition={productItem.condition}
                amount={productItem.amount}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function ListOfProduct({
  qty,
  productKey,
  photo,
  materialCategory,
  materialType,
  name,
  condition,
  amount,
  type,
}) {
  const { editing, someValue, setSomeValue } = useInventoryHooks();
  const [inputValue, setInputValue] = useState(qty);
  return (
    <tr
      className={`text-[11px] text-center font-[Roboto] ${
        type === "order-history"
          ? "grid grid-cols-[7.2%_11%_17%_30%_17.4%_17.4%]"
          : type === "order-status"
          ? "grid grid-cols-[8%_22%_50%_20%]"
          : "grid grid-cols-[7.2%_11%_17%_30%_11.6%_17.2%_6%]"
      } border-b border-black`}
    >
      <td className="flex justify-center items-center">
        <input
          type="text"
          className={`w-[25px] ${editing ? "border-2" : ""} text-center`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={!editing}
        />
      </td>
      <td className="flex justify-center items-center">
        <img src={photo} className="w-[20px] h-[20px]" />
      </td>
      {type === "order-status" ? (
        ""
      ) : (
        <td className="flex justify-center items-center">{materialCategory}</td>
      )}
      <td className="text-left text-[#0084FF] flex  items-center">{name}</td>
      {type === "order-status" ? (
        ""
      ) : (
        <td className=" text-[#607162] flex justify-center items-center  ">
          {materialType}
        </td>
      )}
      {type === "order-history" || "order-status" ? null : (
        <td className="text-[#FF0004] flex justify-center items-center">
          {condition}
        </td>
      )}
      <td className="flex justify-center items-center ">Rp{amount},-</td>
    </tr>
  );
}
