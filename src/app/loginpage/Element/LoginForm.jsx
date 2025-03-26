import ContactUsLogo from "./Subelement/contactUsLogo";
import RegistrationFormHeader from "./Subelement/loginFormHeader";
import RegistrationFormLanguagePicker from "./Subelement/loginFormLanguagePicker";
import LoginInputArea from "./Subelement/loginInputArea";
import LoginOptions from "./Subelement/loginOptions";

export function LoginForm() {
  return (
    <>
      <div className=" w-[90%] h-[500px] pt-10 max-[899px]:pt-[5vh] max-[899px]:pl-[5vw] grid grid-rows-[60px_80px_130px_100px_40px] max-[899px]:grid-rows-[80px_100px_170px_150px_40px]">
        <RegistrationFormLanguagePicker />
        <RegistrationFormHeader />
        <LoginInputArea />
        <LoginOptions />
        <ContactUsLogo />
      </div>
    </>
  );
}
