"use client";

import dynamic from "next/dynamic";

const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview"),
  { ssr: false }
);

interface BlogPostPreviewProps {
  title: string;
  excerpt: string;
  content: string;
}

export default function BlogPostPreview({ title, excerpt, content }: BlogPostPreviewProps) {
  return (
    <div className="mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-2 text-gray-900">{title || <span className="text-gray-400">(No title)</span>}</h1>
      <p className="text-gray-600 mb-4">{excerpt || <span className="text-gray-400">(No excerpt)</span>}</p>
      <div className="prose max-w-none">
        <MarkdownPreview source={content || "(No content)"} data-color-mode="light" />
      </div>
    </div>
  );
} 