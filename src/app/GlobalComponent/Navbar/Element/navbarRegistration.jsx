import LoginButton from "../../Button/RegistrationButton/navbarButtonLogin";
import SignUpButton from "../../Button/RegistrationButton/navbarButtonSignUp";
export default function NavbarRegistration() {
  return (
    <div className=" grid grid-rows-[50%_50%]">
      <LoginButton />
      <SignUpButton />
    </div>
  );
}
