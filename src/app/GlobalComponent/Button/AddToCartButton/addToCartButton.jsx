import { useCatalogHooks } from "../../Hooks/catalogHooks";
import { useHovered } from "../../Hooks/ExtraHooks.jsx/extraHooks";

export default function AddToCart({
  productName,
  imageRef,
  productKey,
  price,
  menuHover,
}) {
  const { isHovered, setIsHovered } = useHovered();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const { dispatch } = useCatalogHooks();
  const handleAddToCart = (e, productKey, productName, imageRef, price) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: "ADD_TO_CART",
      payload: true,
    });
    dispatch({
      type: "SET_PRODUCT_KEY",
      payload: productKey,
    });
    dispatch({
      type: "SET_PRODUCT_PRICE",
      payload: price,
    });

    dispatch({
      type: "SET_PRODUCT_NAME",
      payload: productName,
    });

    dispatch({
      type: "SET_PRODUCT_IMAGE",
      payload: imageRef || null,
    });
  };

  return (
    <>
      <button
        className={`w-[90%] h-[25px] text-[12px] -my-2 font-[Roboto-bold] transition-colors duration-300 m-auto ${
          isHovered === true ? " bg-black text-[#04e824]" : "bg-[#04e824] "
        } `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) =>
          handleAddToCart(e, productKey, productName, imageRef, price)
        }
      >
        Add To Cart
      </button>
    </>
  );
}
