import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { sanityFetch } from "@/sanity/lib/client";
import { expertsQuery } from "@/app/(main)/experts/api";
import type { ExpertsQueryResult } from "@root/sanity.types";
import { urlFor } from "@/sanity/lib/image";

const experts = await sanityFetch<ExpertsQueryResult>({ query: expertsQuery });

export default function Team() {
	return (
		<section id="team" className="w-full ~py-12/24">
			<div
				className="container mx-auto px-4 md:px-6"
				itemType="http://schema.org/Organization"
				itemScope
			>
				<h2 className="mb-12 text-center font-bold tracking-tighter ~text-3xl/5xl">
					Our Expert Team
				</h2>
				<div className="flex flex-col items-center justify-evenly gap-8 md:flex-row">
					{experts.map((expert) => {
						const { name, position, slug, image } = expert;

						if (!name || !position || !slug || !image) return null;

						return (
							<Member
								image={image}
								name={name}
								position={position}
								slug={slug}
								key={slug?.current}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export function Member({
	name,
	slug,
	position,
	image,
}: Required<
	Pick<ExpertsQueryResult[0], "name" | "position" | "image" | "slug">
>) {
	return (
		<div
			itemType="http://schema.org/Person"
			itemScope
			className="container relative flex max-w-96 flex-col items-center overflow-hidden rounded-lg border-2 bg-background text-center shadow-md transition-shadow hover:shadow-xl"
		>
			<Link
				aria-label={`${name} profile`}
				href={`/experts/${slug.current}`}
				className="absolute inset-0"
			/>
			<Image
				src={urlFor(image).auto("format").url()}
				alt={name}
				width={384}
				height={384}
				className="aspect-square w-full object-cover md:size-96"
			/>
			<h3
				className="mx-4 mt-4 text-2xl font-semibold leading-8 tracking-wide"
				itemProp="name"
			>
				{name}
			</h3>
			<Badge
				variant={"outline"}
				className="m-4 h-14 px-4 py-2"
				itemProp="jobTitle"
			>
				<p className="text-pretty text-gray-500">{position}</p>
			</Badge>
		</div>
	);
}
