import ProductImageDisplay from "./Subelement/productImageDisplay";
import ProductInfo from "./Subelement/productInfo";

export default function ProductsDisplay() {
  return (
    <div className="grid xl:grid-cols-[40%_60%] lg:grid-cols-[38%_62%] md:grid-rows-[430px_450px]">
      <ProductImageDisplay />
      <ProductInfo />
    </div>
  );
}
