import { useCalenderOpen } from "@/app/GlobalComponent/Store/calendarStore";

export default function AutomationOrderList({
  autoOrderHead,
  date,
  timeframePicked,
  product,
}) {
  const { calenderSettingsOpen } = useCalenderOpen();
  return (
    <div
      className={`${
        calenderSettingsOpen === true ? "w-[80%] ml-[10%]" : "w-[70%] ml-[15%]"
      }  bg-white h-[80px] border-black border-2 grid grid-rows-[30px_20px_10px] pl-[3%]`}
    >
      <div className="text-[15px] pt-2">
        <h2>{autoOrderHead}</h2>
      </div>
      <div className="text-[7px] text-[#04E824]">
        Every {date}, {timeframePicked}
      </div>
      <div className="text-[7px]">Items {product.length}</div>
    </div>
  );
}
