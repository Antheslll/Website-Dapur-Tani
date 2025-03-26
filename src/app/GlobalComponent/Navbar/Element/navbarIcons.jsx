import IconHelp from "../../../icons/help-icon.jsx";
import IconCart from "../../../icons/cart-icon.jsx";
import IconDashboard from "../../../icons/dashboard-icon.jsx";
import Link from "next/link";
export default function NavbarSimpleNav({ handleCartOpen }) {
  return (
    <nav className="m-auto gap-4 grid grid-cols-[30%_30%_30%] ">
      <button aria-label="Help">
        <Link href="/customerservice" aria-label="Customer Service">
          <IconHelp />
        </Link>
      </button>

      <button
        aria-label="Cart Open"
        onClick={() => {
          handleCartOpen(true);
        }}
        className="cursor-pointer"
      >
        <IconCart />
      </button>
      <button aria-label="Dashboard">
        <Link href="/dashboard" aria-label="Dashboard">
          <IconDashboard />
        </Link>
      </button>
    </nav>
  );
}
