"use client";
import { useCalenderOpen } from "../../Store/calendarStore";
import { useEffect } from "react";

export default function TimeframeButtonOnAutomation({ timeFrame }) {
  const { setTimeframe, timeframePicked } = useCalenderOpen();

  const isActive = timeframePicked === timeFrame;
  const bgColor = isActive ? "bg-green-500" : "bg-gray-500";

  return (
    <button
      className={`${bgColor} w-[6vw] h-[25px] text-[12px] text-white font-[Roboto-reguler] rounded-sm`}
      onClick={() => {
        setTimeframe(timeFrame);
      }}
    >
      {timeFrame}
    </button>
  );
}
