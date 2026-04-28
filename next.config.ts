import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res-cdn.tunee.ai",
        pathname: "/web_static_res/**",
      },
    ],
  },
};

export default nextConfig;
