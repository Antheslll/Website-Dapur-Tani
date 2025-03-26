import CustomerServiceIcon from "@/app/icons/customerService-icon";
import { SidebarButton } from "./sidebarButton";
import Link from "next/link";
export function CustomerServiceNavigation() {
  return (
    <div>
      <div className="w-[90%] h-[35px] grid grid-rows-[30px] bg-[#04e824] bg-opacity-50 mx-2 my-1 rounded-xl">
        <Link href="/customerservice">
          <div>
            <SidebarButton
              comp={<CustomerServiceIcon />}
              menu="Customer Service"
              customStyle="rounded-xl h-[30px] "
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
