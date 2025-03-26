import ConfirmationButton from "@/app/GlobalComponent/Button/ConfirmationButton/confirmationButton";
import { useCalenderOpen } from "@/app/GlobalComponent/Store/calendarStore";

export default function ApplyButton() {
  const { calenderSettingsOpen } = useCalenderOpen();
  return (
    <div
      className={`w-[90%] mx-[5%] flex justify-end items-end ${
        calenderSettingsOpen === true ? "" : "hidden"
      }`}
    >
      <ConfirmationButton
        confirmationText="APPLY"
        buttonWidth="w-[120px]"
        styleAdd="border-2 border-white"
        buttonKey="ApplyAutomation"
      />
    </div>
  );
}
