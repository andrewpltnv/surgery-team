import type { Metadata } from "next"
import Profile from "./Profile"
import Testimonials from "@/components/Testimonials"
import type { Expert, Reviews } from "@root/sanity.types"
import { getExpert, getExpertsSlugs } from "@/sanity/lib/api"
import SchemaMarkup from "@/sanity/lib/schemaMarkup"
import type { Schema } from "@operationnation/sanity-plugin-schema-markup"
// import Instagram from "./Instagram"

export async function generateStaticParams() {
  const slugs = await getExpertsSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const { slug } = params
  const expert = await getExpert(slug)

  if (!expert) {
    throw new Error("Image not found")
  }

  const { name, experience, position } = expert

  return {
    title: name,
    description: [name, position, experience?.activity].join(" | "),
    openGraph: {
      title: name ?? "",
      description: [name, position, experience?.activity].join(" | "),
      url: `/experts/${slug}`,
      images: [{ url: "api/og" }],
    },
    twitter: {
      images: [{ url: "api/og" }],
    },
  }
}

export default async function ExpertPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  const { slug } = params

  const expert = await getExpert(slug)

  if (!expert || !expert.reviews) {
    throw new Error("Expert not found")
  }

  const { schemaMarkup, ...rest } = expert

  return (
    <div className="flex-grow">
      {schemaMarkup !== null && <SchemaMarkup schema={schemaMarkup as Schema[]} />}
      <Profile expert={rest as unknown as Expert} />
      <Testimonials reviews={expert.reviews as unknown as Reviews} />
      {/* <Instagram /> */}
    </div>
  )
}
