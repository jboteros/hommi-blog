import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable SSR for internal dashboard usage
  // Disable static optimization for dynamic dashboard content
  staticPageGenerationTimeout: 0,
  // Force client-side rendering for all pages
  reactStrictMode: false,
  // Disable image optimization since we're client-side only
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
