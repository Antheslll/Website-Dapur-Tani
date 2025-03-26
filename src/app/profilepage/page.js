"use client";
import ProfileNavProvider from "../GlobalComponent/Hooks/profileHooks";
import ProfileBanner from "./Element/profileBanner";
import NavigationOnProfile from "./Element/navigationOnProfile";
import OnProfileContent from "./Element/onProfileContent";
import ProfileCard from "./Element/profile-card";
import Invoice from "../dashboard/DashboardHistoryPage/dashboardHistoryToInvoice";
import SmallProfileCard from "./Element/small-profile-card";
export default function ProfilePage() {
  return (
    <ProfileNavProvider>
      <Invoice />
      <div className="w-full h-[590px] fixed grid lg:grid-rows-[150px_435px] ">
        <ProfileBanner />
        <div>
          <div className="w-full h-full bg-white grid md:grid-rows-[60px_250px_300px] lg:grid-rows-[8vh_30vh] relative z-30 ">
            <NavigationOnProfile />
            <div className="md:flex justify-center pt-[5vh] lg:hidden ">
              <SmallProfileCard />
            </div>
            <OnProfileContent />
          </div>
          <div className="lg:block hidden">
            <ProfileCard />
          </div>
        </div>
      </div>
    </ProfileNavProvider>
  );
}
