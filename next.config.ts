import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }, { hostname: "api.iconify.design" }],
  },
}

module.exports = nextConfig
