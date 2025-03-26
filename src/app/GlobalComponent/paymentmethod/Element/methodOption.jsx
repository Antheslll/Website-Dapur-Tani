import DebitIcon from "@/app/icons/debit-icon";
import QRIcon from "@/app/icons/qr-icon";
import { useBankHooks } from "../../Store/bankStore";

export default function MethodOption() {
  const { methodPicked, setBankMethod } = useBankHooks();
  return (
    <div className="flex justify-end pt-[5px]">
      <div className="w-[15%] h-[15px] gap-1 grid grid-cols-[15px_15px] ">
        <div
          className={`w-[15px] h-[15px] border border-black rounded-sm flex justify-center items-center ${
            methodPicked === "qr" ? "bg-[#04E824]" : ""
          }`}
          onClick={() => setBankMethod("qr")}
        >
          <QRIcon />
        </div>
        <div
          className={`w-[15px] h-[15px] border border-black rounded-sm flex justify-center items-center ${
            methodPicked === "debit" ? "bg-[#04E824]" : ""
          }`}
          onClick={() => setBankMethod("debit")}
        >
          <div className="scale-[90%]">
            <DebitIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
