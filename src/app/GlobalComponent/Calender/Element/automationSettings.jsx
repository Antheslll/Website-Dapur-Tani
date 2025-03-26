import ApplyButton from "./Subelement/applyButton";
import AutomationSettingsHead from "./Subelement/automationSettingsHead";
import DatePicker from "./Subelement/datePicker";
import OrderSetForAutomation from "./Subelement/orderSetForAutomation";
import TimeframePicker from "./Subelement/timeframePicker";

export default function AutomationSettings() {
  return (
    <div className={`bg-[#04E824] grid grid-rows-[60px_30px_60px_330px_50px] `}>
      <AutomationSettingsHead />
      <TimeframePicker />
      <DatePicker />
      <OrderSetForAutomation />
      <ApplyButton />
    </div>
  );
}
