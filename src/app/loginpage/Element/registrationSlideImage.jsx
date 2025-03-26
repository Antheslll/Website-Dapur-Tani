import AnyProfile from "./Subelement/anyProfile";
import RegistrationSlideHeader from "./Subelement/registrationSlideHeader";
import { useRegistrationHooks } from "@/app/GlobalComponent/Store/registationStore";

export default function RegistrationSlideImage() {
  const { slide } = useRegistrationHooks();

  return (
    <>
      <img
        className="min-[1201px]:w-[200%] max-[1200px]:w-[90vw]  h-full object-cover object-center absolute z-30"
        src={
          slide === false
            ? "/registration/backgroundSlide1.png"
            : "/registration/backgroundSlide2.png"
        }
      />
      <div className="w-[630px] lg:h-[134vh] h-[730px] bg-black/60 custom-clip relative z-40 grid grid-rows-[50px_570px_70px]">
        <RegistrationSlideHeader />
        <div></div>
        <AnyProfile />
      </div>
    </>
  );
}
