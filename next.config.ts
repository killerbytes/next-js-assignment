import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/stories",
      },
    ];
  },
  sassOptions: {},
  images: {
    remotePatterns: [new URL("https://dummyimage.com/**")],
  },
};

export default nextConfig;
