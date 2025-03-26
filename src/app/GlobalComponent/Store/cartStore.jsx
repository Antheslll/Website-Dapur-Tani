"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useVegetableCartStore = create(
  persist(
    (set) => ({
      vegetableCart: [],
      vegetableAddToCart: (item) =>
        set((state) => {
          const isDuplicate = state.vegetableCart.some(
            (cartItem) => cartItem.key === item.key
          );

          if (isDuplicate) {
            return state;
          }

          return { vegetableCart: [...state.vegetableCart, item] };
        }),
      vegetableUpdateCart: (updateItem) =>
        set((state) => ({
          vegetableCart: state.vegetableCart.map((item) =>
            item.key === updateItem.key
              ? { ...item, quantity: updateItem.quantity }
              : item
          ),
        })),
      vegetableRemoveCart: (removeItem) =>
        set((state) => {
          const updatedCart = state.vegetableCart.filter(
            (item) => item.key !== removeItem.key
          );
          return { vegetableCart: updatedCart };
        }),
    }),

    {
      name: "vegetable-cart-storage",
      getStorage: () => localStorage,
    }
  )
);
export { useVegetableCartStore };

const useFruitCartStore = create(
  persist(
    (set) => ({
      fruitCart: [],
      fruitAddToCart: (item) =>
        set((state) => {
          const isDuplicate = state.fruitCart.some(
            (cartItem) => cartItem.key === item.key
          );

          if (isDuplicate) {
            return state;
          }

          return { fruitCart: [...state.fruitCart, item] };
        }),
      fruitUpdateCart: (updateItem) =>
        set((state) => ({
          fruitCart: state.fruitCart.map((item) =>
            item.key === updateItem.key
              ? { ...item, quantity: updateItem.quantity }
              : item
          ),
        })),
      fruitRemoveCart: (removeItem) =>
        set((state) => {
          const updatedCart = state.fruitCart.filter(
            (item) => item.key !== removeItem.key
          );
          return { fruitCart: updatedCart };
        }),
    }),

    {
      name: "fruit-cart-storage",
      getStorage: () => localStorage,
    }
  )
);
export { useFruitCartStore };

const useMeatCartStore = create(
  persist(
    (set) => ({
      meatCart: [],
      meatAddToCart: (item) =>
        set((state) => {
          const isDuplicate = state.meatCart.some(
            (cartItem) => cartItem.key === item.key
          );

          if (isDuplicate) {
            return state;
          }

          return { meatCart: [...state.meatCart, item] };
        }),
      meatUpdateCart: (updateItem) =>
        set((state) => ({
          meatCart: state.meatCart.map((item) =>
            item.key === updateItem.key
              ? { ...item, quantity: updateItem.quantity }
              : item
          ),
        })),
      meatRemoveCart: (removeItem) =>
        set((state) => {
          const updatedCart = state.meatCart.filter(
            (item) => item.key !== removeItem.key
          );
          return { meatCart: updatedCart };
        }),
    }),

    {
      name: "meat-cart-storage",
      getStorage: () => localStorage,
    }
  )
);
export { useMeatCartStore };
const useCartStore = create(
  persist(
    (set) => ({
      allCart: [],
      addToAllCart: (item) =>
        set((state) => {
          const isDuplicate = state.allCart.some(
            (cartItem) => cartItem.key === item.key
          );

          if (isDuplicate) {
            return state;
          }

          return { allCart: [...state.allCart, item] };
        }),
      updateAllCart: (updateItem) =>
        set((state) => {
          const updatedCart = state.allCart.map((item) =>
            item.key === updateItem.key
              ? { ...item, quantity: updateItem.quantity }
              : item
          );
          return { allCart: [...updatedCart] };
        }),
      updateAllCartChecked: (updateItem) =>
        set((state) => {
          if (updateItem.key) {
            const updatedCart = state.allCart.map((item) =>
              item.key === updateItem.key
                ? { ...item, checked: updateItem.checked }
                : item
            );
            return { allCart: [...updatedCart] };
          }

          return {
            allCart: state.allCart.map((item) => ({
              ...item,
              checked: updateItem.checked,
            })),
          };
        }),

      removeAllCart: (removeItem) =>
        set((state) => {
          const updatedCart = state.allCart.filter(
            (item) => item.key !== removeItem.key
          );
          return { allCart: updatedCart };
        }),
    }),

    {
      name: "all-cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export { useCartStore };
