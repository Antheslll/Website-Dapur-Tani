import ExecutionButton from "./executionButton";
import OrderDetailSection from "./ProductInfoElement/orderDetailsSection";
import ProductNameOnInfo from "./ProductInfoElement/productNameOnInfo";
import ProductPriceOnInfo from "./ProductInfoElement/productPriceOnInfo";
import ProductRatingOnInfo from "./ProductInfoElement/productRatingOnInfo";

export default function ProductInfo() {
  return (
    <div className="pt-[55px]">
      <div className="w-[90%] grid grid-rows-[70px_30px_70px_130px_50px] md:pl-[12vw] lg:pl-[4vw]">
        <ProductNameOnInfo />
        <ProductRatingOnInfo />
        <ProductPriceOnInfo />
        <OrderDetailSection />
        <ExecutionButton />
      </div>
    </div>
  );
}
