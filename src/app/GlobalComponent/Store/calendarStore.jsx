// calendarStore.js - updated with debugging
"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCalenderOpen = create((set, get) => ({
  calendarOpen: false,
  calenderSettingsOpen: false,
  timeframePicked: "",
  searchAutomationOpen: false,
  date: "",

  setCalenderOpen: (bool) => set({ calendarOpen: bool }),
  setCalenderSettingsOpen: (bool) => set({ calenderSettingsOpen: bool }),
  setTimeframe: (tf) => {
    set({ timeframePicked: tf });
  },
  setSearchAutomationOpen: (bool) => set({ searchAutomationOpen: bool }),
  setDate: (date) => set({ date: date }),
}));

export const useTempAutomationList = create((set, get) => ({
  tempAutomationOrderList: [],
  fixTempAutomationOrderList: [],

  setTempAutomationOrderList: (order) => {
    set((state) => {
      const exists = state.tempAutomationOrderList.some(
        (item) => item.productKey === order.productKey
      );

      return {
        tempAutomationOrderList: exists
          ? state.tempAutomationOrderList.filter(
              (item) => item.productKey !== order.productKey
            )
          : [...state.tempAutomationOrderList, order],
      };
    });
  },
  setRefereshTempAutomationOrderList: () =>
    set({ tempAutomationOrderList: [] }),

  setFixTempAutomationOrderList: (order) =>
    set({ fixTempAutomationOrderList: order }),

  updateQtyInOrderList: (productKey, newQty) => {
    set((state) => ({
      fixTempAutomationOrderList: state.fixTempAutomationOrderList.map((item) =>
        item.productKey === productKey ? { ...item, qty: newQty } : item
      ),
    }));
  },
}));

export const useAutomationStorage = create(
  persist(
    (set) => ({
      automationOrderList: [],
      setAutomationOrderList: (orderList) =>
        set((state) => ({
          automationOrderList: [...state.automationOrderList, orderList], // Perbaikan di sini
        })),
    }),
    {
      name: "automation-order-list",
      getStorage: () => localStorage,
    }
  )
);

export const useDetailsAutomation = create((set) => ({}));
