import CEOIcon from "@/app/icons/ceo-icon";
import OnlineIcon from "@/app/icons/online-icon";
import Image from "next/image";
export default function SmallProfileCard() {
  return (
    <div className="bg-white w-[80%] h-[15vh] shadow-md shadow-gray-600 rounded-3xl grid grid-cols-[30%_70%]">
      <div className="flex justify-center items-center">
        <div className="w-[100px] h-[100px] rounded-[50%]">
          <Image
            className="rounded-[50%]"
            src="/logo/profile/LOGO .png"
            width={100}
            height={100}
            alt="Profile logo"
          />
        </div>
      </div>
      <div className="grid grid-rows-[5vh_2.5vh_2vh] pt-[2vh] pl-[2vw]">
        <span>
          <h1 className="font-[Roboto-bold] text-[20px]">Anthony Liem</h1>
          <p className="text-[13px] text-gray-400 -mt-2 ">@anthonyliem</p>
        </span>
        <span className="w-[70%]  grid grid-cols-[14%_70%]">
          <span className="scale-75">
            <CEOIcon />
          </span>
          <span className="text-[11px] pt-[4px]">
            <p className="font-[Roboto-Reguler]">Customer</p>
          </span>
        </span>
        <span className="w-[70%]  grid grid-cols-[14%_70%]  ">
          <span className="scale-75">
            <OnlineIcon />
          </span>
          <span className="text-[11px] pt-[4px]">
            <p className="font-[Roboto-Reguler] text-[#cdcdcd]">Online</p>
          </span>
        </span>
      </div>
    </div>
  );
}
