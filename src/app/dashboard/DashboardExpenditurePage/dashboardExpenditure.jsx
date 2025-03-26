import DashboardExpenditureHeader from "./Element/dashboardExpenditureHeader";
import ExpenditureAnalysis from "./Element/expenditureAnalysis";
import ExpenditureOverview from "./Element/expenditureOverview";
export default function DashboardExpenditure() {
  return (
    <div className="w-[90%]  ml-[3%] grid grid-rows-[100px_600px_50px_450px_50px]">
      <DashboardExpenditureHeader />
      <ExpenditureOverview />
      <div></div>
      <ExpenditureAnalysis />
    </div>
  );
}
