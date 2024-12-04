import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "app"),  // Map '@' to the 'app' folder
      "@/components": path.resolve(__dirname, "app/components"),  // Map '@/components' to 'app/components'
      "@/app": path.resolve(__dirname, "app"),  // Map '@/app' to 'app'
    };
    return config;
  },

  // Other Next.js configuration options
};

export default nextConfig;
