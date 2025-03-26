"use client";
import { useState, useEffect } from "react";

export default function NavbarNavpageStatus() {
  const [reloadStatus, setReloadStatus] = useState("Recently Refresh");
  const [openDuration, setOpenDuration] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenDuration((prev) => {
        const newDuration = prev + 1;
        return newDuration;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setReloadStatus(
      `Opened ${openDuration} minute${openDuration > 1 ? "s" : ""}`
    );
  }, [openDuration]);

  return (
    <span>
      <p className="text-[10px] my-3">{reloadStatus}</p>
    </span>
  );
}
