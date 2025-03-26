import { useBankHooks } from "../../Store/bankStore";
import MethodButton from "./Subelement/methodButton";

export default function MethodPicker() {
  const { bankPicked, setBankPicked } = useBankHooks();
  return (
    <>
      <div className="w-[100%] grid grid-rows-[20px_45px]">
        <div className="text-[14px] text-[#767676]">Method</div>
        <div className="flex justify-center">
          <div className="w-[100%]  grid grid-cols-4 border border-black rounded-xl">
            <MethodButton
              name="bca"
              bankPicked={bankPicked}
              setBankPicked={setBankPicked}
              style="border-r-2"
              img="/paymentmethod/bca.jpg"
            />
            <MethodButton
              name="bri"
              bankPicked={bankPicked}
              setBankPicked={setBankPicked}
              style="border-r-2"
              img="/paymentmethod/bri.jpg"
            />
            <MethodButton
              name="mandiri"
              bankPicked={bankPicked}
              setBankPicked={setBankPicked}
              style="border-r-2"
              img="/paymentmethod/mandiri.jpg"
            />
            <MethodButton
              name="ovo"
              bankPicked={bankPicked}
              setBankPicked={setBankPicked}
              img="/paymentmethod/ovo.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
