import { useRegistrationHooks } from "@/app/GlobalComponent/Store/registationStore";
import {
  SlideshowIconNext,
  SlideshowIconPrev,
} from "@/app/icons/registrationSlideshow-icon";

export default function AnyProfile() {
  const { slide, setSlide } = useRegistrationHooks();
  return (
    <div className="w-[100%] grid grid-cols-[55%_30%] mx-[5%]">
      <div className=" grid grid-cols-[20%_80%]">
        <div className="w-[60px] h-[60px] rounded-[50%] bg-blue-900 overflow-hidden">
          <img
            src={
              slide === true
                ? "/registration/logo2.jpg"
                : "/registration/logo1.jpg"
            }
          />
        </div>
        <div className="pt-1">
          <h1 className="text-white font-[Roboto-bold] text-[23px]">
            {slide === true ? "Prime Cuts" : "Agrinova"}
          </h1>
          <p className="text-white text-[12px]">
            {slide === true ? "Meat Supplier" : "Vegetable Supplier"}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-[33%_33%] pl-[25%]">
        <div onClick={() => setSlide(false)} className="cursor-pointer">
          <SlideshowIconPrev />
        </div>
        <div className="ml-[40%] cursor-pointer" onClick={() => setSlide(true)}>
          <SlideshowIconNext />
        </div>
      </div>
    </div>
  );
}
