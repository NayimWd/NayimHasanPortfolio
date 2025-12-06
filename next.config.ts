import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "clsx",
      "tailwind-merge",
      "class-variance-authority"
    ]
  }
};

export default withBundleAnalyzer(nextConfig);
