import { useSideDashboard } from "@/app/GlobalComponent/Hooks/dashboardSideContext";
import DashboardExpenditure from "./DashboardExpenditurePage/dashboardExpenditure";
import DashboardHistory from "./DashboardHistoryPage/dashboardHistory";
import DashboardToInventory from "./DashboardInventoryPage/dashboardToInventory";
import DashboardOverview from "./DashboardOverviewPage/dashboardOverview";

export default function DashboardContent() {
  const { isNavClicked } = useSideDashboard();
  return (
    <>
      {isNavClicked === "Dashboard" ? (
        <DashboardOverview />
      ) : isNavClicked === "Expenditure" ? (
        <DashboardExpenditure />
      ) : isNavClicked === "History" ? (
        <DashboardHistory />
      ) : isNavClicked === "Inventory" ? (
        <DashboardToInventory />
      ) : (
        <DashboardOverview />
      )}
    </>
  );
}
