"use client";

import { useState } from "react";

interface SimpleTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  showPreview?: boolean;
}

export default function SimpleTextEditor({
  value,
  onChange,
  placeholder = "Start writing your content...",
  showPreview = false,
}: SimpleTextEditorProps) {
  const [isPreview, setIsPreview] = useState(showPreview);

  const convertToHTML = (text: string): string => {
    if (!text) return "";
    
    return text
      // Convert line breaks to paragraphs
      .split('\n\n')
      .map(paragraph => {
        if (!paragraph.trim()) return '';
        
        // Convert single line breaks to <br>
        const withBreaks = paragraph.replace(/\n/g, '<br>');
        
        // Convert **bold** to <strong>
        const withBold = withBreaks.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Convert *italic* to <em>
        const withItalic = withBold.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Convert `code` to <code>
        const withCode = withItalic.replace(/`(.*?)`/g, '<code>$1</code>');
        
        // Convert [link](url) to <a>
        const withLinks = withCode.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        
        return `<p>${withLinks}</p>`;
      })
      .join('');
  };

  const handleTextChange = (text: string) => {
    onChange(text);
  };

  const htmlOutput = convertToHTML(value);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <button
          type="button"
          onClick={() => setIsPreview(!isPreview)}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isPreview ? "Edit" : "Preview"}
        </button>
      </div>

      {isPreview ? (
        <div className="min-h-[400px] p-4 border border-gray-300 rounded-md bg-white">
          {htmlOutput ? (
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlOutput }}
            />
          ) : (
            <p className="text-gray-500 italic">{placeholder}</p>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          <textarea
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder={placeholder}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500 min-h-[400px] resize-y"
          />
          <div className="text-xs text-gray-500">
            <p>Markdown shortcuts:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><code>**bold**</code> for <strong>bold text</strong></li>
              <li><code>*italic*</code> for <em>italic text</em></li>
              <li><code>`code`</code> for <code>inline code</code></li>
              <li><code>[link text](url)</code> for links</li>
              <li>Double line breaks for new paragraphs</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 