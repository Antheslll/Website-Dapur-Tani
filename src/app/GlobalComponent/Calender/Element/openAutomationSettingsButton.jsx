import CalenderArrow from "@/app/icons/calenderArrow-icon";
import { useCalenderOpen } from "../../Store/calendarStore";

export default function OpenAutomationSettingsButton() {
  const { calenderSettingsOpen, setCalenderSettingsOpen } = useCalenderOpen();
  return (
    <div
      className={`w-[5vw] h-[5vw] bg-[#04E824] border-2 border-white rounded-[50px] flex justify-center items-center absolute cursor-pointer ${
        calenderSettingsOpen === true
          ? "lg:ml-[67%] md:ml-[67%] scale-[40%] my-[250px]"
          : "lg:ml-[94%] md:ml-[93%] my-[220px]"
      } `}
      onClick={() => setCalenderSettingsOpen(!calenderSettingsOpen)}
    >
      <div
        className={`lg:scale-[80%] md:scale-[58%] ${
          calenderSettingsOpen === true ? "rotate-180" : ""
        }`}
      >
        <CalenderArrow />
      </div>
    </div>
  );
}
