import type { ExpertBySlugQueryResult } from "@root/sanity.types.ts"
import { sanityFetch } from "./client"
import { expertBySlugQuery, expertsSlugsQuery } from "./queries"

export const getExpert = async (slug: string) => {
  const expert = await sanityFetch<ExpertBySlugQueryResult>({
    query: expertBySlugQuery,
    qParams: { slug },
  })

  if (!expert) throw new Error("There is no user")

  return expert
}

export const getExpertsSlugs = async () => {
  const slugs = await sanityFetch<string[]>({
    query: expertsSlugsQuery,
  })

  return slugs
}
