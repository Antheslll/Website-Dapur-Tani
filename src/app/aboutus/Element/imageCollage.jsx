import Image from "next/image";
import Dot from "./dotGenerating";
export default function ImageCollage() {
  return (
    <div>
      <div className="w-[70%] h-[380px] relative my-[125px]">
        <Image
          src="/aboutus/photo-visi-misi.png"
          width={381}
          height={326}
          alt="foto peternakan"
          className="object-cover scale-[90%] rounded-xl relative z-10 -ml-9 -mt-7 "
        />

        <Image
          src="/aboutus/photo-visi-misi-kecil.png"
          width={195}
          height={195}
          alt="foto peternakan"
          className="object-cover scale-[90%] rounded-xl relative z-20 -mt-[100px] ml-[50%]"
        />
        <div className="w-[130px] h-[80px] bg-white rounded-md shadow-sm shadow-black text-center relative z-30 -my-[150px] ml-[33%]">
          <h6 className="leading-[20px] pt-5">
            <span className="text-[#04E824] font-[Roboto-bold] text-[30px] ">
              5+
            </span>
            <br />
            <span className="font-[Roboto-bold] text-[11px]">
              Years of Experience
            </span>
          </h6>
        </div>
        <div className="-mt-[30px] -ml-[30%] scale-[30%]  z-0 absolute ">
          <Dot />
        </div>
      </div>
    </div>
  );
}
