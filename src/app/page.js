"use client";
import Navbar from "./GlobalComponent/Navbar/Navbar.jsx";
import SlideShow from "./HomePage/SlideShowSections/slideshow.jsx";
import BrowseByCategory from "./HomePage/browseByCategory.jsx";
import FeaturedBrands from "./HomePage/featuredBrands.jsx";
import BestSeller from "./HomePage/BestSellerSections/bestSeller.jsx";
import Sidebar from "./GlobalComponent/sideBar/sidebar.jsx";
import CartAll from "./GlobalComponent/Cart/AllCart/cart.jsx";
import { useCart } from "./GlobalComponent/Hooks/allTypeHooks.jsx";
import Footer from "./GlobalComponent/footer/footer.jsx";
import Calender from "./GlobalComponent/Calender/calendarMain.jsx";
import SearchAutomation from "./GlobalComponent/SearchAutomation/searchAutomation.jsx";
import Purchase from "./GlobalComponent/Purchase/purchase.jsx";
import PaymentMethod from "./GlobalComponent/paymentmethod/paymentmethod.jsx";
export default function Home() {
  const { isCartOpen, handleCartOpen } = useCart();

  return (
    <>
      <div className="w-[100%] h-[2000px]">
        <Sidebar handleCartOpen={handleCartOpen} />
        <aside>
          <Calender />
          <SearchAutomation />
          <Purchase />
          <PaymentMethod />
          <CartAll isCartOpen={isCartOpen} handleCartOpen={handleCartOpen} />
        </aside>
        <header>
          <Navbar handleCartOpen={handleCartOpen} />
        </header>
        <main>
          <section>
            <SlideShow />
          </section>
          <section>
            <BrowseByCategory />
          </section>
          <section>
            <FeaturedBrands />
          </section>
          <section>
            <BestSeller />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
