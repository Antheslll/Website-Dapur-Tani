import { useBankHooks } from "../../Store/bankStore";

export default function DebityPaymentCard() {
  const { bankPicked } = useBankHooks();
  return (
    <div className="w-[80%] h-[110px] rounded-xl border border-black mx-[10%] flex items-center justify-center">
      <div className="w-[96%] h-[40px] border border-black flex justify-center items-center text-[25px] font-bold">
        {bankPicked === "bca"
          ? "BCA-XXXXXX"
          : bankPicked === "bri"
          ? "BRI-XXXXXX"
          : bankPicked === "mandiri"
          ? "MDR-XXXXXX"
          : bankPicked === "ovo"
          ? "OVO-XXXXXX"
          : ""}
      </div>
    </div>
  );
}

export function QrisPaymentQR() {
  const { bankPicked } = useBankHooks();
  return (
    <div className="w-[80%] h-[110px] rounded-xl border border-black mx-[10%] flex items-center justify-center">
      <div className="w-[100px] h-[100px]">
        <img src="/paymentmethod/qr.png" className="w-[100px]" />

        <p className="text-center font-[Roboto-bold] mt-1">
          {bankPicked.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
