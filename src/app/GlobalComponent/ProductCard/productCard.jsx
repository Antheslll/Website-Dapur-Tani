import AddToCart from "@/app/GlobalComponent/Button/AddToCartButton/addToCartButton";
import Star0, { Star1, Star2, Star3, Star4, Star5 } from "@/app/icons/star";
import Link from "next/link";
import {
  Cashback,
  Discount,
  FreeDelivery,
  Membership,
} from "@/app/icons/promotionType-icon";
import { useMenuHover } from "../Hooks/ExtraHooks.jsx/extraHooks";
import { useProductDetails } from "../Store/productDetailsStore";
export default function ProductCard({
  price,
  imageRef,
  productKey,
  brand,
  productName,
  star,
  unit,
  sold,
  productCategory,
  supplierCertificate,
  productType,
  productDescription,
  productPromotionType,
  productPromotionValue,
  undiscountPrice,
}) {
  const { menuHover, setMenuHover } = useMenuHover();
  const { updateProductDetails } = useProductDetails();

  const handleMouseEnter = () => {
    setMenuHover(productName);
  };
  const handleMouseLeave = () => {
    setMenuHover(null);
  };

  const handleProductCardClick = (
    price,
    imageRef,
    brand,
    productName,
    star,
    unit,
    productCategory,
    supplierCertificate,
    productType,
    productDescription,
    productPromotionType,
    productPromotionValue,
    productKey,
    undiscountPrice
  ) => {
    updateProductDetails({
      productDetailsImage: imageRef,
      productDetailsName: productName,
      productDetailsBrand: brand,
      productDetailsStar: star,
      productDetailsUnit: unit,
      productDetailsPrice: price,
      productDetailsCategory: productCategory,
      productDetailsCertificate: supplierCertificate,
      productDetailsType: productType,
      productDetailsDescription: productDescription,
      productDetailsPromotionType: productPromotionType,
      productDetailsPromotionValue: productPromotionValue,
      productDetailsKey: productKey,
      productDetailsUndiscountPrice: undiscountPrice,
    });
  };

  return (
    <div className="h-[330px]">
      <Link href="/productdetails">
        <div
          className={`w-[180px]  grid grid-rows-[150px_17px_30px_20px_30px_20px_35px_30px] shadow-lg shadow-green-900/50 rounded-lg  ${
            menuHover === productName
              ? "max-h-[330px] transition-[max-height] duration-500 ease-in-out"
              : "max-h-[300px] transition-[max-height] duration-500 ease-in-out"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() =>
            handleProductCardClick(
              price,
              imageRef,
              brand,
              productName,
              star,
              unit,
              productCategory,
              supplierCertificate,
              productType,
              productDescription,
              productPromotionType,
              productPromotionValue,
              productKey,
              undiscountPrice
            )
          }
        >
          <div className="w-full h-[150px] relative">
            {productPromotionType === "none" ? (
              ""
            ) : (
              <div
                className={`w-[30px] h-[40px] ml-[130px] absolute z-20 custom-path flex justify-center items-center bg-[#04E824]`}
              >
                <span className="text-[7px] text-center text-white">
                  <div>
                    {productPromotionType === "Discount" ? (
                      <Discount />
                    ) : productPromotionType === "Membership" ? (
                      <Membership />
                    ) : productPromotionType === "Free Delivery" ? (
                      <FreeDelivery />
                    ) : (
                      <Cashback />
                    )}
                  </div>
                </span>
              </div>
            )}
            <img
              src={
                imageRef ? imageRef : "/Proucts/vegetable/fresh/asparagus.jpg"
              }
              className="object-cover w-full h-[150px] rounded-lg"
            />
          </div>
          <div className="">
            <p className="font-[Roboto-bold] text-[13px] mx-2 my-1 ">{brand}</p>
          </div>
          <div className="">
            <p className="text-[9px] p-2 text-blue-700 ">{productName}</p>
          </div>
          <div className="">
            <p className=" my-5 mx-2 ">
              {star === 0 ? (
                <Star0 />
              ) : star === 1 ? (
                <Star1 />
              ) : star === 2 ? (
                <Star2 />
              ) : star === 3 ? (
                <Star3 />
              ) : star === 4 ? (
                <Star4 />
              ) : (
                <Star5 />
              )}
            </p>
          </div>
          <div>
            <p className="my-4 text-[8px] mx-2">{unit}</p>
          </div>
          <div className="">
            <p className="text-[15px] px-2 text-green-700">
              {`Rp${price.toLocaleString("id-ID")},-`}
            </p>
          </div>
          <div className="">
            <p className="text-[10px] px-2 my-1 font-bold text-[#cdcdcd]">
              {sold}
            </p>
          </div>
          <div
            className={`flex justify-center transition-opacity duration-500 ease-in-out ${
              menuHover === productName
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <AddToCart
              productName={productName}
              imageRef={imageRef}
              productKey={productKey}
              price={price}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
