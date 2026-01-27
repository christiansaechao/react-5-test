import { create } from "zustand";

export const useUser = create((set) => ({
  user: {},
  setUser: (newUser: any) => set({ user: newUser }),
}));
