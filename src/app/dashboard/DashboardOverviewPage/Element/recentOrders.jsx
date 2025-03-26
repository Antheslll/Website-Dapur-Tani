import RecentOrdersCardArea from "./Subelement/recentOrdersCardArea";
import RecentOrdersHeader from "./Subelement/recentOrdersHeader";

export default function RecentOrders() {
  return (
    <div className="h-[430px] flex justify-center">
      <div className="w-[97%] grid grid-rows-[50px_380px]">
        <RecentOrdersHeader />
        <RecentOrdersCardArea />
      </div>
    </div>
  );
}
