import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { EXPERTS } from "@/app/(main)/experts/constants";
import type { Expert } from "@/app/(main)/experts/constants";

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
					{Object.entries(EXPERTS).map(([slug, { name, pos, image }]) => (
						<Member
							image={image}
							name={name}
							pos={pos}
							slug={slug}
							key={slug}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export function Member({
	name,
	slug,
	pos,
	image,
}: Pick<Expert, "name" | "pos" | "image"> & { slug: string }) {
	return (
		<div
			itemType="http://schema.org/Person"
			itemScope
			className="container relative flex max-w-96 flex-col items-center overflow-hidden rounded-lg border-2 bg-background text-center shadow-md transition-shadow hover:shadow-xl"
		>
			{slug !== undefined && (
				<Link
					aria-label={`${name} profile`}
					href={`/experts/${slug}`}
					className="absolute inset-0"
				/>
			)}
			<Image
				src={image}
				alt={name}
				width={384}
				height={384}
				className="aspect-square w-full object-cover md:size-96"
			/>
			<h3
				className="m-4 text-2xl font-semibold leading-8 tracking-wide"
				itemProp="name"
			>
				{name}
			</h3>
			<Badge variant={"outline"} className="mb-4" itemProp="jobTitle">
				<p className="text-pretty text-gray-500">{pos}</p>
			</Badge>
		</div>
	);
}
