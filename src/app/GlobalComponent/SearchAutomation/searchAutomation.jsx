import { SearchIconWhite } from "@/app/icons/search-icon";
import ConfirmationButton from "../Button/ConfirmationButton/confirmationButton";
import SearchBar from "../Navbar/Element/navbarSearchBar";
import { ItemsInOrderSet } from "../Calender/Element/Subelement/itemsInOrderSet";
import fruitsData from "../Data/ProductData/fruitData";
import vegetableProducts from "../Data/ProductData/vegetableData";
import { meatData } from "../Data/ProductData/meatData";
import { useCalenderOpen } from "../Store/calendarStore";
export default function SearchAutomation() {
  const allProducts = [...fruitsData, ...vegetableProducts, ...meatData];
  // const allProducts = [];
  const { searchAutomationOpen } = useCalenderOpen();
  return (
    <div
      className={`${
        !searchAutomationOpen ? "hidden" : ""
      } w-full h-full bg-black/50 absolute z-50 flex justify-center pt-5`}
    >
      <div className="bg-white fixed w-[45%] h-[450px] mt-[55px] grid grid-rows-[60px_300px_70px] rounded-xl">
        <div className="flex justify-center ">
          <div className="w-[80%] border-b border-[#767676]">
            <div className="flex items-end pl-2 pt-5">
              <h1 className="font-[Roboto-bold] text-[25px]">Search</h1>
            </div>
          </div>
        </div>

        <div className="border-2 py-5 px-[10%] flex flex-wrap overflow-y-scroll gap-7">
          {allProducts.map((item) => (
            <ItemsInOrderSet
              key={item.key}
              imageRef={item.imageRef}
              type="searchAuto"
              productKey={item.key}
            />
          ))}
        </div>
        <div className="flex justify-end pr-[10%] pt-3">
          <ConfirmationButton
            buttonWidth="w-[100px]"
            confirmationText="ADD"
            buttonKey="addToAutomationList"
          />
        </div>
      </div>
    </div>
  );
}
