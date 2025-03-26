import { useAccountStore } from "@/app/GlobalComponent/Store/accountStore";
import SeeMoreNav from "./Subsubelement/seeMoreNav";

export default function ChartOverviewArea({
  style,
  styleOnChartArea,
  styleOnChart,
  chartName,
  chart,
  linkPage,
}) {
  const { activeAccount } = useAccountStore();

  return (
    <div className={`${style}`}>
      {activeAccount.email === "liemanthony27@gmail.com" ? (
        <>
          {" "}
          <div className="flex justify-between pr-5 pt-3">
            <div>
              <h2 className=" text-[20px] pl-5  ">{chartName}</h2>
            </div>
            <div>
              <SeeMoreNav page={linkPage} />
            </div>
          </div>
          <div className={`${styleOnChartArea}`}>
            <div className={`${styleOnChart}`}>{chart}</div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <span className="text-red-600">No Data Available</span>
        </div>
      )}
    </div>
  );
}
