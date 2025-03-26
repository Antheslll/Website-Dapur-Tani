import { useCalenderOpen } from "@/app/GlobalComponent/Store/calendarStore";

export default function DatePicker() {
  const { calenderSettingsOpen, timeframePicked, setDate } = useCalenderOpen();

  const handlePickedDate = (e) => {
    const value = e.target.value;
    setDate(value);
  };

  return (
    <div
      className={`w-[90%] mx-[5%] mt-3 ${
        calenderSettingsOpen === true ? "" : "hidden"
      }`}
    >
      <div className="w-[70%] grid grid-cols-[30%_70%] ">
        <div>
          <span className="text-white">
            {timeframePicked === "Monthly" || timeframePicked === "Daily"
              ? "Date:"
              : timeframePicked === "Weekly"
              ? "Day: "
              : ""}
          </span>
        </div>
        <div className="pt-1">
          {timeframePicked === "Weekly" ? (
            <select
              className="w-[110px] h-[25px] rounded-md"
              onChange={(e) => handlePickedDate(e)}
            >
              <option>-</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          ) : timeframePicked === "Monthly" ? (
            <select
              className="w-[110px] h-[25px] rounded-md"
              onChange={(e) => handlePickedDate(e)}
            >
              <option>-</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          ) : timeframePicked === "Daily" ? (
            <select
              disabled={timeframePicked === "Daily" ? true : false}
              className="w-[110px] h-[25px] rounded-md"
            >
              <option>-</option>
            </select>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="-mt-2">
        <span className="text-[10px] text-red-600 ">
          {timeframePicked === "Daily"
            ? "You Dont't Need to picked the Date"
            : ""}
        </span>
      </div>
    </div>
  );
}
