"use client";

import React, { createContext, useContext } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  token: string | null;
  getFreshToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const {
    user,
    loading,
    token,
    getFreshToken,
    logout,
  } = useAuthStore();

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const value = {
    user,
    loading,
    token,
    getFreshToken,
    logout,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
