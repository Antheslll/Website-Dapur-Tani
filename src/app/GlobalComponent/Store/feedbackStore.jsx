"use client";
import { create } from "zustand";

export const useEmote = create((set) => ({
  emote: "",
  finishedFeedback: false,
  setEmote: (emote) => set({ emote: emote }),
  setFinishedFeedback: (status) => set({ finishedFeedback: status }),
}));
