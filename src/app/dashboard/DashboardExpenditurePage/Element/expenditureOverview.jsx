import { useAccountStore } from "@/app/GlobalComponent/Store/accountStore";
import { ExpenditureOverviewChart } from "../../chart";
import FilteringButton from "./Subelement/filteringButton";

export default function ExpenditureOverview() {
  const { activeAccount } = useAccountStore();
  return (
    <div className="w-[90%] grid grid-rows-[80px_300px_200px] border-2 border-black ml-[6%] rounded-2xl shadow-md shadow-black">
      <div>
        <h2 className=" text-[25px] font-bold ml-[8%] mt-5 ">
          Expenditure Overview
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[85%]">
          {activeAccount.email === "liemanthony27@gmail.com" ? (
            <ExpenditureOverviewChart />
          ) : (
            <div className="flex justify-center items-center">
              <span className="text-red-600">No Data Available</span>
            </div>
          )}
        </div>
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-[50%_50%] ">
          <div className="flex justify-center items-center">
            <div>
              <span>Timeframe:</span>
              <select className="border-[1.5px] w-[110px] h-[23px] ml-3 mt-[2px] rounded-md border-black pl-3 text-[13px]">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>
          </div>
          <div className="">
            <div className="lg:w-[60%] md:w-[80%] grid grid-rows-[30px_40px_40px]">
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
        </div>
      </div>
    </div>
  );
}
