"use client";
import NavbarTime from "@/app/GlobalComponent/Navbar/Element/navbarTime";
import DapurTaniLogoOnCS from "./Subelement/dapurTaniLogoOnCS";
import NavigationButtonCS from "./Subelement/navigationButtonOnCS";
import NavbarRegistration from "@/app/GlobalComponent/Navbar/Element/navbarRegistration";

export default function NavbarCS() {
  return (
    <div className="w-full grid grid-cols-[15%_30%_38%_7%_10%] max-[900px]:grid-cols-[15%_30%_30%_15%_10%]">
      <DapurTaniLogoOnCS />
      <NavigationButtonCS />
      <div></div>
      <div className=" flex justify-center items-center">
        <NavbarTime />
      </div>
      <div className=" flex justify-center items-center">
        <NavbarRegistration />
      </div>
    </div>
  );
}
