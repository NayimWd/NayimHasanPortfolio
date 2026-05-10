import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          // React — small, safe to be initial
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-dom\/client)[\\/]/,
            name: "react-vendor",
            chunks: "all",       
            priority: 50,
            enforce: true,
          },

          // Three.js — large, async only
          threeVendor: {
            test: /[\\/]node_modules[\\/](three|@react-three\/fiber|@react-three\/drei|three-globe)[\\/]/,
            name: "three-vendor",
            chunks: "async",     
            priority: 40,
            enforce: true,
          },

          // Lottie —  async only
          lottieVendor: {
            test: /[\\/]node_modules[\\/](lottie-react|lottie-web)[\\/]/,
            name: "lottie-vendor",
            chunks: "async",     
            priority: 35,
            enforce: true,
          },

          // Motion —  async for heavy animation pages
          motionVendor: {
            test: /[\\/]node_modules[\\/]motion[\\/]/,
            name: "motion-vendor",
            chunks: "async",    
            priority: 30,
            enforce: true,
          },

          // UI utils — tiny, fine as initial
          uiVendor: {
            test: /[\\/]node_modules[\\/](lucide-react|clsx|tailwind-merge|class-variance-authority|next-themes)[\\/]/,
            name: "ui-vendor",
            chunks: "all",       
            priority: 20,
            enforce: true,
          },

          // Catch-all for remaining node_modules
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all",
            priority: 10,
            minChunks: 2,        
          },
        },
      };
    }

    // Treat Three.js as external on server 
    if (isServer) {
      config.externals = [...(config.externals || []), "three", "three-globe"];
    }

    return config;
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);