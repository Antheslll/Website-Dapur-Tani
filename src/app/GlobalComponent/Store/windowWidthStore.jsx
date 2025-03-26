"use client";
import { create } from "zustand";

export const useWindowWidth = create((set) => {
  const updateWidth = () => set({ windowWidth: window.innerWidth });

  if (typeof window !== "undefined") {
    window.addEventListener("resize", updateWidth);
  }

  return {
    windowWidth: window.innerWidth,
    setWindowWidth: updateWidth,
  };
});
