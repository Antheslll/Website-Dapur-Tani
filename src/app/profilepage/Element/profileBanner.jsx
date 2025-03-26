import { WhiteDashboardIcon } from "@/app/icons/dashboard-icon";
import HomeIcon from "@/app/icons/home-icon";
import { useRouter } from "next/navigation";

export default function ProfileBanner() {
  return (
    <div>
      <div className="w-full  bg-black overflow-hidden relative z-10">
        <img
          src="/profile/backgroundprofile.png"
          alt="profile background"
          className="w-full object-cover object-center -mt-[100px] relative z-0"
        />
        <div className="w-full h-full bg-black/50 absolute inset-0 z-20  ">
          <div className="w-[200px] h-[40px] grid grid-cols-2 ml-[10%] mt-[10px]">
            <ProfileNavPageButton icon={<HomeIcon />} nav="Home" />
            <ProfileNavPageButton
              icon={<WhiteDashboardIcon />}
              nav="Dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ProfileNavPageButton = ({ icon, nav }) => {
  const router = useRouter();
  const handlePage = () => {
    nav === "Home"
      ? router.push("/")
      : nav === "Dashboard"
      ? router.push("/dashboard")
      : "";
  };
  return (
    <div>
      <button
        className="w-[115px] text-white text-[12px] font-[Roboto-Reguler] grid grid-cols-[25px_60px]"
        onClick={handlePage}
      >
        <div className="scale-90 ">{icon}</div>
        <div className="mt-1 text-left">{nav}</div>
      </button>
    </div>
  );
};
