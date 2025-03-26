import { useCalenderOpen } from "../../Store/calendarStore";
import AutomationSettings from "./automationSettings";
import OpenAutomationSettingsButton from "./openAutomationSettingsButton";
import ScheduleArea from "./Subelement/ScheduleAreaSubelement";

export default function CalendarLayout() {
  const { calenderSettingsOpen } = useCalenderOpen();
  return (
    <div
      className={`w-[80%] h-[550px]  bg-white grid ${
        calenderSettingsOpen === true
          ? "grid-cols-[70%_30%]"
          : "grid-cols-[97%_3%]"
      } fixed`}
      onClick={(e) => e.stopPropagation()}
    >
      <ScheduleArea />
      <AutomationSettings />
      <OpenAutomationSettingsButton />
    </div>
  );
}
