import Star0, { StarOnly, StarShine } from "@/app/icons/star";
import { useCatalogHooks } from "../../Hooks/catalogHooks";
export default function StarFilterButton({ starAmount }) {
  const { state, dispatch } = useCatalogHooks();
  return (
    <button
      className={`w-[50px] h-[25px] rounded-full grid grid-cols-2  ${
        state.isStarPicked === starAmount ? "bg-[#04E824]" : "bg-[#D9D9D9]"
      } `}
      onClick={() => {
        dispatch({ type: "SET_STAR_PICKED", payload: starAmount });
      }}
    >
      <div className="flex justify-end items-center">
        <div className="scale-[70%]">
          {state.isStarPicked === starAmount ? <StarShine /> : <StarOnly />}
        </div>
      </div>
      <div
        className={`${
          state.isStarPicked === starAmount ? "text-white" : "text-[#9F9F9F]"
        }  text-[13px] flex justify-start items-center`}
      >
        ({starAmount})
      </div>
    </button>
  );
}
