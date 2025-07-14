"use client";

import { useAuthStore } from "@/store/useAuthStore";
import UnauthorizedCard from "@/components/UnauthorizedCard";

export default function ProtectedPage({ children }: { children: React.ReactNode }) {
  const { loading, isAdmin } = useAuthStore();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return <UnauthorizedCard />;
  }

  return <>{children}</>;
} 