import type { Metadata } from "next";
import Profile from "./Profile";
import Testimonials from "@/components/Testimonials";
import { sanityFetch } from "@/sanity/lib/client";
import type { Expert, Reviews } from "@root/sanity.types";
import { expertBySlugQuery, slugsQuery } from "@/sanity/lib/queries";
// import Instagram from "./Instagram"

const getExpert = async (slug: string) => {
	const expert = await sanityFetch<Expert>({
		query: expertBySlugQuery,
		qParams: { slug },
		tags: ["expert"],
	});

	return expert;
};

export async function generateStaticParams() {
	const slugs = await sanityFetch<{ current: string }[]>({
		query: slugsQuery,
		tags: ["expert"],
	});

	return slugs.map(({ current: slug }) => ({ slug }));
}

export async function generateMetadata(props: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const params = await props.params;
	const { slug } = params;
	const expert = await getExpert(slug);

	if (!expert) {
		throw new Error("Image not found");
	}

	const { name, experience, position } = expert;

	return {
		title: name,
		description: [name, position, experience?.activity].join(" | "),
		openGraph: {
			title: name,
			description: [name, position, experience?.activity].join(" | "),
			url: `/experts/${slug}`,
			images: [{ url: "api/og" }],
		},
		twitter: {
			images: [{ url: "api/og" }],
		},
	};
}
export const revalidate = 60;

export default async function ExpertPage(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;

	const { slug } = params;

	const expert = await getExpert(slug);

	if (!expert || !expert.reviews) {
		throw new Error("Image not found");
	}

	return (
		<div className="flex-grow">
			<Profile expert={expert} />
			<Testimonials reviews={expert.reviews as unknown as Reviews} />
			{/* <Instagram /> */}
		</div>
	);
}
