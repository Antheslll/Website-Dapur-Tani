import InventoryChart, { OrderTypeChart } from "../../chart";
import ChartOverviewArea from "./Subelement/chartOverviewArea";

export default function InventoryAndOrderOverviewChart() {
  return (
    <div className="h-[400px]  grid grid-cols-[65%_35%]">
      <div className=" pl-4">
        <ChartOverviewArea
          style="w-[95%] bg-white shadow-md shadow-black grid grid-rows-[50px_300px] border-2 border-black rounded-3xl"
          styleOnChartArea="pl-5 flex justify-center items-center"
          styleOnChart="w-[95%]"
          chartName="Inventory"
          chart={<InventoryChart />}
          linkPage="Inventory"
        />
      </div>

      <div>
        <ChartOverviewArea
          style="w-[95%] bg-white shadow-md shadow-black grid grid-rows-[50px_300px] border-2 border-black rounded-3xl"
          styleOnChartArea="pl-5 flex justify-center items-center"
          styleOnChart="w-[95%]"
          chartName="Order Type"
          chart={<OrderTypeChart />}
          linkPage="Expenditure"
        />
      </div>
    </div>
  );
}
