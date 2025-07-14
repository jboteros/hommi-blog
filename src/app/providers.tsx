"use client";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";
import React from "react";

function InnerProviders({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div></div>;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <InnerProviders>{children}</InnerProviders>
    </AuthProvider>
  );
} 