import { useCatalogHooks } from "@/app/GlobalComponent/Hooks/catalogHooks";

export default function VegetableQuickFilter() {
  return (
    <div className="flex justify-center">
      <div className="h-[100px] grid grid-rows-2 ">
        <FastFilterButton fastFilter="Fresh Vegetable" filter="Fresh" />
        <FastFilterButton fastFilter="Frozen Vegetable" filter="Frozen" />
      </div>
    </div>
  );
}

const FastFilterButton = ({ fastFilter, filter }) => {
  const { state, dispatch } = useCatalogHooks();
  const handleExecutionType = (filterType) => {
    dispatch({ type: "SET_TYPE_FILTER", payload: filterType });
    dispatch({
      type: "SET_EXECUTION_STATE",
      payload: { key: "isTypeExecute", value: filterType },
    });

    dispatch({
      type: "SET_FAST_FILTER",
      payload: true,
    });
  };
  return (
    <button
      className={`${
        state.isTypeExecute === filter ? "bg-[#3F4B3B]" : "bg-[#04E824]"
      } first:w-[150px] h-[35px] text-left text-white pl-2 font-verdana font-bold text-[13px]  rounded-lg`}
      onClick={() =>
        state.isTypeExecute === filter
          ? handleExecutionType("")
          : handleExecutionType(filter)
      }
    >
      {fastFilter}
    </button>
  );
};
