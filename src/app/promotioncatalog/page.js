"use client";
import Navbar from "../globalComponent/Navbar/Navbar";
import ProductCatalogArea from "./Element/productCatalogArea";
import NavigationInCatalog from "./Element/navigationInCatalog";
import Footer from "../GlobalComponent/footer/footer";
import Filtering from "../GlobalComponent/FilterPopUp/filter";
import CartBox from "../GlobalComponent/AddToCartAnimation/addToCartBox";
import CartAll from "../GlobalComponent/Cart/AllCart/cart";
import Sidebar from "../GlobalComponent/sideBar/sidebar";
import { useCart } from "../GlobalComponent/Hooks/allTypeHooks";
import Purchase from "../GlobalComponent/Purchase/purchase";
import PaymentMethod from "../GlobalComponent/paymentmethod/paymentmethod";
import PromotionCatalogHeader from "./Element/promotionCatalogHeader";
import Calender from "../GlobalComponent/Calender/calendarMain";

export default function PromotionCatalog() {
  const { isCartOpen, handleCartOpen } = useCart();
  return (
    <div className="w-full grid grid-rows-[125px_550px_2570px_200px_400px]">
      <Sidebar handleCartOpen={handleCartOpen} />
      <Calender />
      <CartAll isCartOpen={isCartOpen} handleCartOpen={handleCartOpen} />
      <Purchase />
      <PaymentMethod />
      <Navbar handleCartOpen={handleCartOpen} />
      <Filtering header="Vegetable Filter" />
      <PromotionCatalogHeader />
      <ProductCatalogArea />
      <NavigationInCatalog />
      <Footer />
      <CartBox />
    </div>
  );
}
