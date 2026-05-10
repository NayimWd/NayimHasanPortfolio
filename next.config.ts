import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "clsx",
      "tailwind-merge",
      "class-variance-authority",
    ],
  },

  webpack(config) {
    config.optimization.splitChunks.cacheGroups = {
      // React core
      reactVendor: {
        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        name: "react-vendor",
        chunks: "all",
        priority: 40,
      },

      // Three.js ecosystem (BIGGEST WIN for you)
      threeVendor: {
        test: /[\\/]node_modules[\\/](three|@react-three|three-globe)[\\/]/,
        name: "three-vendor",
        chunks: "all",
        priority: 30,
      },

      // Animation stack (Lottie + motion)
      animationVendor: {
        test: /[\\/]node_modules[\\/](motion|framer-motion|lottie-react)[\\/]/,
        name: "animation-vendor",
        chunks: "all",
        priority: 25,
      },

      // UI utilities
      uiVendor: {
        test: /[\\/]node_modules[\\/](lucide-react|clsx|tailwind-merge|class-variance-authority)[\\/]/,
        name: "ui-vendor",
        chunks: "all",
        priority: 20,
      },

      // fallback vendor chunk
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendor",
        chunks: "all",
        priority: 10,
      },
    };

    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
