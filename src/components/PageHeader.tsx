"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  canBack?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  actions,
  canBack = false,
}: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-4">
        {canBack && (
          <Link
            href="/dashboard/blog"
            className="text-gray-400 hover:text-gray-600"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      </div>

      {actions && <div>{actions}</div>}
    </div>
  );
}
