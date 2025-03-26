"use client";
import DashboardOverviewHeader from "./Element/dashboardOverviewHeader";
import NotificationArea from "./Element/notificationArea";
import InventoryAndOrderOverviewChart from "./Element/inventoryAndOrderOverviewChart";
import RecentOrders from "./Element/recentOrders";
import ExpenditureOnOverview from "./Element/expenditureOnOverview";

export default function DashboardOverview() {
  return (
    <>
      <div className="w-[90%]  ml-[3%] grid grid-rows-[100px_100px_400px_480px_450px_300px]">
        <DashboardOverviewHeader />
        <NotificationArea />
        <InventoryAndOrderOverviewChart />
        <RecentOrders />
        <ExpenditureOnOverview />
      </div>
    </>
  );
}
