import Link from "next/link";
export default function FooterButton({ buttonText }) {
  return (
    <div>
      <Link href={buttonText === "Buy Now!" ? "/loginpage" : "/dashboard"}>
        <button className="bg-white text-[Roboto-reguler] w-[11vw] h-[40px] rounded-[50px] text-[1.5vw] ">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
