import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProd ? "https://tunee-ja-scene-pages.vercel.app" : undefined,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tunee-ja-scene-pages.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res-cdn.tunee.ai",
        pathname: "/web_static_res/**",
      },
    ],
  },
};

export default nextConfig;
