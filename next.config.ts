import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set a reasonable timeout for static page generation
  staticPageGenerationTimeout: 120,
  // Force client-side rendering for all pages
  reactStrictMode: false,
  // Disable image optimization since we're client-side only
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hommi.app",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
