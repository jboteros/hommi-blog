"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import BlogForm from "@/components/BlogForm";
import { useGetBlogById, useUpdateBlog } from "@/graphql/hooks/useGetBlogs";
import { useFragment } from "@/graphql/gql/fragment-masking";
import { BlogFragmentFragmentDoc } from "@/graphql/gql/graphql";
import { BlogInput, PostStatusInput } from "@/graphql/gql/graphql";
import PageHeader from "@/components/PageHeader";
import { Eye, Save } from "lucide-react";

interface BlogFormData {
  title: string;
  summary: string;
  content: string;
  status: "draft" | "published";
  slug?: string;
  mainImage: string;
  tags: string[];
  seo_title: string;
  seo_desc: string;
}

export default function EditBlogPostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = use(params);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { blog, loading: loadingBlog, error } = useGetBlogById(postId);
  const { updateBlog, loading: updatingBlog } = useUpdateBlog();

  // Use the fragment to get properly typed data - always call the hook
  const blogData = useFragment(BlogFragmentFragmentDoc, blog);



  useEffect(() => {
    if (error) {
      console.error("Error loading blog:", error);
      // You might want to show an error message or redirect
    }
  }, [error]);

  const handleSubmit = async (formData: BlogFormData) => {
    setIsLoading(true);

    try {
      // Transform form data to match BlogInput type
      const blogInput: BlogInput = {
        title: formData.title,
        summary: formData.summary,
        content: formData.content,
        status: formData.status as PostStatusInput,
        mainImage: formData.mainImage,
        tags: formData.tags,
        seo_title: formData.seo_title,
        seo_desc: formData.seo_desc,
      };

      const result = await updateBlog(postId, blogInput);

      if (result.success) {
        console.log("Blog updated successfully:", result.message);
        router.push("/dashboard/blog");
      } else {
        console.error("Failed to update blog:", result.message);
        // You might want to show an error toast here
      }
    } catch (error) {
      console.error("Error updating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreview = () => {
    // Placeholder for preview logic
    console.log("Previewing post...");
    // In a real app, you would navigate to a preview page
  };

  if (loading || loadingBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Error loading blog post
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    There was an error loading the blog post. Please try again
                    or go back to the blog list.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/dashboard/blog"
                    className="text-sm font-medium text-red-800 hover:text-red-900"
                  >
                    ← Back to Blog Posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!blog || !blogData) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Blog post not found
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    The blog post you&apos;re looking for doesn&apos;t exist or
                    has been removed.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/dashboard/blog"
                    className="text-sm font-medium text-yellow-800 hover:text-yellow-900"
                  >
                    ← Back to Blog Posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Transform the blog data to match the form structure
  const initialData: BlogFormData = {
    title: blogData.title,
    summary: blogData.summary,
    content: blogData.content,
    status: blogData.status as "draft" | "published",
    slug: blogData.slug,
    mainImage: blogData.mainImage,
    tags: blogData.tags || [],
    seo_title: blogData.seo_title || "",
    seo_desc: blogData.seo_desc || "",
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          canBack
          title="Edit Blog Post"
          subtitle="Update your blog post"
          actions={
            <div className="flex space-x-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handlePreview}
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </button>
              <button
                type="submit"
                form="blog-form"
                disabled={isLoading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="h-4 w-4 mr-2" />
                {isLoading ? "Updating..." : "Update Post"}
              </button>
            </div>
          }
        />
        <BlogForm
          initialData={initialData}
          onSubmit={handleSubmit}
          isLoading={isLoading || updatingBlog}
          isEdit={true}
        />
      </div>
    </DashboardLayout>
  );
}
