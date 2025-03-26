import { ExpenditureChart } from "../../chart";
import ChartOverviewArea from "./Subelement/chartOverviewArea";

export default function ExpenditureOnOverview() {
  return (
    <div className="flex justify-center">
      <ChartOverviewArea
        style="w-[97%] grid grid-rows-[100px_300px] border-2 border-black rounded-3xl bg-white shadow-md shadow-black"
        styleOnChartArea="flex justify-center items-center"
        styleOnChart="w-[90%] h-[300px] flex justify-center"
        chartName="Expenditure"
        chart={<ExpenditureChart />}
        linkPage="Expenditure"
      />
    </div>
  );
}
