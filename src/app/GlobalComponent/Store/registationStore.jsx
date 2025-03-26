"use client";
import { create } from "zustand";

export const useRegistrationHooks = create((set) => ({
  auth: false,
  langOpen: false,
  lang: "",
  slide: false,
  setAuth: (bool) => set({ auth: bool }),
  setLangOpen: (bool) => set({ langOpen: bool }),
  setLang: (lang) => set({ lang: lang }),
  setSlide: (bool) => set({ slide: bool }),
}));
