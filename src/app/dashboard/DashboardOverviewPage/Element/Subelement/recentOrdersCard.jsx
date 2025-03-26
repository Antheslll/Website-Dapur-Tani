export default function RecentOrdersCard({
  isHoverOrder,
  invoice,
  type,
  purchasedOn,
  amount,
  status,
}) {
  return (
    <div className="flex justify-center">
      <div
        className={`h-[60px] rounded-xl border-2 border-black shadow-sm shadow-black grid grid-cols-5 mt-3 ${
          isHoverOrder === true ? "w-[95%] " : "w-full"
        }`}
      >
        <div className="flex justify-center items-center">{invoice}</div>
        <div className="flex justify-center items-center">{type}</div>
        <div className="flex justify-center items-center">{purchasedOn}</div>
        <div className="flex justify-center items-center">Rp{amount},-</div>
        <div className="flex justify-center items-center">{status}</div>
      </div>
    </div>
  );
}
