import { useCalenderOpen } from "../../Store/calendarStore";

export function SidebarButton({ comp, menu, customStyle }) {
  return (
    <button
      className={`w-full ${customStyle ? "" : "h-full"} ${
        menu === "Customer Service" ? "h-[35px]" : ""
      } font-[Roboto-bold] text-[11px] grid grid-cols-[20%_80%] hover:bg-[#04E824] ${customStyle}`}
    >
      <div className="m-auto scale-75">{comp}</div>
      <div>
        <p className="text-left py-[10px]">{menu}</p>
      </div>
    </button>
  );
}
