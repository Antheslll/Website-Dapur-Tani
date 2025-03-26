"use client";
import { create } from "zustand";

const useProcessedTotal = create((set) => ({
  processedTotal: 0,
  shippingPrice: 0,
  promotionPrice: 0,
  total: 0,
  selectedShipping: "",
  selectedPromotion: "",
  updateProcessedTotal: (update) => set({ processedTotal: update }),
  updateShippingPrice: (update) => set({ shippingPrice: update }),
  updatePromotionPrice: (update) => set({ promotionPrice: update }),
  updateTotal: (update) => set({ total: update }),
  updateSelectedShipping: (selected) => set({ selectedShipping: selected }),
  updateSelectedPromotion: (selected) => set({ selectedPromotion: selected }),
}));

export { useProcessedTotal };
