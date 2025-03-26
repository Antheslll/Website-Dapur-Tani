import TelephoneIcon from "@/app/icons/telephone-icon";
import RegisterHookButton from "./registerButtonHook";

export default function WhoAreWeSection() {
  return (
    <div className=" grid grid-rows-[130px_110px_45px] max-[900px]:grid-rows-[70px_130px_45px] pt-[140px]">
      <div className=" pl-[10%]">
        <h1 className="text-[35px] max-[900px]:text-[23px] max-[1200px]:text-[33px] font-[Roboto-bold] text-[#04E824] leading-tight ">
          Providing Fresh, Local, and <br />
          <span className="text-[#00620E]">
            Sustainable Farm-to-Table Delights
          </span>
        </h1>
      </div>
      <div className="bg-white pl-[10%] pr-[16%] text-justify leading-tight">
        <p className="text-[14px]">
          Dapur Tani is here to serve quality food from local farmers,
          supporting farmers with fair partnerships, and implementing
          environmentally friendly practices. We believe that the best food
          comes from fresh and natural ingredients, processed with innovation to
          bring authentic flavors directly to your table. 🌿
        </p>
      </div>
      <div className="pl-[10%]">
        <div className="w-[42%] max-[1200px]:w-[50%] max-[900px]:w-[60%] grid grid-cols-2">
          <div>
            <RegisterHookButton hookText="Register" />
          </div>
          <div className="grid grid-cols-[30px_120px] pl-5  ">
            <div className="flex justify-center items-center">
              <TelephoneIcon />
            </div>
            <div className="leading-tight">
              <h6 className="text-[#00620E] text-[15px]">Contact us</h6>
              <span className="text-[#04E824] text-[13px]">
                (+62)-8111267867
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
