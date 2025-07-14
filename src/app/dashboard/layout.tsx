import ProtectedPage from "@/components/ProtectedPage";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedPage>{children}</ProtectedPage>;
} 