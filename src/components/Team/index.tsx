import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { EXPERTS } from "@/app/experts/constants"
import type { Expert } from "@/app/experts/constants"

export default function Team() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Expert Team
        </h2>
        <div className="flex flex-col items-center justify-evenly gap-8 md:flex-row">
          {EXPERTS.map(({ name, pos, image, slug }) => (
            <Member image={image} name={name} pos={pos} slug={slug} key={slug} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Member({ name, slug, pos, image }: Pick<Expert, "name" | "slug" | "pos" | "image">) {
  return (
    <div className="container relative flex w-96 flex-col items-center overflow-hidden rounded-lg border-2 text-center shadow-md transition-shadow hover:shadow-xl">
      {slug !== undefined && <Link href={`/experts/${slug}`} className="absolute inset-0"></Link>}
      <Image src={image} alt={name} width={384} height={384} className="aspect-square object-cover md:size-96" />
      <h3 className="m-4 text-2xl font-semibold leading-8 tracking-wide">{name}</h3>
      <Badge variant={"outline"} className="mb-4">
        <p className="text-pretty text-gray-500">{pos}</p>
      </Badge>
    </div>
  )
}
