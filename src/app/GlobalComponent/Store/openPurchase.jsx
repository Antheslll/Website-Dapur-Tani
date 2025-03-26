"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePurchase = create((set) => ({
  open: false,
  purchaseNav: (bool) => set({ open: bool }),
}));

export { usePurchase };

const usePurchaseList = create(
  persist(
    (set) => ({
      purchaseList: [],
      quantity: 1,
      use: false,

      updatePurchaseList: (items) =>
        set({ purchaseList: Array.isArray(items) ? items : [items] }),
      updateQuantity: (qty) => set({ quantity: qty }),
      updateUse: (item) => set({ use: item }),
    }),
    {
      name: "purchase-list",
      getStorage: () => localStorage,
    }
  )
);

export { usePurchaseList };
