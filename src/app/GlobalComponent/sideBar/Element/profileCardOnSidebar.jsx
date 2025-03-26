"use client";
import { useState } from "react";
import Image from "next/image";

import ExitIcon from "@/app/icons/exit-icon";
import ProfileIcon from "@/app/icons/profile-icon";
import Link from "next/link";
import { useAccountStore } from "../../Store/accountStore";
import WarnRegistered from "./warnRegistered";

export default function ProfileCardOnSidebar({ handleOpen }) {
  const { activeAccount } = useAccountStore();
  const [registeredRestricted, setRegisteredRestricted] = useState(false);

  const handleRegisteredRestricted = () => {
    setRegisteredRestricted(true);
    setTimeout(() => {
      setRegisteredRestricted(false);
    }, 3000);
  };

  return (
    <>
      <WarnRegistered registeredRestricted={registeredRestricted} />
      <div className="w-[90%] border-b-2 border-black ml-[5%] flex items-center">
        <div className="w-full h-[50px] bg-[#04e824] bg-opacity-50  my-2 grid grid-cols-[22%_70%_8%] rounded-xl ">
          <Link
            href={activeAccount.email ? "/profilepage" : "#"}
            onClick={
              activeAccount.email
                ? undefined
                : (e) => {
                    e.preventDefault();
                    handleRegisteredRestricted();
                  }
            }
          >
            <div className="flex justify-center items-center  w-full h-[50px]">
              {activeAccount.email ? (
                <div className="w-[35px] h-[35px] bg-purple-500 rounded-[50%]">
                  <Image
                    className="rounded-[50%]"
                    src="/logo/profile/LOGO .png"
                    width={35}
                    height={35}
                    alt="Profile logo"
                  />
                </div>
              ) : (
                <ProfileIcon />
              )}
            </div>
          </Link>
          <Link
            href={activeAccount.email ? "/profilepage" : "#"}
            onClick={
              activeAccount.email
                ? undefined
                : (e) => {
                    e.preventDefault();
                    handleRegisteredRestricted();
                  }
            }
          >
            <div className="pt-[10px]">
              <p className="font-[verdana] -my-3 font-bold text-[14px] ">
                <span className="text-[7px] -my-[1px]">Hello</span>
                <br />
                {activeAccount.email
                  ? `${activeAccount.firstName} `
                  : "Guest123"}
              </p>
            </div>
          </Link>

          <div className="my-2 -mx-1">
            <div
              className="cursor-pointer"
              onClick={() => {
                handleOpen(false);
              }}
            >
              <ExitIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
