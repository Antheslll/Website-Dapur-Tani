import { useCatalogHooks } from "../../Hooks/catalogHooks";

export default function FilterByStorageTime() {
  const { state, dispatch } = useCatalogHooks();

  const min = 0;
  let max;

  state.timeFrame === "Day"
    ? (max = 7)
    : state.timeFrame === "Month"
    ? (max = 12)
    : (max = 4);

  const validateValue = (value) => {
    let number = Number(value.replace(/\D/g, ""));
    if (number < min) return min;
    if (number > max) return max;
    return number;
  };

  const handleMinStorageTime = (e) => {
    let value = validateValue(e.target.value);
    let newValue =
      value === "" ? 0 : Math.min(Math.max(Number(value), min), max);

    dispatch({
      type: "SET_MIN_STORAGE_TIME",
      payload: newValue,
    });
  };

  const handleMaxStorageTime = (e) => {
    let value = validateValue(e.target.value);
    let newValue =
      value === "" ? 0 : Math.min(Math.max(Number(value), min), max);

    dispatch({
      type: "SET_MAX_STORAGE_TIME",
      payload: newValue,
    });
  };

  const handleTimeFrame = (e) => {
    dispatch({
      type: "SET_TIME_FRAME",
      payload: e.target.value,
    });
  };
  return (
    <div className="grid grid-rows-[50px_33px_17px]">
      <div className="pl-10 pt-2 font-[Roboto-bold] text-[15px] text-[#9F9F9F]">
        <h2>Storage Time</h2>
      </div>
      <div className="pl-10">
        <div className="w-[80%] grid grid-cols-3 ">
          <input
            type="number"
            placeholder="Min"
            value={state.isMinStorageTime ?? ""}
            onChange={(e) => handleMinStorageTime(e)}
            className="w-[100px] h-[30px] border border-black rounded-md pl-2 text-[13px]"
          />
          <input
            type="number"
            placeholder="Max"
            value={state.isMaxStorageTime ?? ""}
            onChange={(e) => handleMaxStorageTime(e)}
            className="w-[100px] h-[30px] border border-black rounded-md pl-2 text-[13px]"
          />
          <select
            className="w-[70px] h-[30px] border border-black rounded-md pl-2 text-[13px]"
            value={state.timeFrame}
            onChange={(e) => handleTimeFrame(e)}
          >
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
          </select>
        </div>
      </div>
      <div className="pl-10 text-[#04E824] text-[10px] ">
        {state.isMinStorageTime}-{state.isMaxStorageTime} {state.timeFrame}
      </div>
    </div>
  );
}
