"use client";
import { useCatalogHooks } from "@/app/GlobalComponent/Hooks/catalogHooks";
import {
  useCartStore,
  useVegetableCartStore,
} from "@/app/GlobalComponent/Store/cartStore";
import {
  usePurchase,
  usePurchaseList,
} from "@/app/GlobalComponent/Store/openPurchase";
import { useProductDetails } from "@/app/GlobalComponent/Store/productDetailsStore";
import { AddingCartIcon } from "@/app/icons/cart-icon";

export default function ExecutionButton() {
  const { vegetableAddToCart } = useVegetableCartStore();
  const { addToAllCart } = useCartStore();
  const { dispatch } = useCatalogHooks();
  const { updatePurchaseList, quantity, updateUse } = usePurchaseList();
  const { purchaseNav } = usePurchase();
  const { productDetails } = useProductDetails();

  const handleBuyNow = () => {
    const newPurchase = [
      {
        key: productDetails[0].productDetailsKey,
        productName: productDetails[0].productDetailsName,
        imgSrc: productDetails[0].productDetailsImage,
        quantity: quantity,
        price: productDetails[0].productDetailsPrice,
        checked: true,
      },
    ];

    updatePurchaseList(newPurchase);
    purchaseNav(true);
    setTimeout(() => {
      updateUse(true);
    }, 0);
  };

  const handleClick = () => {
    addToAllCart({
      key: productDetails[0].productDetailsKey,
      productName: productDetails[0].productDetailsName,
      imgSrc: productDetails[0].productDetailsImage,
      quantity: quantity,
      price: productDetails[0].productDetailsPrice,
    });

    productDetails[0].productDetailsCategory === "Vegetable"
      ? vegetableAddToCart({
          key: productDetails[0].productDetailsKey,
          productName: productDetails[0].productDetailsName,
          imgSrc: productDetails[0].productDetailsImage,
          quantity: 1,
          price: productDetails[0].productDetailsPrice,
        })
      : "";

    dispatch({ type: "SET_ADD_TO_CART", payload: true });
  };

  return (
    <div className="w-full flex items-end">
      <div className="w-[70%] grid grid-cols-2">
        <button
          className="w-[170px] h-[45px] rounded-sm bg-[#04E824]/50 border-2 border-[#04E824] grid grid-cols-[30%_70%]"
          onClick={() => handleClick()}
        >
          <div className="flex justify-end items-center">
            <AddingCartIcon />
          </div>
          <div className="text-[#04E824] text-[13px] flex justify-start items-center font-[Roboto-reguler]">
            Add to Cart
          </div>
        </button>
        <button
          className="w-[170px] h-[45px] text-[13px] rounded-sm bg-[#04E824] text-white"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
