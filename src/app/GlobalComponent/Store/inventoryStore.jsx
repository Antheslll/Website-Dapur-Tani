"use client";
import { create } from "zustand";

export const useInventoryHooks = create((set) => ({
  editing: false,

  setEditingAvailable: (edit) => set({ editing: edit }),
}));
