import { useAccountStore } from "@/app/GlobalComponent/Store/accountStore";
import { InventoryOverviewChart } from "../../chart";
import FilteringButton from "./Subelement/filteringButton";

export default function InventoryOverview() {
  const { activeAccount } = useAccountStore();
  return (
    <div className="w-[90%] grid grid-rows-[100px_300px_130px] border-2 border-black ml-[6%] rounded-2xl">
      <div>
        <h2 className=" text-[25px] font-bold ml-[8%] mt-5 ">
          Inventory Overview
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[85%]">
          {activeAccount.email === "liemanthony27@gmail.com" ? (
            <InventoryOverviewChart />
          ) : (
            <div className="flex justify-center items-center">
              <span className="text-red-600">No Data Available</span>
            </div>
          )}
        </div>
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-[50%_25%_25%] ">
          <div className="flex justify-center">
            <div className="w-[60%] grid grid-rows-[30px_40px_40px]">
              <div className=" pl-3">
                <h4>Category:</h4>
              </div>
              <div className=" grid grid-cols-2">
                <FilteringButton filter="All" />
                <FilteringButton filter="Vegetable" />
              </div>
              <div className=" grid grid-cols-2">
                <FilteringButton filter="Meat" />
                <FilteringButton filter="Fruit" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[60%] grid grid-rows-[30px_120px]">
              <div className="pl-3">
                <h4>Status:</h4>
              </div>
              <div className="grid grid-rows-[40px_40px]">
                <FilteringButton filter="Edible" />
                <FilteringButton filter="Expired" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[60%] grid grid-rows-[30px_120px]">
              <div className="pl-3">
                <h4>Condition:</h4>
              </div>
              <div className="grid grid-rows-[40px_40px]">
                <FilteringButton filter="Fresh" />
                <FilteringButton filter="Frozen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
