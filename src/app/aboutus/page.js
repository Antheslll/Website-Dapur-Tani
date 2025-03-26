"use client";
import Navbar from "../globalComponent/Navbar/Navbar";
import {
  FreshnessIcon,
  SustainabilityIcon,
  WelfareIcon,
} from "../icons/ourvalue-icon";
import Footer from "../GlobalComponent/footer/footer";
import Sidebar from "../GlobalComponent/sideBar/sidebar";
import AbouUsBanner from "./Element/aboutUsBanner";
import WhoAreWeSection from "./Element/whoAreWeSection";
import ImageCollage from "./Element/imageCollage";
import ValueCards from "./Element/valueCards";
import ImpactSection from "./Element/impactSection";
import CartAll from "../GlobalComponent/Cart/AllCart/cart";
import Calender from "../GlobalComponent/Calender/calendarMain";
import Purchase from "../GlobalComponent/Purchase/purchase";
import { useCart } from "../GlobalComponent/Hooks/allTypeHooks";

export default function AboutUsPage() {
  const { isCartOpen, handleCartOpen } = useCart();
  return (
    <div className="w-full grid grid-rows-[130px_450px_500px_300px_500px_400px]">
      <div>
        <Navbar handleCartOpen={handleCartOpen} />
      </div>
      <CartAll isCartOpen={isCartOpen} handleCartOpen={handleCartOpen} />
      <Calender />
      <Purchase />
      <div className="absolute">
        <Sidebar handleCartOpen={handleCartOpen} />
      </div>

      <div className="w-full h-[450px] bg-black relative ">
        <AbouUsBanner />
      </div>
      <div className="grid grid-cols-[60%_40%] ">
        <WhoAreWeSection />
        <ImageCollage />
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] grid grid-cols-3 gap-3">
          {ValueCardsData.map((data, index) => (
            <ValueCards key={index} {...data} />
          ))}
        </div>
      </div>
      <div>
        <ImpactSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const ValueCardsData = [
  {
    icon: <FreshnessIcon />,
    value: "Freshness",
    textValue: (
      <>
        Using natural ingredients directly from local
        <br />
        farmers.
      </>
    ),
    // margin: "ml-[35%]",
  },
  {
    icon: <SustainabilityIcon />,
    value: "Sustainability",
    textValue: (
      <>
        Supporting an environmentally friendly food
        <br />
        ecosystem.
      </>
    ),
    // margin: "ml-[15%]",
  },
  {
    icon: <WelfareIcon />,
    value: "Welfare",
    textValue: (
      <>
        Building fair partnerships for farmers and
        <br />
        communities.
      </>
    ),
    // margin: "-ml-[5%]",
  },
];
