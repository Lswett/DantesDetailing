import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/DantesDetailing",
  assetPrefix: "/DantesDetailing/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
