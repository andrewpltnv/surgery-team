import { sanityFetch } from "@/sanity/lib/client";
import type { ExpertBySlugQueryResult } from "@root/sanity.types";
import { groq } from "next-sanity";

export const expertsSlugsQuery = groq`*[_type=="expert"].slug.current`;

export const expertsQuery = groq`*[_type=="expert"][]`;

export const expertBySlugQuery = groq`*[_type=="expert" && slug.current == $slug][0]{
  _id,
  name, 
  slug,
  image,
  experience,
  position,
  education,
  areasOfExpertise,
  reviews->
}`;

export const getExpert = async (slug: string) => {
	const expert = await sanityFetch<ExpertBySlugQueryResult>({
		query: expertBySlugQuery,
		qParams: { slug },
	});

	if (!expert) null;

	return expert;
};

export const getExpertsSlugs = async () => {
	const slugs = await sanityFetch<string[]>({
		query: expertsSlugsQuery,
	});

	return slugs;
};
