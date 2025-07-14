"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import BlogForm from "@/components/BlogForm";
import PageHeader from "@/components/PageHeader";
import { Eye, Save } from "lucide-react";

import { BlogInput, PostStatusInput } from "@/graphql/gql/graphql";
import { useCreateBlog } from "@/graphql/hooks/useGetBlogs";

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

export default function NewBlogPostPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { createBlog, loading: creatingBlog } = useCreateBlog();

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
        author: "68583fbd5e8a25eb2604042b",
      };

      console.log("Creating blog with data:", blogInput);

      const result = await createBlog(blogInput);

      console.log("Create blog result:", result);

      if (result.success) {
        console.log("Blog created successfully:", result.message);
        router.push("/dashboard/blog");
      } else {
        console.error("Failed to create blog:", result.message);
        // You might want to show an error toast here
        alert(`Failed to create blog: ${result.message}`);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert(
        `Error creating post: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreview = () => {
    // Placeholder for preview logic
    console.log("Previewing post...");
    // In a real app, you would navigate to a preview page
    // router.push("/dashboard/blog/preview");
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
          canBack
          title="New Blog Post"
          subtitle="Create a new blog post"
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
                disabled={isLoading || creatingBlog}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="h-4 w-4 mr-2" />
                {isLoading || creatingBlog ? "Creating..." : "Create Post"}
              </button>
            </div>
          }
        />
        <BlogForm
          onSubmit={handleSubmit}
          isLoading={isLoading || creatingBlog}
          isEdit={false}
        />
      </div>
    </DashboardLayout>
  );
}
