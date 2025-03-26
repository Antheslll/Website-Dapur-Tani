"use client";
import { useAccountStore } from "@/app/GlobalComponent/Store/accountStore";
import { ExpenditureAnalysisChart } from "../../chart";
import CategoryAnalysisButton from "./Subelement/categoryAnalysisButton";
import { expenditureAnalysisData } from "@/app/GlobalComponent/Data/analysisData";
import { useState } from "react";
export default function ExpenditureAnalysis() {
  const { activeAccount } = useAccountStore();
  const [categoryAnalysis, setCategoryAnalysis] = useState("Vegetable");
  return (
    <div className="w-[90%] grid grid-rows-[100px_50px_300px] border-2 border-black ml-[6%] rounded-2xl shadow-md shadow-black">
      <div>
        <h2 className=" text-[25px] font-bold mr-[8%] mt-5 text-right">
          Expenditure Analysis
        </h2>
      </div>
      <div className="flex justify-end">
        <div className="w-[38%] grid grid-cols-3 mr-[8%]">
          <CategoryAnalysisButton
            category="Vegetable"
            categoryAnalysis={categoryAnalysis}
            setCategoryAnalysis={setCategoryAnalysis}
          />
          <CategoryAnalysisButton
            category="Fruit"
            categoryAnalysis={categoryAnalysis}
            setCategoryAnalysis={setCategoryAnalysis}
          />
          <CategoryAnalysisButton
            category="Meat"
            categoryAnalysis={categoryAnalysis}
            setCategoryAnalysis={setCategoryAnalysis}
          />
        </div>
      </div>
      <div className="grid grid-cols-[40%_60%]">
        <div className="flex justify-center md:items-center lg:items-start">
          <div className="w-[70%]">
            {activeAccount.email === "liemanthony27@gmail.com" ? (
              <ExpenditureAnalysisChart />
            ) : (
              <div className="flex justify-center items-center">
                <span className="text-red-600">No Data Available</span>
              </div>
            )}
          </div>
        </div>
        <div className="w-[95%] h-[290px] border-2   border-black rounded-2xl pr-2 pl-10 py-2">
          {activeAccount.email === "liemanthony27@gmail.com" ? (
            <div className="w-full h-[270px] overflow-y-scroll">
              <p className="px-2 py-2 text-right text-[10px] ">
                {categoryAnalysis === "Vegetable"
                  ? expenditureAnalysisData[0].vegetableExpenseAnalysis
                  : categoryAnalysis === "Fruit"
                  ? expenditureAnalysisData[1].fruitExpenseAnalysis
                  : expenditureAnalysisData[2].meatExpenseAnalysis}
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <span className="text-red-600">No Data Available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
