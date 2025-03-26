import { useProcessedTotal } from "../../Store/processedTotalStore";

export default function OrderSettingsPicked({ settings }) {
  const {
    updateProcessedTotal,
    updateShippingPrice,
    updatePromotionPrice,
    selectedShipping,
    selectedPromotion,
    updateSelectedShipping,
    updateSelectedPromotion,
  } = useProcessedTotal();

  const handleShipping = (e) => {
    const shippingPicked = e.target.value;
    let shippingValue =
      shippingPicked === "Reguler-Rp10.000,-"
        ? 10000
        : shippingPicked === "Express-Rp30.000,-"
        ? 30000
        : shippingPicked === "Economy-5.000,-"
        ? 5000
        : 0;
    updateShippingPrice(shippingValue);
    updateSelectedShipping(shippingPicked);

    setTimeout(() => {
      const { total, promotionPrice, shippingPrice } =
        useProcessedTotal.getState();
      updateProcessedTotal(total + shippingPrice + promotionPrice);
    }, 0);
  };
  const handlePromotion = (e) => {
    const promotionPicked = e.target.value;
    let promotionValue = promotionPicked === "Voucher-Rp10.000" ? -10000 : 0;

    updatePromotionPrice(promotionValue);
    updateSelectedPromotion(promotionPicked);
    setTimeout(() => {
      const { total, promotionPrice, shippingPrice } =
        useProcessedTotal.getState();
      updateProcessedTotal(total + shippingPrice + promotionPrice);
    }, 0);
  };
  return (
    <div className="grid grid-rows-[20px_40px] pt-[30px] ">
      <div className="font-[Roboto-bold] text-[10px]">{settings}</div>
      <div>
        {settings === "Shipping" ? (
          <select
            className="w-full h-[25px] text-[10px] font-[Roboto-reguler]"
            onChange={(e) => handleShipping(e)}
            value={selectedShipping}
          >
            <option>-</option> <option>Reguler-Rp10.000,-</option>{" "}
            <option>Express-Rp30.000,-</option>
            <option>Economy-5.000,-</option>{" "}
          </select>
        ) : (
          <select
            className="w-full h-[25px] text-[10px] font-[Roboto-reguler]"
            onChange={(e) => handlePromotion(e)}
            value={selectedPromotion}
          >
            <option>-</option> <option>Voucher-Rp10.000</option>{" "}
          </select>
        )}
      </div>
    </div>
  );
}
