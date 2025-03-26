"use client";
import { useEffect } from "react";
import { useAccountList } from "../GlobalComponent/Store/accountStore";
import Registration from "./Registration";

export default function LoginPage() {
  const { startAccount } = useAccountList();
  useEffect(() => {
    startAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Registration />
    </div>
  );
}
