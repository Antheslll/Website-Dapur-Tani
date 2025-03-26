import { useInvoiceStore } from "@/app/GlobalComponent/Store/historyInvoiceStore";

export default function HistoryList({
  isListHover,
  handleListHover,
  invoice,
  type,
  purchasedOn,
  amount,
  status,
  product,
}) {
  const { setInvoiceOpen, setInvoiceContent } = useInvoiceStore();
  const handleSavedInvoiceInfo = (
    invoice,
    type,
    purchasedOn,
    amount,
    status
  ) => {
    setInvoiceContent({
      invoice: invoice,
      type: type,
      purchasedOn: purchasedOn,
      amount: amount,
      status: status,
      // product: product,
    });
  };
  return (
    <tr
      className={`h-[40px] cursor-pointer text-[15px] grid-cols-5 text-center  font-[Roboto] grid  border-b border-black ${
        isListHover === invoice ? "bg-[#04E824] text-white " : ""
      }`}
      onClick={() => {
        setInvoiceOpen(true);
        handleSavedInvoiceInfo(
          invoice,
          type,
          purchasedOn,
          amount,
          status,
          product
        );
      }}
      onMouseEnter={() => {
        handleListHover(invoice);
      }}
      onMouseLeave={() => {
        handleListHover(null);
      }}
    >
      <td className="flex justify-center items-center">{invoice}</td>
      <td className="flex justify-center items-center">{type}</td>
      <td className="flex justify-center items-center">{purchasedOn}</td>
      <td className="flex justify-center items-center">Rp{amount},-</td>
      <td className="flex justify-center items-center">{status}</td>
    </tr>
  );
}
