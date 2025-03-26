"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductDetails = create(
  persist(
    (set) => ({
      productDetails: [
        {
          productDetailsImage: null,
          productDetailsName: null,
          productDetailsBrand: null,
          productDetailsStar: null,
          productDetailsUnit: null,
          productDetailsPrice: 1,
          productDetailsNominal: null,
          productDetailsCategory: null,
          productDetailsCertificate: null,
          productDetailsType: null,
          productDetailsDescription: null,
          productDetailsPromotionType: null,
          productDetailsPromotionValue: null,
          productDetailsKey: null,
        },
      ],
      updateProductDetails: (item) => set({ productDetails: [item] }),
    }),
    { name: "product-details", getStorage: () => localStorage }
  )
);

export { useProductDetails };
