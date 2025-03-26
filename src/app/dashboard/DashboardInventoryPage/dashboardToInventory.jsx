import DashboardInventoryHeader from "./Element/dashboardInventoryHeader";
import InventoryList from "./Element/inventoryList";
import InventoryOverview from "./Element/inventoryOverview";

export default function DashboardToInventory() {
  return (
    <div className="w-[90%]  ml-[3%] grid grid-rows-[100px_580px_50px_520px_50px] ">
      <DashboardInventoryHeader />
      <InventoryOverview />
      <div></div>
      <InventoryList />
    </div>
  );
}
