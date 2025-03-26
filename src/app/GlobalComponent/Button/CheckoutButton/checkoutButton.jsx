import { useOpenPayment } from "../../Store/bankStore";
import { usePurchase, usePurchaseList } from "../../Store/openPurchase";
import { useProcessedTotal } from "../../Store/processedTotalStore";

export default function CheckoutButton() {
  const { shippingPrice } = useProcessedTotal();
  const { setOpenPayment, setWarn, warn } = useOpenPayment();
  const { purchaseNav } = usePurchase();

  const handleToPayment = () => {
    shippingPrice !== 0 ? setOpenPayment(true) : warnToPicked();
    shippingPrice !== 0
      ? setTimeout(() => {
          purchaseNav(false);
        }, 0)
      : "";
  };
  const warnToPicked = () => {
    setOpenPayment(false);
    setWarn("You must picked the Shipping Service!");

    setTimeout(() => {
      setWarn("");
    }, 5000);
  };
  return (
    <>
      <div className="flex justify-center items-end  ">
        <button
          className="w-full h-[30px] bg-[#04E824] text-white font-[Roboto-bold] text-[11px]"
          onClick={handleToPayment}
        >
          CHECKOUT
        </button>
      </div>
      <p className="text-red-600 text-[10px]">{warn}</p>
    </>
  );
}
