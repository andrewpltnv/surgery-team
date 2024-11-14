import { sanityFetch } from "@/sanity/lib/client";
import type { CategoriesQueryResult } from "@root/sanity.types";
import { groq } from "next-sanity";

export const categoriesSlugsQuery = groq`*[_type=="category"].slug.current`;

export const categoriesQuery = groq`*[_type=="category"][]{
  _id,
  "title": coalesce(title, name),
  slug,
  icon,
  "description": coalesce(description, ""),
  articles[]->{
    _id,
    title,
    slug,
  }
}`;

export const procedureArticlesSlugsByCategorySlug = groq`
  *[_type=="category" && slug.current == $category][0].articles[]->{
    "slug": slug.current
  }
`;

export async function getCategoryInfo(slug: string) {
	const categoryInfo = await sanityFetch<CategoriesQueryResult>({
		query: categoriesQuery,
		qParams: { slug },
	});

	const res = categoryInfo.find((c) => c.slug?.current === slug);
	if (!res) {
		throw new Error("Category not found");
	}
	return res;
}
