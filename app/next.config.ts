import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/sixty-thirty-seven",
  assetPrefix: "/sixty-thirty-seven",
};

export default nextConfig;
