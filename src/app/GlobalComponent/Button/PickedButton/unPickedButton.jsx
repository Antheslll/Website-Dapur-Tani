import { useCatalogHooks } from "../../Hooks/catalogHooks";

export default function UnPickedButton({ textPicked, objective, forHooks }) {
  const { state, dispatch } = useCatalogHooks();
  return (
    <button
      className={`${
        state.isCertified === forHooks || state.isPromotion === forHooks
          ? "text-white bg-[#04E824]"
          : "bg-[#D9D9D9] text-[#9F9F9F]"
      }  w-[100px] h-[25px] rounded-full  text-[12px] `}
      onClick={
        objective === "Certification"
          ? () => dispatch({ type: "SET_CERTIFIED", payload: forHooks })
          : objective === "promotion"
          ? () => dispatch({ type: "SET_PROMOTION", payload: forHooks })
          : undefined
      }
    >
      {textPicked}
    </button>
  );
}
