import { create } from "zustand";
import type { UserProps } from "../types/user.types";

export const useUser = create((set) => ({
  user: {
    firstName: "Tony",
    lastName: "Joe",
  },
  setUser: (newUser: UserProps) => set({ user: newUser }),
  updateUser: (response: { firstName, lastName}) =>
    set((state) => ({ user: { ...state.user, firstName, lastName } })),
}));