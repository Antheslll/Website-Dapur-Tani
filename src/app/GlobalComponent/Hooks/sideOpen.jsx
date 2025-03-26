"use client";
import { createContext, useContext, useState } from "react";

const SideOpenContext = createContext();

export function SideOpenProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (bool) => {
    setIsOpen(bool);
  };
  return (
    <SideOpenContext.Provider value={{ isOpen, handleOpen }}>
      {children}
    </SideOpenContext.Provider>
  );
}

export function useSideOpen() {
  return useContext(SideOpenContext);
}
