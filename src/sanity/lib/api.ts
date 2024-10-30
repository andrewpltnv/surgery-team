import type { ExpertBySlugQueryResult } from "@root/sanity.types.ts";
import { sanityFetch } from "./client";
import { expertBySlugQuery, slugsQuery } from "./queries";

export const getExpert = async (slug: string) => {
	const expert = await sanityFetch<ExpertBySlugQueryResult>({
		query: expertBySlugQuery,
		qParams: { slug },
	});

	return expert;
};

export const getExpertsSlugs = async () => {
	const slugs = await sanityFetch<string[]>({
		query: slugsQuery,
	});

	return slugs;
};
