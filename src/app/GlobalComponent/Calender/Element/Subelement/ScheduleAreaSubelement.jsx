import MyCalendar from "../CalenderContentSettings/calendarContentElement";
import AutomationOrderList from "./automationOrderList";
import {
  useAutomationStorage,
  useCalenderOpen,
} from "@/app/GlobalComponent/Store/calendarStore";

export default function ScheduleArea() {
  const { calenderSettingsOpen } = useCalenderOpen();
  const { automationOrderList } = useAutomationStorage();
  return (
    <div className="grid grid-rows-[380px_160px] ">
      <div
        className={`${
          calenderSettingsOpen === true
            ? "w-[80%] ml-[10%]"
            : "w-[70%] ml-[15%]"
        } py-[25px]`}
      >
        <MyCalendar />
      </div>
      <div className="pt-2 border-2 overflow-y-scroll flex flex-col gap-1">
        {automationOrderList.map((item, index) => (
          <AutomationOrderList
            key={index}
            autoOrderHead={`Automation Order #${index + 1}`}
            date={item.date}
            timeframePicked={item.timeframePicked}
            product={item.product}
          />
        ))}
      </div>
    </div>
  );
}
