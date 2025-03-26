"use client";
import { createContext, useContext, useState } from "react";

const ProfileNavContext = createContext();

export default function ProfileNavProvider({ children }) {
  const [isNavProfile, setIsNavProfile] = useState("Account");

  const handleNavProfile = (subProfile) => {
    setIsNavProfile(subProfile);
  };

  return (
    <ProfileNavContext.Provider value={{ isNavProfile, handleNavProfile }}>
      {children}
    </ProfileNavContext.Provider>
  );
}

export function useProfileNavHooks() {
  return useContext(ProfileNavContext);
}
