import ConfirmationButton from "../Button/ConfirmationButton/confirmationButton";
import FilterForType from "./Element/filterForType";
import FilterForCertificate from "./Element/filterForCertificate";
import FilterByStars from "./Element/filterByStars";
import FilterByPromotion from "./Element/filterByPromotion";
import FilterPriceRange from "./Element/filterPriceRange";
import FilterByStorageTime from "./Element/filterByStorageTime";
import FilterHeader from "./Element/filterHeader";
import FilterByLocattion from "./Element/filterByLocation";
import { useCatalogHooks } from "../Hooks/catalogHooks";

export default function Filtering({ header }) {
  const { state, dispatch } = useCatalogHooks();
  return (
    <div
      className={`absolute z-50 ${
        state.isOpenAdvanceFilter === true ? "" : "hidden"
      }`}
    >
      <div
        className="w-full h-full fixed bg-black/50  flex justify-center pt-5 "
        onClick={() => {
          dispatch({ type: "SET_ADVANCE_FILTER", payload: false });
        }}
      >
        <div
          className="bg-white  fixed w-[70%] h-[550px] pt-5 grid grid-rows-[50px_400px_50px] rounded-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <FilterHeader filterHeader={header} />
          <div>
            <div className="h-[400px] grid grid-cols-2">
              <div className="h-[400px] border-r-[1.5px] border-black">
                <div className="grid grid-rows-[80px_110px_120px_100px]">
                  <FilterForType filterObject="Vegetable" />
                  <FilterPriceRange />
                  <FilterByStars />
                  <FilterForCertificate />
                </div>
              </div>
              <div className="h-[400px] grid grid-rows-[120px_140px_100px] ">
                <FilterByStorageTime />
                <FilterByPromotion />
                <FilterByLocattion />
              </div>
            </div>
          </div>
          <div className="pl-[2.5%]">
            <div className="w-[95%] flex justify-end">
              <ConfirmationButton
                confirmationText="APPLY"
                buttonWidth="w-[150px]"
                buttonKey="FILTER_APPLY"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
