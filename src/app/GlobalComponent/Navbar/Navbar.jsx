"use client";
import NavbarLogo from "./element/navbarLogo.jsx";
import SearchBar from "./element/navbarSearchBar.jsx";
import NavbarTime from "./element/navbarTime.jsx";
import NavbarSimpleNav from "./element/navbarIcons.jsx";
import NavbarRegistration from "./element/navbarRegistration.jsx";
import MenuButton from "./element/navbarMenuButton.jsx";
import NavbarNavpageCatalog from "./element/navbarToCatalog.jsx";
import NavbarNavpageStatus from "./element/navbarStatus.jsx";
import { useSideOpen } from "@/app/GlobalComponent/Hooks/sideOpen.jsx";
import { useAccountStore } from "../Store/accountStore.jsx";
import NavbarProfile from "./navbarProfile.jsx";
function Navbar({ handleCartOpen }) {
  const { handleOpen } = useSideOpen();
  const { activeAccount } = useAccountStore();
  return (
    <>
      <nav>
        <div className="grid md:grid-cols-[15%_69%_17%]  xl:grid-cols-[20%_48%_5%_16%_11%] lg:grid-cols-[20%_50%_15%_15%] relative z-40 h-17 bg-white">
          <div className="min-[375px]:hidden min-[668px]:block">
            <NavbarLogo />
          </div>
          <SearchBar />
          <div className="xl:flex  hidden ">
            <NavbarTime />
          </div>
          <div className="lg:flex xl:flex hidden">
            <NavbarSimpleNav handleCartOpen={handleCartOpen} />
          </div>
          <div className="flex justify-start lg:pl-[2vw] xl:pl-[0] ">
            {activeAccount.email ? <NavbarProfile /> : <NavbarRegistration />}
          </div>
        </div>

        <hr />
        {/* dibawah ini bagian nav page */}
        <div className="grid min-[820px]:grid-cols-[20%_70%_10%] min-[667px]:grid-cols-[10%_90%] h-12 bg-white">
          <MenuButton handleOpen={handleOpen} />
          <NavbarNavpageCatalog />
          <div className="min-[820px]:block hidden">
            <NavbarNavpageStatus />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
