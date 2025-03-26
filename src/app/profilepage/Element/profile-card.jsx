import CEOIcon from "@/app/icons/ceo-icon";
import OnlineIcon from "@/app/icons/online-icon";
import Image from "next/image";
export default function ProfileCard() {
  return (
    <div className="bg-white w-[20%] h-[350px] absolute z-40 -mt-[500px] ml-[10%] shadow-md shadow-gray-600 rounded-3xl grid grid-rows-[150px_90px_30px_30px]">
      <div className="flex justify-center pt-[30px]">
        <div className="w-[100px] h-[100px] bg-black rounded-[50%]">
          <Image
            className="rounded-[50%]"
            src="/logo/profile/LOGO .png"
            width={100}
            height={100}
            alt="Profile logo"
          />
        </div>
      </div>
      <div>
        <h1 className="font-[Roboto-bold] pl-[20%] text-[20px]">
          Anthony Liem
        </h1>
        <p className="text-[13px] text-gray-400 pl-[20%] -mt-2 ">
          @anthonyliem
        </p>
      </div>
      <div className="w-[70%]  grid grid-cols-[14%_70%] ml-[14%] ">
        <div className="scale-75">
          <CEOIcon />
        </div>
        <div className="text-[11px] pt-[4px]">
          <p className="font-[Roboto-Reguler]">Customer</p>
        </div>
      </div>
      <div className="w-[70%]  grid grid-cols-[14%_70%] ml-[14%] ">
        <div className="scale-75">
          <OnlineIcon />
        </div>
        <div className="text-[11px] pt-[4px]">
          <p className="font-[Roboto-Reguler] text-[#cdcdcd]">Online</p>
        </div>
      </div>
    </div>
  );
}
