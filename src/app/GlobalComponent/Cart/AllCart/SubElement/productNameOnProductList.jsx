import {
  useCartStore,
  useFruitCartStore,
  useMeatCartStore,
  useVegetableCartStore,
} from "@/app/GlobalComponent/Store/cartStore";

export default function ProductNameOnProductList({ name, itemKey, type }) {
  const { vegetableRemoveCart } = useVegetableCartStore();
  const { removeAllCart } = useCartStore();

  const { fruitRemoveCart } = useFruitCartStore();
  const { meatRemoveCart } = useMeatCartStore();
  const handleRemove = (itemKey) => {
    vegetableRemoveCart({ key: itemKey });
    fruitRemoveCart({ key: itemKey });
    meatRemoveCart({ key: itemKey });

    removeAllCart({ key: itemKey });
  };

  return (
    <div className="grid grid-rows-[20px_10px]">
      <div>
        <p
          className={`${
            type === "purchase" ? "md:text-[0.35rem] lg:text-[7px]" : ""
          } text-[7px] font-[Roboto-reguler] pl-1 pr-3`}
        >
          {name}
        </p>
      </div>
      <div className=" text-red-700 pl-1">
        <u
          className="text-[9px] cursor-pointer"
          onClick={() => handleRemove(itemKey)}
        >
          Remove
        </u>
      </div>
    </div>
  );
}
