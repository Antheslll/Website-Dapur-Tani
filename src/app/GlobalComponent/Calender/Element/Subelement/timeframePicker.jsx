import TimeframeButtonOnAutomation from "../timeframeButtonOnAutomation";
import { useCalenderOpen } from "@/app/GlobalComponent/Store/calendarStore";

export default function TimeframePicker() {
  const { calenderSettingsOpen } = useCalenderOpen();
  return (
    <div className={`${calenderSettingsOpen === true ? "" : "hidden"}`}>
      <div className="w-[80%] grid grid-cols-3 mx-[5%] my-2">
        <TimeframeButtonOnAutomation timeFrame="Daily" />
        <TimeframeButtonOnAutomation timeFrame="Weekly" />
        <TimeframeButtonOnAutomation timeFrame="Monthly" />
      </div>
    </div>
  );
}
