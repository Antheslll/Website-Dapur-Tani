import { useProductDetails } from "@/app/GlobalComponent/Store/productDetailsStore";

export default function ProductNameOnInfo() {
  const { productDetails } = useProductDetails();
  return (
    <div>
      <h1 className="font-[Roboto-bold] text-[1.5rem]   ">
        {productDetails[0].productDetailsName}
      </h1>
    </div>
  );
}
