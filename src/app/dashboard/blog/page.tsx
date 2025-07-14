"use client";

import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { Plus, Edit, Trash2, Eye, Calendar, FileText } from "lucide-react";
import { useGetBlogs, useDeleteBlog } from "@/graphql/hooks/useGetBlogs";
import { BlogPublicFragmentFragment } from "@/graphql/gql/graphql";
import PageHeader from "@/components/PageHeader";

export default function BlogPostsPage() {
  const { user, loading } = useAuth();

  const { blogs, loadingBlogs } = useGetBlogs();
  const { deleteBlog, loading: deletingBlog } = useDeleteBlog();

  const handleDelete = async (postId: string) => {
    console.log("🚀 ~ handleDelete ~ postId:", postId);
    if (
      typeof window !== "undefined" &&
      confirm("Are you sure you want to delete this post?")
    ) {
      const result = await deleteBlog(postId);

      if (result.success) {
        // The mutation will automatically refetch the blogs list
        console.log("Blog deleted successfully:", result.message);
      } else {
        console.error("Failed to delete blog:", result.message);
        // You might want to show an error toast here
      }
    }
  };

  const getStatusBadge = (status: string) => {
    return status === "published" ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Published
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
        Draft
      </span>
    );
  };

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
        <PageHeader
          title="Blog Posts"
          subtitle="Manage your blog posts"
          actions={
            <Link
              href="/dashboard/blog/agregar"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Link>
          }
        />

        {!!loadingBlogs ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            {blogs.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No posts
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by creating a new blog post.
                </p>
                <div className="mt-6">
                  <Link
                    href="/dashboard/blog/agregar"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Link>
                </div>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {blogs.map((post) => {
                  const blogData = post as BlogPublicFragmentFragment;
                  return (
                    <li key={blogData._id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 flex-1 min-w-0">
                            {/* Main Image Preview */}
                            <div className="flex-shrink-0">
                              {blogData.mainImage ? (
                                <img
                                  src={blogData.mainImage}
                                  alt={blogData.title}
                                  className=" aspect-[1200/630]  h-25 object-cover rounded-lg border border-gray-200"
                                  onError={(e) => {
                                    // Fallback to a placeholder if image fails to load
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                    target.nextElementSibling?.classList.remove(
                                      "hidden"
                                    );
                                  }}
                                />
                              ) : null}
                              {!blogData.mainImage && (
                                <div className="h-16 w-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                                  <FileText className="h-6 w-6 text-gray-400" />
                                </div>
                              )}
                              {/* Fallback placeholder for failed images */}
                              <div className="h-16 w-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center hidden">
                                <FileText className="h-6 w-6 text-gray-400" />
                              </div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-indigo-600 truncate">
                                  <Link
                                    href={`/dashboard/blog/${blogData._id}`}
                                    className="hover:underline"
                                  >
                                    {blogData.title}
                                  </Link>
                                </p>
                                <div className="ml-2 flex-shrink-0 flex">
                                  {getStatusBadge(blogData.status)}
                                </div>
                              </div>
                              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                {blogData.summary}
                              </p>
                              {blogData.tags && blogData.tags.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {blogData.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4" />
                                <p>
                                  Created{" "}
                                  {blogData.createdAt
                                    ? new Date(
                                        Number(blogData.createdAt)
                                      ).toLocaleDateString("es-CO", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                      })
                                    : "Unknown date"}
                                </p>
                                <span className="mx-2">•</span>
                                <Eye className="flex-shrink-0 mr-1.5 h-4 w-4" />
                                <p>{blogData.timesViewed || 0} views</p>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0 flex space-x-2">
                            <Link
                              href={`/dashboard/blog/${blogData._id}`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <Edit className="h-4 w-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(blogData._id)}
                              disabled={deletingBlog}
                              className="text-red-600 hover:text-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
