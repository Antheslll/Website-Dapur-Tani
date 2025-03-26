import React, { useState, useEffect } from "react";
import {
  useAccountStore,
  useEditAccountStore,
} from "@/app/GlobalComponent/Store/accountStore";

export default function AccountInput({ data, type }) {
  const {
    edit,
    setEditedFirstName,
    setEditedLastName,
    setEditedUsername,
    setEditedPassword,
  } = useEditAccountStore();
  const { activeAccount } = useAccountStore();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (data === "First Name:") {
      setInputValue(activeAccount.firstName || "");
    } else if (data === "Last Name:") {
      setInputValue(activeAccount.lastName || "");
    } else if (data === "UserName:") {
      setInputValue(
        `${activeAccount.firstName || ""} ${activeAccount.lastName || ""}`
      );
    } else {
      setInputValue(activeAccount.password || "");
    }
  }, [activeAccount, data]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (data === "First Name:") {
      setEditedFirstName(value);
    } else if (data === "Last Name:") {
      setEditedLastName(value);
    } else if (data === "UserName:") {
      setEditedUsername(value);
    } else {
      setEditedPassword(value);
    }
  };

  return (
    <div>
      <h1 className="text-[#9F9F9F] font-[Roboto-bold] text-[13px]">{data}</h1>
      <input
        type={type === "password" ? (edit ? "text" : "password") : type}
        className={`${
          edit ? "bg-[#04E824] text-white" : ""
        } lg:w-[20vw] md:w-[30vw] h-[25px] border border-black rounded-md pl-1 text-[12px]`}
        value={inputValue}
        disabled={!edit}
        onChange={handleChange}
      />
    </div>
  );
}
