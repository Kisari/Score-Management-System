import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  webpack(config) {
    // Resolve paths for custom aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "app"),
      "@/components": path.resolve(__dirname, "app/components"),
    };
    return config;
  },

  // Add other configuration options as needed
};

export default nextConfig;
