import { useCartStore } from "@/app/GlobalComponent/Store/cartStore";
import { usePurchaseList } from "@/app/GlobalComponent/Store/openPurchase";

export default function TotalPriceOnCart({ type }) {
  const { purchaseList } = usePurchaseList();
  const { allCart } = useCartStore();

  const total =
    allCart.length != 0
      ? allCart
          .filter((item) => item.checked === true)
          .map((item) => item.quantity * item.price)
          .reduce((acc, cur) => acc + cur, 0)
      : 0;

  return (
    <div className="w-[80%] grid grid-cols-2 ">
      <div className="flex items-end pl-2">
        <h1 className="font-[Roboto-bold] text-[25px]">Total</h1>
      </div>
      <div className="items-end font-[Roboto-bold] text-[20px] flex justify-end pr-2">
        <span>Rp {total.toLocaleString("id-ID")},-</span>
      </div>
    </div>
  );
}
