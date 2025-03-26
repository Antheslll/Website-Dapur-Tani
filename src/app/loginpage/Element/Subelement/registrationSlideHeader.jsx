import { useRegistrationHooks } from "@/app/GlobalComponent/Store/registationStore";

export default function RegistrationSlideHeader() {
  const { auth } = useRegistrationHooks();
  return (
    <div className="w-[90%] grid grid-cols-2 mx-[5%] my-10">
      <div>
        <h1 className="text-white font-[Roboto-bold] text-[23px] ml-2">
          Agricultural
        </h1>
      </div>
      <div className="pr-4">
        <div
          className={`w-[90px] h-[35px] border border-white rounded-3xl absolute z-60 mt-[2px] ${
            auth === true ? "ml-[26.3%]" : "ml-[12.5%]"
          } `}
        ></div>
        <RegistrationTypeButton
          registrationType="Sign Up"
          customLeftMargin="ml-[33%]"
          status={false}
        />
        <RegistrationTypeButton
          registrationType="Login"
          customLeftMargin="ml-[3.5%]"
          status={true}
        />
      </div>
    </div>
  );
}

function RegistrationTypeButton({
  registrationType,
  customLeftMargin,
  status,
}) {
  const { setAuth } = useRegistrationHooks();

  return (
    <button
      className={`w-[75px] h-[40px]  relative z-70 font-[Roboto-bold] text-white text-[13.5px]  ${customLeftMargin}`}
      onClick={() => setAuth(status)}
    >
      {registrationType}
    </button>
  );
}
