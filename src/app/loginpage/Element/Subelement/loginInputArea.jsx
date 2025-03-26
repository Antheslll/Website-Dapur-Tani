import RegistrationInput from "@/app/GlobalComponent/Input/RegistrationFormInput";

export default function LoginInputArea() {
  return (
    <div>
      <RegistrationInput objective="login" type="text" placeholder="Email" />
      <RegistrationInput
        objective="login"
        type="password"
        placeholder="Password"
      />

      <p className="text-[8px]  text-[#04e824]  ml-[67%]  ">
        <u>Forgot Password?</u>
      </p>

      <div className="w-full h-[10px] grid grid-cols-[45%_10%_45%] mt-6">
        <div className="w-[15%] h-[1px] bg-[#6E6E6E] ml-[85%] -mt-1"></div>
        <div>
          <p className="text-center text-[10px] text-[#6E6E6E] -mt-3">or</p>
        </div>
        <div className="w-[15%] h-[1px] bg-[#6E6E6E] -mt-1"></div>
      </div>
    </div>
  );
}
