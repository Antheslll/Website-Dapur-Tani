"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAccountStore = create(
  persist(
    (set, get) => ({
      activeAccount: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
      },
      activeAccountUpdate: (updateAccount) =>
        set({ activeAccount: updateAccount }),
    }),
    {
      name: "active-account",
      getStorage: () => localStorage,
    }
  )
);

export const useAccountList = create(
  persist(
    (set, get) => ({
      accountList: [
        {
          firstName: "Anthony",
          lastName: "Liem",
          email: "liemanthony27@gmail.com",
          password: "anthony123",
          address: "Jakarta",
        },
      ],
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",

      updateFirstName: (firstName) => set(() => ({ firstName })),
      updateLastName: (lastName) => set(() => ({ lastName })),
      updateEmail: (email) => set(() => ({ email })),
      updatePassword: (password) => set(() => ({ password })),
      updateAddress: (address) => set(() => ({ address })),

      startAccount: () => set((state) => ({ accountList: state.accountList })),
      addAccount: (newAccount) =>
        set((state) => ({
          accountList: [...state.accountList, newAccount],
        })),
      removeAccount: (email) =>
        set((state) => ({
          accountList: state.accountList.filter(
            (account) => account.email !== email
          ),
        })),
    }),
    {
      name: "account-list",
      getStorage: () => localStorage,
      partialize: (state) => ({ accountList: state.accountList }),
    }
  )
);

export const useEditAccountStore = create((set) => ({
  edit: false,
  editedFirstName: "",
  editedLastName: "",
  editedUsername: "",
  editedPassword: "",
  editedAddress: "",
  setEdit: (bool) => set({ edit: bool }),
  setEditedFirstName: (newInput) => set({ editedFirstName: newInput }),
  setEditedLastName: (newInput) => set({ editedLastName: newInput }),
  setEditedUsername: (newInput) => set({ editedUsername: newInput }),
  setEditedPassword: (newInput) => set({ editedPassword: newInput }),
  setEditedAddress: (newInput) => set({ editedAddress: newInput }),
}));
