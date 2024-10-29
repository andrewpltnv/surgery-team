import { getExpertsSlugs } from "@/sanity/lib/api"
import type { MetadataRoute } from "next"
import { headers } from "next/headers"

const expertsSlugs = await getExpertsSlugs()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers()
  const host = headersList.get("host")
  const lastModified = new Date()

  return [
    {
      url: `https://${host}`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...expertsSlugs.map((slug) => ({
      url: `https://${host}/experts/${slug}`,
      lastModified: lastModified,
      priority: 0.9,
    })),
  ]
}
