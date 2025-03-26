import { useRegistrationHooks } from "@/app/GlobalComponent/Store/registationStore";

export default function RegistrationBackground() {
  const { slide } = useRegistrationHooks();
  return (
    <div
      className="bg-[#cdcdcd] max-[899px]:w-[120%] w-[70%] max-[1200px]:h-[100vh] h-[100vh]  overflow-hidden absolute -z-10 "
      style={{ clipPath: "polygon(0% 0, 100% 0, 90% 100%, 0 100%)" }}
    >
      <img
        className="w-[200%] max-[899px]:w-[300%] h-full object-cover object-center"
        src={
          slide === false
            ? "/registration/backgroundSlide1.png"
            : "/registration/backgroundSlide2.png"
        }
      />
    </div>
  );
}
