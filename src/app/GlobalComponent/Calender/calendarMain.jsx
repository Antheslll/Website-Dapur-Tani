import { useCalenderOpen } from "../Store/calendarStore";
import CalendarLayout from "./Element/calendarLayoutElement";
export default function Calender() {
  const { calendarOpen, setCalenderOpen } = useCalenderOpen();
  return (
    <>
      <div
        className={`${
          calendarOpen ? "" : "hidden"
        } w-full h-full bg-black/50 fixed z-50 flex justify-center lg:pt-5 md:pt-[25vh]`}
        onClick={() => {
          setCalenderOpen(false);
        }}
      >
        <CalendarLayout />
      </div>
    </>
  );
}
