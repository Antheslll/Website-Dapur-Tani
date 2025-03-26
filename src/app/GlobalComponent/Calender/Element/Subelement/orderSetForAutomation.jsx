import {
  useCalenderOpen,
  useTempAutomationList,
} from "@/app/GlobalComponent/Store/calendarStore";
import IconCart from "@/app/icons/cart-icon";
import SearchButton from "@/app/icons/search-icon";
import { ItemsInOrderSet } from "./itemsInOrderSet";

export default function OrderSetForAutomation() {
  const { calenderSettingsOpen, setSearchAutomationOpen } = useCalenderOpen();
  const { fixTempAutomationOrderList } = useTempAutomationList();
  return (
    <div
      className={`w-[90%] mx-[5%] grid grid-rows-[60px_250px] bg-white rounded-lg ${
        calenderSettingsOpen === true ? "" : "hidden"
      }`}
    >
      <div className="grid lg:grid-cols-[70%_30%] md:grid-cols-[60%_40%]">
        <div className="pl-2 pt-2">
          <h3 className="font-[Roboto-bold] leading-tight md:text-[1rem] lg:text-[1.2rem]">
            Order Set for <br /> Automation
          </h3>
        </div>
        <div>
          <div className="w-[60px] h-[25px] grid grid-cols-[25px_25px] gap-2 my-2.5">
            <div className=" rounded-sm flex justify-center items-center"></div>
            <div className="border-2 border-black rounded-sm flex justify-center items-center">
              <div
                className="scale-[70%] cursor-pointer"
                onClick={() => setSearchAutomationOpen(true)}
              >
                <SearchButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[95%] h-[250px] pt-2 md:pl-1 lg:pl-8  border border-black rounded-xl">
          <div className=" flex flex-wrap flex-row gap-y-4 gap-x-4">
            {fixTempAutomationOrderList.length > 0
              ? fixTempAutomationOrderList.map((item, index) => (
                  <ItemsInOrderSet
                    imageRef={item.imageRef}
                    key={index}
                    productKey={item.productKey}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
