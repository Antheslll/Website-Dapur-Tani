"use client";
import { create } from "zustand";

export const useOrderStatusStore = create((set) => ({
  status: "Payment",
  setStatus: (status) => set({ status: status }),
}));
