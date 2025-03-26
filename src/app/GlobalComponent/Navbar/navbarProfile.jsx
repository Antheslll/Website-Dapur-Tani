import {
  ProfileIconShortCut,
  ProfileIconShortCutWhite,
} from "@/app/icons/profile-icon";
import SignOutIcon, { SignOutIconWhite } from "@/app/icons/signout-icon";
import { useShortcut } from "../Store/shorcutStore";
import { useAccountStore } from "../Store/accountStore";
import { useRouter } from "next/navigation";
import { useRegistrationHooks } from "../Store/registationStore";
import Image from "next/image";
export default function NavbarProfile() {
  const {
    shortcutOpen,
    setActionShortcut,
    setHoveringProfileShortcut,
    setHoveringSignOutShortcut,
    hoveringProfileShortcut,
    hoveringSignOutShortcut,
  } = useShortcut();
  const { activeAccountUpdate } = useAccountStore();
  const { setAuth } = useRegistrationHooks();
  const router = useRouter();
  const goToProfile = () => {
    router.push("/profilepage");
  };
  const handleSignOut = (e) => {
    e.stopPropagation();
    router.push("/loginpage");
    setAuth(true);
    setActionShortcut(false);
    setHoveringSignOutShortcut(false);
    activeAccountUpdate({});
  };
  return (
    <div className="pt-[15px] cursor-pointer ">
      {/* h-[60px] */}
      <nav
        className={`absolute w-[125px]  rounded-[10px] border-2 border-black ${
          shortcutOpen
            ? "grid grid-rows-[50px_35px_35px] h-[108px]"
            : "h-[60px]"
        } bg-white`}
        onClick={() => setActionShortcut(true)}
        onMouseLeave={() => setActionShortcut(false)}
        aria-label="User menu"
      >
        <div className="  grid grid-cols-[75px_50px] ">
          <div className="pr-1">
            <span className="text-[9px] font-[Roboto-bold] flex justify-end mt-[15px]">
              Anthony Liem
            </span>
            <br />
            <span className="text-[8px] flex justify-end -mt-[25px]">
              Customer
            </span>
          </div>
          <div className={`pt-[8px] `}>
            <div className="w-[40px] h-[40px] bg-purple-500 rounded-[50%]">
              <Image
                className="rounded-[50%]"
                src="/logo/profile/LOGO .png"
                width={40}
                height={40}
                alt="Profile logo"
              />
            </div>
          </div>
        </div>
        {shortcutOpen ? (
          <ul>
            <li>
              <button
                className={`w-[121px] grid grid-cols-[30px_95px] border-b-2 border-t-2 border-black ${
                  hoveringProfileShortcut ? "bg-[#04E824]" : ""
                }`}
                onClick={() => goToProfile()}
                aria-label="Go to Profile"
              >
                <span className="flex justify-center items-center">
                  {hoveringProfileShortcut ? (
                    <ProfileIconShortCutWhite />
                  ) : (
                    <ProfileIconShortCut />
                  )}
                </span>
                <span
                  className={`${
                    hoveringProfileShortcut === true ? "text-white " : ""
                  } flex items-center text-[12px]`}
                  onMouseEnter={() => setHoveringProfileShortcut(true)}
                  onMouseLeave={() => setHoveringProfileShortcut(false)}
                >
                  Profile
                </span>
              </button>
            </li>
            <li>
              <button
                className={`w-[121px] h-[32px] grid grid-cols-[30px_95px] rounded-b-[10px] ${
                  hoveringSignOutShortcut ? "bg-[#04E824]" : ""
                }`}
                onClick={(e) => handleSignOut(e)}
                aria-label="Sign out"
              >
                <span className="flex justify-center items-center">
                  {hoveringSignOutShortcut ? (
                    <SignOutIconWhite />
                  ) : (
                    <SignOutIcon />
                  )}
                </span>
                <span
                  className={`${
                    hoveringSignOutShortcut === true ? "text-white " : ""
                  } flex items-center text-[12px] `}
                  onMouseEnter={() => setHoveringSignOutShortcut(true)}
                  onMouseLeave={() => setHoveringSignOutShortcut(false)}
                  aria-label="Sign out"
                >
                  Sign Out
                </span>
              </button>
            </li>
          </ul>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
}
