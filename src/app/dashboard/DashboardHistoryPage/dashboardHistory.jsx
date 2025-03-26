import DashboardHistoryHeader from "./Element/dashboardHistoryHeader";
import OrderListHeader from "./Element/orderListHeader";
import OrderListTable from "./Element/orderListTable";
export default function DashboardHistory() {
  return (
    <div className="w-[90%] ml-[3%] grid grid-rows-[100px_100px_400px]">
      <DashboardHistoryHeader />
      <OrderListHeader />
      <OrderListTable />
    </div>
  );
}
