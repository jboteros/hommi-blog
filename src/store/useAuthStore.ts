import { create } from "zustand";
import { getIdTokenResult } from "firebase/auth";

import { auth } from "@/lib/firebase";
import { User, onAuthStateChanged } from "firebase/auth";

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  isAdmin: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  getFreshToken: () => Promise<string | null>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(
  (set: (partial: Partial<AuthState>) => void) => ({
    user: null,
    token: null,
    loading: true,
    isAdmin: false,
    setUser: (user: User | null) => set({ user }),
    setToken: (token: string | null) => set({ token }),
    setIsAdmin: (isAdmin: boolean) => set({ isAdmin }),
    getFreshToken: async () => {
      if (auth.currentUser) {
        const tokenData = await auth.currentUser.getIdTokenResult(true);

        set({ isAdmin: tokenData.claims.role === "admin" });
        set({ token: tokenData.token });
        return tokenData.token;
      }

      return null;
    },
    logout: async () => {
      try {
        console.log("🚀 ~ logout: ~ start");
        await auth.signOut();
        set({ user: null, token: null, isAdmin: false, loading: false });
      } catch (error) {
        console.error("logout e", error);
      } finally {
        console.log("🚀 ~ logout: ~ finally");
      }
    },
  })
);

onAuthStateChanged(auth, async (user: User | null) => {
  useAuthStore.getState().setUser(user);
  if (user) {
    const tokenData = await getIdTokenResult(user);

    useAuthStore.getState().setIsAdmin(tokenData.claims.role === "admin");
    useAuthStore.getState().setToken(tokenData.token);
  } else {
    useAuthStore.getState().setToken(null);
    useAuthStore.getState().setIsAdmin(false);
  }
  useAuthStore.setState({ loading: false });
});
