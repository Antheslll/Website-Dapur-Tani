import { LoginButtonSide } from "@/app/GlobalComponent/Button/RegistrationButton/navbarButtonLogin";
import { SignUpButtonSide } from "@/app/GlobalComponent/Button/RegistrationButton/navbarButtonSignUp";

export default function RegistrationButtonOnSidebar() {
  return (
    <div className="w-[100%] h-[50px] flex justify-center items-center">
      <div className=" grid grid-cols-2 gap-5">
        <LoginButtonSide />
        <SignUpButtonSide />
      </div>
    </div>
  );
}
