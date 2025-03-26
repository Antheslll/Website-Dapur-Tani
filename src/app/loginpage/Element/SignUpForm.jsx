import LogSignButton from "@/app/GlobalComponent/Button/RegistratonFormButton/logSignButton";
import RegistrationFormHeader from "./Subelement/loginFormHeader";
import RegistrationFormLanguagePicker from "./Subelement/loginFormLanguagePicker";
import RegistrationFormInput from "@/app/GlobalComponent/Input/RegistrationFormInput";

export function SignUpForm() {
  return (
    <div className=" w-[90%]  h-[500px] max-[899px]:pt-[5vh] max-[899px]:pl-[5vw] pt-10 max-[899px]:grid-rows-[80px_70px_300px_50px] grid grid-rows-[60px_70px_230px_50px]">
      <RegistrationFormLanguagePicker />
      <RegistrationFormHeader />
      <div>
        <RegistrationFormInput type="text" placeholder="First Name" />
        <RegistrationFormInput type="text" placeholder="Last Name" />
        <RegistrationFormInput type="email" placeholder="Email" />
        <RegistrationFormInput type="password" placeholder="Password" />
        <RegistrationFormInput type="text" placeholder="Address" />
      </div>
      <div>
        <LogSignButton type="Sign Up" />
      </div>
    </div>
  );
}
