import { useAccountStore } from "@/app/GlobalComponent/Store/accountStore";
import NotificationCard from "./Subelement/notificationCard";
import { notification } from "@/app/GlobalComponent/Data/ProductData/notificationData";
export default function NotificationArea() {
  const { activeAccount } = useAccountStore();

  return (
    <div className="flex justify-center">
      {activeAccount.email === "liemanthony27@gmail.com" ? (
        <div className="w-[80%] grid grid-cols-3">
          {notification.map((item) => (
            <NotificationCard
              key={item.key}
              symbol={item.symbol}
              header={item.header}
              content={item.content}
            />
          ))}
        </div>
      ) : (
        <div className="w-[80%] ">
          <div className="w-full h-[80px]  rounded-[20px] border-2 border-black flex justify-center items-center">
            <span className="text-red-600">No Data Available</span>
          </div>
        </div>
      )}
    </div>
  );
}
