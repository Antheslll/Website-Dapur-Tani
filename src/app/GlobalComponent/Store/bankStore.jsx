"use client";
import { create } from "zustand";

export const useBankHooks = create((set) => ({
  bankPicked: "bca",
  methodPicked: "debit",
  setBankPicked: (bank) => set({ bankPicked: bank }),
  setBankMethod: (method) => set({ methodPicked: method }),
}));

export const useOpenPayment = create((set) => ({
  paymentOpen: false,
  warn: "",
  setOpenPayment: (action) => set({ paymentOpen: action }),
  setWarn: (warn) => set({ warn: warn }),
}));
