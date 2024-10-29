import type { Expert } from "@root/sanity.types"
import { sanityFetch } from "./client"
import { expertBySlugQuery, slugsQuery } from "./queries"

export const getExpert = async (slug: string) => {
  const expert = await sanityFetch<Expert>({
    query: expertBySlugQuery,
    qParams: { slug },
  })

  return expert
}

export const getExpertsSlugs = async () => {
  const slugs = await sanityFetch<string[]>({
    query: slugsQuery,
  })

  return slugs
}

export const getCategories = async () => {}

export const getArticles = async () => {}
