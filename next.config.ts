import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  images: {
    unoptimized: true, // Required for static exports (e.g., GitHub Pages)
  },
};

export default nextConfig;


