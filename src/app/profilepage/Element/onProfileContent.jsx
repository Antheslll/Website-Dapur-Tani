import { useProfileNavHooks } from "@/app/GlobalComponent/Hooks/profileHooks";
import AccountProfile from "../pages/AccountSubpages/account-subpage";
import FAQSubPage from "../pages/FAQSubpages/faq-subpage";
import OrderStatusSubpage from "../pages/OrderStatusSubpages/orderstatus-subpage";
import FeedbackSubPage from "../pages/FeedbackSubpages/feedback-subpage";

export default function OnProfileContent() {
  const { isNavProfile } = useProfileNavHooks();
  return (
    <div className="lg:grid lg:grid-cols-[30%_70%] w-full  md:flex md:justify-center">
      <div></div>

      {isNavProfile === "Account" ? (
        <AccountProfile />
      ) : isNavProfile === "FAQ" ? (
        <FAQSubPage />
      ) : isNavProfile === "Order Status" ? (
        <OrderStatusSubpage />
      ) : (
        <FeedbackSubPage />
      )}
    </div>
  );
}
