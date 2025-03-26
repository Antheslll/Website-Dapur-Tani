import ConfirmationButton from "../Button/ConfirmationButton/confirmationButton";
import { useBankHooks, useOpenPayment } from "../Store/bankStore";
import MethodOption from "./Element/methodOption";
import MethodPicker from "./Element/methodPicker";
import DebityPaymentCard, { QrisPaymentQR } from "./Element/paymentContent";
import PaymentHeader from "./Element/paymentHeader";

export default function PaymentMethod() {
  const { methodPicked, bankPicked } = useBankHooks();
  const { paymentOpen } = useOpenPayment();
  return (
    <div
      className={`${
        paymentOpen === false ? "hidden" : ""
      } w-full h-full bg-black/50 fixed z-50 flex justify-center md:pt-[30vh] lg:pt-[10vh]`}
    >
      <div className="bg-white fixed md:w-[50%] lg:w-[32%] h-[400px]  grid grid-rows-[70px_80px_170px_50px]">
        <div className="flex justify-center">
          <PaymentHeader />
        </div>
        <div className="flex justify-center w-[80%] mx-[10%]">
          <MethodPicker />
        </div>
        <div className="w-[80%] mx-[10%] border-2 border-black rounded-lg grid grid-rows-[30px_120px]">
          <MethodOption />
          {methodPicked === "debit" && bankPicked != "" ? (
            <DebityPaymentCard />
          ) : methodPicked === "qr" && bankPicked != "" ? (
            <QrisPaymentQR />
          ) : (
            ""
          )}
        </div>
        <div className="w-[80%] mx-[10%] flex justify-center items-end">
          <ConfirmationButton
            buttonWidth="w-[100px]"
            confirmationText="OKE"
            buttonKey="paymeths"
          />
        </div>
      </div>
    </div>
  );
}
