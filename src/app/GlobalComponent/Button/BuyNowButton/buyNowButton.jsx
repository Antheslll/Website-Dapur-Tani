import Link from "next/link";
export default function BuyNowButton({ type }) {
  return (
    <Link href={type === "vegetable" ? "/vegetablecatalog" : "/meatcatalog"}>
      <button className="w-[120px] h-8 font-bold opacity-100 bg-white text-[10px] text-black my-20 hover:bg-[#04e824] duration-300">
        Buy Now!
      </button>
    </Link>
  );
}
