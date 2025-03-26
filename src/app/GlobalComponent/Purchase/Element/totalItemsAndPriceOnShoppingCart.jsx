export default function TotalItemsAndPriceOnShoppingCart({
  totalItems,
  totalPrices,
}) {
  return (
    <div className="flex justify-between items-end  ">
      <div className="font-[Roboto-bold] text-[10px]">ITEMS {totalItems}</div>
      <div className="text-[10px] font-[Roboto-bold]">{totalPrices}</div>
    </div>
  );
}
