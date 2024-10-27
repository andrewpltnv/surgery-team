import { getExpertsSlugs } from "@/sanity/lib/api"
import type { MetadataRoute } from "next"

const expertsSlugs = await getExpertsSlugs()

export default function sitemap(): MetadataRoute.Sitemap {
  const site = `https://${process.env.VERCEL_URL ?? "localhost:3000"}`

  const links: MetadataRoute.Sitemap = [
    {
      url: site,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...expertsSlugs.map((slug) => ({
      url: `${site}/experts/${slug}`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
    })),
  ]

  return links
}
