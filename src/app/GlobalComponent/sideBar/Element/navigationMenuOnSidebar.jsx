"use client";
import { useState } from "react";
import { IconDashboardMenu } from "@/app/icons/dashboard-icon";
import { SidebarButton } from "./sidebarButton";
import HistoryIcon from "@/app/icons/history-icon";
import { IconCartMenu } from "@/app/icons/cart-icon";
import CalenderIcon from "@/app/icons/calender";
import Link from "next/link";
import { useAccountStore } from "../../Store/accountStore";
import WarnRegistered from "./warnRegistered";
import { useSideDashboard } from "../../Hooks/dashboardSideContext";
import { useCalenderOpen } from "../../Store/calendarStore";
import { useSideOpen } from "../../Hooks/sideOpen";
export default function NavigationMenuOnSidebar({ handleCartOpen }) {
  const { activeAccount } = useAccountStore();
  const [registeredRestricted, setRegisteredRestricted] = useState(false);
  const { handleNavClicked } = useSideDashboard();
  const { setCalenderOpen } = useCalenderOpen();
  const { handleOpen } = useSideOpen();
  const handleRegisteredRestricted = () => {
    if (!activeAccount.email) {
      setRegisteredRestricted(true);

      setTimeout(() => {
        setRegisteredRestricted(false);
      }, 3000);
    }
  };
  return (
    <>
      <WarnRegistered registeredRestricted={registeredRestricted} />
      <div className="flex items-center">
        <div className="w-[90%] h-[185px] bg-[#04e824] bg-opacity-50 mx-2 my-1 grid grid-rows-[35px_35px_35px_35px_35px_35px] rounded-xl ">
          <div className=" my-1 pl-3 pt-1">
            <p className="text-[15px] font-[Roboto-bold]">Menu</p>
          </div>
          <Link
            href={activeAccount.email ? "/dashboard" : "#"}
            onClick={() => {
              handleRegisteredRestricted();
              handleNavClicked("Dashboard");
            }}
          >
            <div>
              <SidebarButton comp={<IconDashboardMenu />} menu="Dashboard" />
            </div>
          </Link>
          <Link
            href={activeAccount.email ? "/dashboard" : "#"}
            onClick={() => {
              handleRegisteredRestricted();
              handleNavClicked("History");
            }}
          >
            <div>
              <SidebarButton comp={<HistoryIcon />} menu="History" />
            </div>
          </Link>

          <div
            onClick={() => {
              handleCartOpen(true);
              handleOpen(false);
            }}
          >
            <SidebarButton comp={<IconCartMenu />} menu="Cart" />
          </div>

          <div
            onClick={() => {
              setCalenderOpen(true);
              handleOpen(false);
            }}
          >
            <SidebarButton comp={<CalenderIcon />} menu="Calender" />
          </div>
        </div>
      </div>
    </>
  );
}
