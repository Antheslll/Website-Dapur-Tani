"use client";
import SidebarDashboard from "./sidebarDashboard";
import DashboardContent from "./dashboardContent";
import Invoice from "./DashboardHistoryPage/dashboardHistoryToInvoice";

export default function DashboardPages() {
  return (
    <div className="w-full h-[600px] relative grid grid-cols-[15%_85%]">
      <Invoice />

      <SidebarDashboard />
      <div></div>
      <DashboardContent />
    </div>
  );
}
