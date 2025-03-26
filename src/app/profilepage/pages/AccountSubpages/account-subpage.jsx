import AccountInput from "./Element/accountInput";
import AccountProfileAddress from "./Element/accountProfileAddress";
import AccountProfileHeader from "./Element/accountProfileHeader";

export default function AccountProfile() {
  return (
    <div className="lg:w-[70%] md:w-[80%] ml-[3.3%] grid grid-rows-[60px_60px_60px_80px]">
      <AccountProfileHeader />
      <div className="grid grid-cols-2 ">
        <AccountInput data="First Name:" type="text" />
        <AccountInput data="Last Name:" type="text" />
      </div>
      <div className="grid grid-cols-2 ">
        <AccountInput data="UserName:" type="text" />
        <AccountInput data="Password:" type="password" />
      </div>
      <AccountProfileAddress />
    </div>
  );
}
