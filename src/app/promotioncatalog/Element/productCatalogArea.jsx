import ProductCard from "@/app/GlobalComponent/ProductCard/productCard";
import SearchNecessary from "./SubElement/searchNecessary";
import vegetableProducts from "@/app/GlobalComponent/Data/ProductData/vegetableData";
import { meatData } from "@/app/GlobalComponent/Data/ProductData/meatData";
import fruitsData from "@/app/GlobalComponent/Data/ProductData/fruitData";
import { useCatalogHooks } from "@/app/GlobalComponent/Hooks/catalogHooks";
import FilteringPromotionButton from "./SubElement/filteringPromotionButton";
import { usePromotionFilterClick } from "@/app/GlobalComponent/Hooks/ExtraHooks.jsx/extraHooks";
import { useWindowWidth } from "@/app/GlobalComponent/Store/windowWidthStore";

export default function ProductCatalogArea() {
  const { state } = useCatalogHooks();
  const { click, setClick } = usePromotionFilterClick();
  const { windowWidth } = useWindowWidth();

  const kumpulanData = [
    vegetableProducts.map((item) => item),
    meatData.map((item) => item),
    fruitsData.map((item) => item),
  ].flat();

  const getPageSlice = (products) => {
    if (windowWidth < 1000 && windowWidth >= 819) {
      if (state.isPageActive === 1) return products.slice(0, 18);
      if (state.isPageActive === 2) return products.slice(18, 39);
      if (state.isPageActive === 3) return products.slice(36, 54);
      if (state.isPageActive === 4) return products.slice(54, 72);
      if (state.isPageActive === 5) return products.slice(72, 90);
      return products.slice(90, 108);
    }
    if (state.isPageActive === 1) return products.slice(0, 24);
    if (state.isPageActive === 2) return products.slice(24, 48);
    if (state.isPageActive === 3) return products.slice(48, 72);
    if (state.isPageActive === 4) return products.slice(72, 96);
    if (state.isPageActive === 5) return products.slice(96, 120);
    return products.slice(48, 72);
  };

  return (
    <div className="grid grid-rows-[200px_120px_auto]">
      <div className=" grid grid-cols-[60%_40%]">
        <SearchNecessary />
        <div></div>
      </div>
      <div className="flex justify-center ">
        <div className="w-[70%] grid grid-cols-4">
          <FilteringPromotionButton
            text="DISCOUNT"
            click={click}
            setClick={setClick}
          />
          <FilteringPromotionButton
            text="MEMBERSHIP"
            click={click}
            setClick={setClick}
          />
          <FilteringPromotionButton
            text="CASHBACK"
            click={click}
            setClick={setClick}
          />
          <FilteringPromotionButton
            text="FREE DELIVERY"
            click={click}
            setClick={setClick}
          />
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="xl:w-[70%] md:w-[9%] lg:w-[80%] flex flex-wrap md:gap-y-[10px] gap-x-12 xl:pl-2 lg:pl-[2%] md:pl-[6%]">
          {getPageSlice(kumpulanData)
            .filter((item) => item.promotion.type !== "none")
            .map((item) => (
              <ProductCard
                key={item.key}
                imageRef={item.imageRef}
                brand={item.brand}
                productName={item.productName}
                star={item.star}
                unit={item.unit}
                price={item.price}
                undiscountPrice={item.undiscountPrice}
                sold={item.sold}
                productKey={item.key}
                productCategory={item.category}
                supplierCertificate={item.certificate.legality}
                productType={item.type}
                productDescription={item.productDescription}
                productPromotionType={item.promotion.type}
                productPromotionValue={item.promotion.value}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
