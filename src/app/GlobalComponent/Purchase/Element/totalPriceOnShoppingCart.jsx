import { useProcessedTotal } from "../../Store/processedTotalStore";

export default function TotalPriceOnShoppingCart({ totalPrices }) {
  const { processedTotal } = useProcessedTotal();
  return (
    <div className="flex justify-between items-end border-t border-black  ">
      <div className="font-[Roboto-bold] text-[10px]">Total</div>
      <div className="text-[10px] font-[Roboto-bold]">{`Rp${
        processedTotal === 0
          ? totalPrices.toLocaleString("id-ID")
          : processedTotal.toLocaleString("id-ID")
      },-`}</div>
    </div>
  );
}
