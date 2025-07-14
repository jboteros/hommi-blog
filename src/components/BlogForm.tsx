"use client";

import { useEffect, useState } from "react";
import AdvancedMarkdownEditor from "@/components/AdvancedMarkdownEditor";
import BlogPostPreview from "@/components/BlogPostPreview";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

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

interface BlogFormProps {
  initialData?: Partial<BlogFormData>;
  onSubmit: (data: BlogFormData) => Promise<void>;
  isLoading?: boolean;
  isEdit?: boolean;
}

const TAG_OPTIONS = [
  "Comprar vivienda",
  "Guía de crédito",
  "Lifestyle",
  "Tendencias del mercado",
  "Tips financieros",
  "Zonas",
];

export default function BlogForm({ initialData, onSubmit }: BlogFormProps) {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    summary: "",
    content: "",
    status: "draft",
    slug: "",
    mainImage: "",
    tags: [],
    seo_title: "",
    seo_desc: "",
    ...initialData,
  });
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Update form data when initialData changes (for editing)
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleInputChange = (
    field: string,
    value: string | Record<string, unknown>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Transition.Root show={isPreviewOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setIsPreviewOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900 mb-4"
                  >
                    Blog Post Preview
                  </Dialog.Title>
                  <BlogPostPreview
                    title={formData.title}
                    excerpt={formData.summary}
                    content={formData.content}
                  />
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onClick={() => setIsPreviewOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="space-y-6">
        <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6 space-y-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                  placeholder="Enter post title..."
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>

              {/* Slug */}
              <div>
                <label
                  htmlFor="slug"
                  className="block text-sm font-medium text-gray-700"
                >
                  Slug (Optional)
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                  placeholder="unique-post-slug (optional)"
                  value={formData.slug}
                  onChange={(e) => handleInputChange("slug", e.target.value)}
                />
              </div>

              {/* Main Image */}
              <div>
                <label
                  htmlFor="mainImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Main Image URL
                </label>
                <input
                  type="text"
                  id="mainImage"
                  name="mainImage"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                  placeholder="https://example.com/image.jpg"
                  value={formData.mainImage}
                  onChange={(e) =>
                    handleInputChange("mainImage", e.target.value)
                  }
                />
              </div>

              {/* Tags */}
              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tags
                </label>
                <select
                  id="tags"
                  name="tags"
                  multiple
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                  value={formData.tags}
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions).map(
                      (opt) => opt.value
                    );
                    handleInputChange(
                      "tags",
                      selected as unknown as string | Record<string, unknown>
                    );
                  }}
                >
                  {TAG_OPTIONS.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
                <div className="text-xs text-gray-500 mt-1">
                  Hold Ctrl (Windows) or Cmd (Mac) to select multiple tags.
                </div>
              </div>

              {/* Summary */}
              <div>
                <label
                  htmlFor="summary"
                  className="block text-sm font-medium text-gray-700"
                >
                  Summary
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  rows={3}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                  placeholder="Brief summary of the post..."
                  value={formData.summary}
                  onChange={(e) => handleInputChange("summary", e.target.value)}
                />
              </div>

              {/* SEO Title */}
              <div>
                <label
                  htmlFor="seo_title"
                  className="block text-sm font-medium text-gray-700"
                >
                  SEO Title
                </label>
                <input
                  type="text"
                  id="seo_title"
                  name="seo_title"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                  placeholder="SEO-friendly title..."
                  value={formData.seo_title}
                  onChange={(e) =>
                    handleInputChange("seo_title", e.target.value)
                  }
                />
              </div>

              {/* SEO Description */}
              <div>
                <label
                  htmlFor="seo_desc"
                  className="block text-sm font-medium text-gray-700"
                >
                  SEO Description
                </label>
                <textarea
                  id="seo_desc"
                  name="seo_desc"
                  rows={2}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                  placeholder="SEO description for search engines..."
                  value={formData.seo_desc}
                  onChange={(e) =>
                    handleInputChange("seo_desc", e.target.value)
                  }
                />
              </div>

              {/* Status */}
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              {/* Content */}
              <AdvancedMarkdownEditor
                value={formData.content}
                onChange={(value) => handleInputChange("content", value)}
                placeholder="Write your blog post content here..."
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
