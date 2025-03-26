import { useProcessedTotal } from "../../Store/processedTotalStore";

export default function PaymentHeader() {
  const { processedTotal } = useProcessedTotal();
  return (
    <div className="w-[80%] font-[Roboto-bold] grid grid-cols-2 text-[20px]">
      <div className="flex items-center">Total</div>
      <div className="flex justify-end items-center">
        Rp{processedTotal.toLocaleString("id-ID")},-
      </div>
    </div>
  );
}
