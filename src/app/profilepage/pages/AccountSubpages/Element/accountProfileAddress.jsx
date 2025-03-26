import React, { useState, useEffect } from "react";
import {
  useAccountStore,
  useEditAccountStore,
} from "@/app/GlobalComponent/Store/accountStore";

export default function AccountProfileAddress() {
  const { activeAccount } = useAccountStore();
  const { edit, setEditedAddress } = useEditAccountStore();

  const [addressValue, setAddressValue] = useState("");

  useEffect(() => {
    setAddressValue(activeAccount.address || "");
  }, [activeAccount]);

  const handleChange = (event) => {
    const value = event.target.value;
    setAddressValue(value);
    setEditedAddress(value);
  };

  return (
    <div>
      <h1 className="text-[#9F9F9F] font-[Roboto-bold] text-[13px]">
        Address:
      </h1>
      <textarea
        className={`${
          edit ? "bg-[#04E824] text-white" : ""
        } lg:w-[44.5vw] md:w-[70vw] h-[30px] resize-none border border-black rounded-md pl-1 text-[12px]`}
        value={addressValue}
        disabled={!edit}
        onChange={handleChange}
      />
    </div>
  );
}
