"use client";
import { createContext, useContext, useState } from "react";

const SideDashboardContext = createContext();

export function SideDashboardProvider({ children }) {
  const [isNavClicked, setIsNavClicked] = useState("Dashboard");
  const handleNavClicked = (nav) => {
    setIsNavClicked(nav);
  };
  return (
    <SideDashboardContext.Provider value={{ isNavClicked, handleNavClicked }}>
      {children}
    </SideDashboardContext.Provider>
  );
}

export function useSideDashboard() {
  return useContext(SideDashboardContext);
}
