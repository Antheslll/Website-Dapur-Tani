import { useBankHooks } from "@/app/GlobalComponent/Hooks/ExtraHooks.jsx/extraHooks";

export default function MethodButton({
  style,
  img,
  name,
  bankPicked,
  setBankPicked,
}) {
  return (
    <div
      className={`${
        bankPicked === name ? "bg-[#04E824]" : ""
      } pt-[7.5px] rounded-xl`}
    >
      <div
        className={` h-[30px] flex justify-center items-center ${style} border-black`}
        onClick={() => {
          setBankPicked(name);
        }}
      >
        <img src={img} className="w-[20px]" />
      </div>
    </div>
  );
}
