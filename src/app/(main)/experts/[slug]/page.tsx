import type { Metadata } from "next"
import Profile from "./Profile"
import Testimonials from "@/components/Testimonials"
import type { Expert, Reviews } from "@root/sanity.types"
import { getExpert, getExpertsSlugs } from "@/sanity/lib/api"
// import Instagram from "./Instagram"

export async function generateStaticParams() {
  const slugs = await getExpertsSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params
  const { name, experience, position } = await getExpert(slug)

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

  return (
    <div className="flex-grow">
      <Profile expert={expert as unknown as Expert} />
      <Testimonials reviews={expert.reviews as unknown as Reviews} />
      {/* <Instagram /> */}
    </div>
  )
}
