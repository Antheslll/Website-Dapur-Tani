"use client";
import { useSideOpen } from "@/app/GlobalComponent/Hooks/sideOpen";
import ProfileCardOnSidebar from "./Element/profileCardOnSidebar";
import NavigationMenuOnSidebar from "./Element/navigationMenuOnSidebar";
import { CustomerServiceNavigation } from "./Element/customerServiceNavigation";
import RegistrationButtonOnSidebar from "./Element/registrationButtonOnSidebar";

const Sidebar = ({ handleCartOpen }) => {
  const { isOpen } = useSideOpen();
  const { handleOpen } = useSideOpen();

  return (
    <>
      <div
        className={`w-full cursor-pointer ${
          isOpen === true ? "" : "hidden"
        } absolute`}
      >
        <div
          className="w-full h-full bg-black/50 fixed z-50 grid lg:grid-cols-[20%_80%] md:grid-cols-[30%_70%]"
          onClick={() => {
            handleOpen(false);
          }}
        >
          <div
            className="w-full bg-white rounded-r-3xl pt-2 grid grid-rows-[85px_230px_130px_60px]"
            onClick={(e) => e.stopPropagation()}
          >
            <ProfileCardOnSidebar handleOpen={handleOpen} />
            <NavigationMenuOnSidebar handleCartOpen={handleCartOpen} />

            <CustomerServiceNavigation />
            <RegistrationButtonOnSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
