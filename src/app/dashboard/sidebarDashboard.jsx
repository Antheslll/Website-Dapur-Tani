import DashboardNav from "./dashboardNavButton";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/app/icons/home-icon";
import { WhiteDashboardIcon } from "@/app/icons/dashboard-icon";
import InventoryIcon from "@/app/icons/inventory-icon";
import { WhiteHistoryIcon } from "@/app/icons/history-icon";
import ExpenditureIcon from "@/app/icons/expenditure-icon";
import { useSideDashboard } from "@/app/GlobalComponent/Hooks/dashboardSideContext";

export default function SidebarDashboard() {
  const { isNavClicked } = useSideDashboard();
  const { handleNavClicked } = useSideDashboard();
  return (
    <div className="w-[15%] h-[100vh] bg-[#04E824] grid grid-rows-[110px_350px] rounded-r-[50px] fixed z-10">
      <div className=" flex items-end justify-start">
        <Image
          alt="logo dapur tani"
          className="object-cover scale-[90%] w-[350px] h-[50px] -ml-2 "
          src="/logo/Dapur Tani logo.png"
          width={350}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center ">
        <div className=" grid grid-rows-[40px_40px_40px_40px_40px]">
          {NavigationDashboardData.map((items, index) => {
            const navComponent = (
              <DashboardNav
                Key={index}
                icons={items.icons}
                nav={items.nav}
                isClicked={isNavClicked}
                handleClicked={handleNavClicked}
              />
            );
            return items.link ? (
              <Link href={items.link} key={index}>
                {navComponent}
              </Link>
            ) : (
              <div key={index}>{navComponent}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const NavigationDashboardData = [
  {
    link: "/",
    icons: <HomeIcon />,
    nav: "Home",
  },
  { icons: <WhiteDashboardIcon />, nav: "Dashboard" },
  { icons: <InventoryIcon />, nav: "Inventory" },
  { icons: <WhiteHistoryIcon />, nav: "History" },
  { icons: <ExpenditureIcon />, nav: "Expenditure" },
];
