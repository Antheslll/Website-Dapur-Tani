"use client";
import { create } from "zustand";

export const useShortcut = create((set) => ({
  shortcutOpen: false,
  hoveringProfileShortcut: false,
  hoveringSignOutShortcut: false,
  setActionShortcut: (bool) => set({ shortcutOpen: bool }),
  setHoveringProfileShortcut: (bool) => set({ hoveringProfileShortcut: bool }),
  setHoveringSignOutShortcut: (bool) => set({ hoveringSignOutShortcut: bool }),
}));
