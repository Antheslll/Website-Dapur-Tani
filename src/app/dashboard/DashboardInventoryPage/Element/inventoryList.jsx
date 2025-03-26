"use client";
import { useState } from "react";
import { GridIcon, WhiteGridIcon } from "@/app/icons/grid-icon";
import { ListIcon, WhiteListIcon } from "@/app/icons/list-icon";
import FilteringOption from "./Subelement/filteringOption";
import ListView from "./Subelement/listView";
import GridView from "./Subelement/gridView";
import { useAccountStore } from "@/app/GlobalComponent/Store/accountStore";
import { useInventoryHooks } from "@/app/GlobalComponent/Store/inventoryStore";
export default function InventoryList() {
  const [isView, setIsView] = useState("List");
  const { activeAccount } = useAccountStore();
  const { setEditingAvailable, editing } = useInventoryHooks();
  return (
    <div className="w-[90%] grid grid-rows-[100px_80px_270px] border-2 border-black ml-[6%] rounded-2xl">
      <div className="grid grid-cols-2">
        <div>
          <h2 className=" text-[25px] font-bold ml-[8%] mt-5">
            Inventory List
          </h2>
        </div>
        <div className="flex justify-end">
          <div>
            <p
              className="text-[#00B4D9] pt-6 pr-10"
              onClick={() => setEditingAvailable(!editing)}
            >
              <u>{editing ? "Apply" : "Edit"}</u>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className=" grid grid-cols-[30px_30px] pl-9 pt-[30px]">
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
        <div className="flex justify-end mr-5">
          <div className="w-[85%] grid grid-rows-[30px_70px] ">
            <div className="">
              <h5>Category:</h5>
            </div>
            <div className="grid grid-cols-3">
              <FilteringOption
                op1="All"
                op2="Vegetable"
                op3="Fruit"
                op4="Meat"
              />
              <FilteringOption op1="All" op2="Edible" op3="Expired" />
              <FilteringOption op1="All" op2="Fresh" op3="Frozen" />
            </div>
          </div>
        </div>
      </div>

      {activeAccount.email === "liemanthony27@gmail.com" ? (
        isView === "List" ? (
          <ListView type="inventory" />
        ) : (
          <GridView type="inventory" />
        )
      ) : (
        <div className="flex justify-center items-center">
          <span className="text-red-600">No Data Available</span>
        </div>
      )}
    </div>
  );
}
