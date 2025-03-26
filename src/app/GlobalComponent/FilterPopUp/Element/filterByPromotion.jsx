import UnPickedButton from "../../Button/PickedButton/unPickedButton";

export default function FilterByPromotion() {
  return (
    <div className="grid grid-rows-[40px_100px]">
      <div className="pl-10 pt-2 font-[Roboto-bold] text-[15px] text-[#9F9F9F]">
        <h2>Promotion</h2>
      </div>
      <div className="pl-10 w-[57%] grid grid-rows-[30px_30px]">
        <div className="grid grid-cols-2">
          <UnPickedButton
            textPicked="DISCOUNT"
            forHooks="Discount"
            objective="promotion"
          />
          <UnPickedButton
            textPicked="MEMBERSHIP"
            forHooks="Membership"
            objective="promotion"
          />
        </div>
        <div className="grid grid-cols-2">
          <UnPickedButton
            textPicked="CASHBACK"
            forHooks="Cashback"
            objective="promotion"
          />
          <UnPickedButton
            textPicked="FREE DELIVERY"
            forHooks="Free Delivery"
            objective="promotion"
          />
        </div>
      </div>
    </div>
  );
}
