import DapurTaniLogo from "../../../icons/dapurtani-icon.jsx";
import Link from "next/link";
export default function NavbarLogo() {
  return (
    <Link href="/" aria-label="Home">
      <div className="relative  md:scale-x-110">
        <DapurTaniLogo />
      </div>
    </Link>
  );
}
