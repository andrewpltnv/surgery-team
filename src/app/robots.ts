import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/",
    },
    sitemap: `${process.env.NODE_ENV === "production" ? process.env.VERCEL_URL : process.env.SITE_URL}/sitemap.xml`,
  }
}
