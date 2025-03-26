import { useCalenderOpen } from "@/app/GlobalComponent/Store/calendarStore";

export default function AutomationSettingsHead() {
  const { calenderSettingsOpen } = useCalenderOpen();
  return (
    <div
      className={`w-[90%] border-b pl-1 flex items-end  mx-[5%] ${
        calenderSettingsOpen === true ? "" : "hidden"
      }`}
    >
      <h2 className="font-[Roboto-bold] text-[25px] text-white">Automation</h2>
    </div>
  );
}
