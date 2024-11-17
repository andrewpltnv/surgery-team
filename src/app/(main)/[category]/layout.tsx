import { sanityFetch } from "@/sanity/lib/client";
import { categoriesSlugsQuery, getCategoryInfo } from "./api";
import type { Metadata } from "next/types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const slugs = await sanityFetch<string[]>({ query: categoriesSlugsQuery });
	return slugs.map((slug) => ({ category: slug }));
}

export async function generateMetadata(props: {
	params: Promise<{ category: string }>;
}): Promise<Metadata> {
	const { category } = await props.params;

	const categoryInfo = await getCategoryInfo(category);
	if (!categoryInfo) notFound();

	const { title, description } = categoryInfo;

	return {
		title: title,
		description: description,
		openGraph: {
			title: title ?? "",
			description: description,
			url: `/${category}`,
		},
	};
}
export default function CategoryLayout({
	children,
}: { children: React.ReactNode }) {
	return children;
}
