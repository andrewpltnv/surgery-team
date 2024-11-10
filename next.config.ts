import createMDX from "@next/mdx"
import type { NextConfig } from "next"
import "@total-typescript/ts-reset"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // experimental: {
  //   webpackMemoryOptimizations: true,
  // },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }, { hostname: "api.iconify.design" }],
    // loader: "custom",
    // loaderFile: "./src/lib/imageLoader.ts",
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
