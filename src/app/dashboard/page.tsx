"use client";

// import { useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
// import { useRouter } from "next/navigation";
import { FileText, Eye, Calendar, TrendingUp, Plus } from "lucide-react";
import { useGetBlogStats } from "@/graphql/hooks/useGetBlogs";
import { useAuthStore } from "@/store/useAuthStore";
import UnauthorizedCard from "@/components/UnauthorizedCard";
import Link from "next/link";

export default function DashboardPage() {
  const { loading } = useAuth();
  const { isAdmin, user } = useAuthStore();
  console.log("🚀 ~ DashboardPage ~ isAdmin:", isAdmin);
  // const router = useRouter();
  const { stats, loading: loadingStats } = useGetBlogStats();

  // Removed useEffect for redirecting to /login; now handled by ProtectedPage in layout.

  if (!isAdmin) {
    return <UnauthorizedCard />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Bienvenido de nuevo, {user.email}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Posts totales
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {loadingStats ? "..." : stats?.totalPosts || 0}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Publicados
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {loadingStats ? "..." : stats?.publishedPosts || 0}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Borradores
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {loadingStats ? "..." : stats?.draftPosts || 0}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Eye className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Vistas totales
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {loadingStats ? "..." : stats?.totalViews || 0}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {stats?.tags && stats.tags.length > 0 && (
          <div className="bg-white shadow rounded-lg p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Tags usados
            </h2>
            <div className="flex flex-wrap gap-3">
              {stats.tags.map((tagObj) => (
                <span
                  key={tagObj.tag}
                  className="inline-flex items-center bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                >
                  #{tagObj.tag}
                  <span className="ml-2 bg-blue-200 text-blue-900 rounded-full px-2 py-0.5 text-xs font-bold">
                    {tagObj.count}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/dashboard/blog/agregar"
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg border border-gray-200 hover:border-gray-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <Plus className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-700">
                    <span
                      className="absolute inset-0 text-lg font-semibold mb-4 "
                      aria-hidden="true"
                    />
                    Creare post nuevo
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Empezar a escribir nuevo post
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/dashboard/blog"
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg border border-gray-200 hover:border-gray-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-green-50 text-green-700 ring-4 ring-white">
                    <FileText className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-700">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Ver posts
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Ver y editar posts
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
