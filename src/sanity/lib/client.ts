import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId } from "../env"

export const client = createClient({
  projectId,
  dataset,
  token: process.env.NEXT_PUBLIC_SANITY_USER_ADDER_TOKEN,
  apiVersion,
  withCredentials: true,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})