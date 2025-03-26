"use client";
import Navbar from "../globalComponent/Navbar/Navbar";
import ProductsDisplay from "./Element/productDisplay";
import ProductSpecification from "./Element/productSpecification";
import ProductDescription from "./Element/productDescription";
import CartBox from "../GlobalComponent/AddToCartAnimation/addToCartBox";
import CartAll from "../GlobalComponent/Cart/AllCart/cart.jsx";
import Sidebar from "../GlobalComponent/sideBar/sidebar";
import { useCart } from "../GlobalComponent/Hooks/allTypeHooks";
import Purchase from "../GlobalComponent/Purchase/purchase";
import PaymentMethod from "../GlobalComponent/paymentmethod/paymentmethod";
import Footer from "../GlobalComponent/footer/footer";

export default function ProductDetails() {
  const { isCartOpen, handleCartOpen } = useCart();
  return (
    <div className="grid md:grid-rows-[150px_900px_400px_400px_400px] lg:grid-rows-[150px_500px_400px_400px_400px] xl:grid-rows-[150px_530px_450px_470px_400px]">
      <div className="absolute">
        <Sidebar handleCartOpen={handleCartOpen} />
      </div>
      <div>
        <Navbar handleCartOpen={handleCartOpen} />
      </div>
      <Purchase />
      <PaymentMethod />
      <CartAll isCartOpen={isCartOpen} handleCartOpen={handleCartOpen} />
      <ProductsDisplay />
      <ProductSpecification />
      <ProductDescription />
      <Footer />
      <CartBox />
    </div>
  );
}
