import ProductCard from "@/app/GlobalComponent/ProductCard/productCard";
import SearchNecessary from "./SubElement/searchNecessary";
import VegetableCart from "../../GlobalComponent/Cart/OnCatalogCart/vegetableCart";
import VegetableQuickFilter from "./SubElement/vegetableQuickFilter";
import vegetableProducts from "@/app/GlobalComponent/Data/ProductData/vegetableData";
import { useCatalogHooks } from "@/app/GlobalComponent/Hooks/catalogHooks";
import { useWindowWidth } from "@/app/GlobalComponent/Store/windowWidthStore";

export default function ProductCatalogArea() {
  const { windowWidth } = useWindowWidth();
  const { state } = useCatalogHooks();

  const getPageSlice = (products) => {
    if (windowWidth < 1000 && windowWidth >= 819) {
      if (state.isPageActive === 1) return products.slice(0, 18);
      if (state.isPageActive === 2) return products.slice(18, 36);
      if (state.isPageActive === 3) return products.slice(36, 51);
    } else if (windowWidth > 1000) {
      if (state.isPageActive === 1) return products.slice(0, 24);
      if (state.isPageActive === 2) return products.slice(24, 48);
      return products.slice(48, 72);
    }
    return [];
  };

  return (
    <div className="grid grid-rows-[250px_500px]">
      <div className=" grid grid-cols-[60%_40%]">
        <SearchNecessary />
        <div className="min-[1000px]:block hidden">
          <VegetableCart />
        </div>
      </div>
      <div className="grid grid-cols-[16%_84%] ">
        <VegetableQuickFilter />
        <div>
          <div className="flex flex-wrap gap-y-[50px] gap-x-12 max-[1000px]:gap-x-5 max-[1200px]:pl-8 min-[1200px]:pl-5">
            {getPageSlice(vegetableProducts).map((item) => (
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
        <div></div>
      </div>
    </div>
  );
}
