import QuantityController from "../QuantityController/quantityController";
import ImageOnProductList from "../Cart/AllCart/SubElement/imageOnProductList";
import ProductNameOnProductList from "../Cart/AllCart/SubElement/productNameOnProductList";
import ProductPriceOnProductList from "../Cart/AllCart/SubElement/productPriceOnProductList";
import TotalProductPriceOnProductList from "../Cart/AllCart/SubElement/totalProductPriceOnProductList";
import { useCartStore } from "../Store/cartStore";

export default function ProductList({
  itemKey,
  imgSrc,
  productName,
  quantity,
  type,
  price,
}) {
  const { allCart, updateAllCartChecked } = useCartStore();
  const formattedTotalPrice = (price * quantity).toLocaleString("id-ID");
  const currentItem = allCart.find((item) => item.key === itemKey) || {};
  const isChecked = currentItem.checked ?? false;
  const handleChange = () => {
    updateAllCartChecked({ key: itemKey, checked: !isChecked });
  };
  return (
    <tr className="grid grid-cols-[4%_42%_18%_18%_18%]">
      <td className="pt-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className={`${type === "purchase" ? "hidden" : ""}`}
        />
      </td>
      <td className=" grid grid-cols-[20%_80%] h-[50px] ">
        <ImageOnProductList src={imgSrc} />
        <ProductNameOnProductList
          itemKey={itemKey}
          name={productName}
          type={type}
        />
      </td>
      <td>
        <QuantityController
          itemKey={itemKey}
          formattedTotalPrice={formattedTotalPrice}
          type={type}
        />
      </td>
      <td className=" flex justify-center items-center">
        <ProductPriceOnProductList
          price={`Rp${price.toLocaleString("id-ID")}`}
          // price={price}
        />
      </td>
      <td className=" flex justify-center items-center">
        <TotalProductPriceOnProductList price={formattedTotalPrice} />
      </td>
    </tr>
  );
}
