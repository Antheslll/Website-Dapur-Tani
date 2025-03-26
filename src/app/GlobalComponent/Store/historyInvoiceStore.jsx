"use client";
import { create } from "zustand";
export const useInvoiceStore = create((set) => ({
  invoiceContent: [],
  invoiceOpen: false,
  invoiceType: "",
  setInvoiceContent: (content) => set({ invoiceContent: content }),
  setInvoiceOpen: (bool) => set({ invoiceOpen: bool }),
  setInvoiceType: (type) => set({ invoiceType: type }),
}));
