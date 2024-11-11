import { createClient, type QueryParams } from "next-sanity"
import { apiVersion, dataset, projectId } from "../env"

export const client = createClient({
  projectId,
  dataset,
  token: process.env.NEXT_PUBLIC_SANITY_USER_ADDER_TOKEN,
  apiVersion,
  perspective: "published",
  // withCredentials: true,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
}: {
  query: string
  qParams?: QueryParams
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
  })
}
