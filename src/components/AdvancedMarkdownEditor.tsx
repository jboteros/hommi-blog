"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import to avoid SSR issues
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface AdvancedMarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: number;
}

export default function AdvancedMarkdownEditor({
  value,
  onChange,
  placeholder = "Write your post in markdown...",
  height = 400,
}: AdvancedMarkdownEditorProps) {
  // For placeholder support
  const [isEmpty, setIsEmpty] = useState(!value);

  useEffect(() => {
    setIsEmpty(!value);
  }, [value]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Content
      </label>
      <div data-color-mode="light">
        <MDEditor
          value={value}
          onChange={(val) => onChange(val || "")}
          height={height}
          preview="live"
          textareaProps={{
            placeholder: placeholder,
            style: { minHeight: height - 50 },
          }}
        />
      </div>
      {isEmpty && (
        <div className="text-gray-400 text-xs italic mt-1">{placeholder}</div>
      )}
    </div>
  );
}
