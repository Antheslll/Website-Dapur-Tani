import { useCatalogHooks } from "../../Hooks/catalogHooks";

export default function FilterForType({ filterObject }) {
  const { state, dispatch } = useCatalogHooks();
  return (
    <div className="grid grid-rows-[40px_60px]">
      <div className="pl-10 pt-2 font-[Roboto-bold] text-[15px] text-[#9F9F9F]">
        <h2>{filterObject} Type</h2>
      </div>
      <div className="pl-10">
        <div className="w-[280px] h-[25px] bg-[#D9D9D9]  rounded-full grid grid-cols-2 relative z-0">
          <div className="flex justify-center items-center relative z-20 ">
            <button
              disabled={state.isTypeFilter === "Fresh"}
              className={`${
                state.isTypeFilter === "Fresh"
                  ? "text-white disabled"
                  : "text-[#9F9F9F]"
              } font-[Roboto-reguler]`}
              onClick={() => {
                dispatch({ type: "SET_TYPE_FILTER", payload: "Fresh" });
              }}
            >
              Fresh
            </button>
          </div>
          <div className="flex justify-center items-center relative z-20 ">
            <button
              disabled={state.isTypeFilter === "Frozen"}
              className={`${
                state.isTypeFilter === "Frozen"
                  ? "text-white disabled"
                  : "text-[#9F9F9F]"
              } font-[Roboto-reguler]`}
              onClick={() => {
                dispatch({ type: "SET_TYPE_FILTER", payload: "Frozen" });
              }}
            >
              Frozen
            </button>
          </div>
          <div
            className={`${
              state.isTypeFilter === "Fresh" ? "" : "ml-[140px]"
            } relative w-[140px] h-[25px] bg-[#04E824] rounded-full z-10 -mt-[25px]`}
          ></div>
        </div>
      </div>
    </div>
  );
}
