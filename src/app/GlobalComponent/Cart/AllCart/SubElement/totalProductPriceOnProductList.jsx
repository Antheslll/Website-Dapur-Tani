export default function TotalProductPriceOnProductList({ price }) {
  return <span className="text-black text-[9px] ">Rp {price || ""},-</span>;
}
