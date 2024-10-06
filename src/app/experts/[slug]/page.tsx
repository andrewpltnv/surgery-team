import { EXPERTS } from "../constants"
import { Metadata } from "next"
import Profile from "./Profile"
import Testimonials from "@/components/Testimonials"

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
    },
  }
}

export default function ExpertPage({ params: { slug } }: { params: { slug: string } }) {
  const expert = EXPERTS[slug]
  if (!expert) {
    throw new Error("Image not found")
  }

  return (
    <div className="flex-grow bg-slate-200">
      <Profile expert={expert} />
      <Testimonials testimonials={expert.testimonials} />
    </div>
  )
}
