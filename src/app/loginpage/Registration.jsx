import { LoginForm } from "./Element/LoginForm";
import { SignUpForm } from "./Element/SignUpForm";
import RegistrationBackground from "./Element/registrationBackground";
import RegistrationSlideImage from "./Element/registrationSlideImage";
import { useRegistrationHooks } from "../GlobalComponent/Store/registationStore";

export default function Registration() {
  const { auth } = useRegistrationHooks();
  return (
    <div className="w-full h-[100vh] bg-[#3f4b3b] absolute -z-20">
      <RegistrationBackground />
      <div className="bg-white w-[70%] lg:h-[470px] xl:h-[85vh] mx-[15%] lg:mt-[30px] xl:mt-[7vh] rounded-3xl relative z-20 lg:grid lg:grid-cols-[55%_45%]">
        <div className="lg:block hidden xl:w-[55vw] lg:w-[60vw] h-[730px] lg:scale-x-[0.6] lg:-ml-[9vw] xl:scale-y-[0.64] lg:scale-y-[0.6] xl:scale-x-[0.7] xl:-ml-[5vw] custom-clip lg:-mt-[130px] xl:-mt-[20vh]">
          <RegistrationSlideImage />
        </div>
        {auth === true ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}
