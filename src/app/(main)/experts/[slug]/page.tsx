import { EXPERTS } from "../constants"
import { Metadata } from "next"
import Profile from "./Profile"
import Testimonials from "@/components/Testimonials"
// import Instagram from "./Instagram"

export async function generateStaticParams() {
  return Object.keys(EXPERTS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const expert = EXPERTS[slug]
  if (!expert) {
    throw new Error("Image not found")
  }

  const { name, activity, pos } = expert

  return {
    title: name,
    description: [name, pos, activity].join(" | "),
    openGraph: {
      title: name,
      description: [name, pos, activity].join(" | "),
      url: `/experts/${slug}`,
      images: [
        {
          url: "api/og",
        },
      ],
    },
    twitter: {
      images: [
        {
          url: "api/og",
        },
      ],
    },
  }
}

export default function ExpertPage({ params: { slug } }: { params: { slug: string } }) {
  const expert = EXPERTS[slug]
  if (!expert) {
    throw new Error("Image not found")
  }

  return (
    <div className="flex-grow">
      <Profile expert={expert} />
      <Testimonials testimonials={expert.testimonials} />
      {/* <Instagram /> */}
    </div>
  )
}