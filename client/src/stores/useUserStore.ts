import { create } from "zustand";

type UserStore = {
  userToken: string | null;
  userUid: string | null;
  setUserToken: (token: string | null) => void;
  setUserUid: (uid: string | null) => void;
  clearAuth: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  userToken: null,
  userUid: null,
  setUserToken: (token) => set({ userToken: token }),
  setUserUid: (uid) => set({ userUid: uid }),
  clearAuth: () => set({ userToken: null, userUid: null }),
}));
