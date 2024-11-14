import { sanityFetch } from "@/sanity/lib/client";
import type {
	ProcedureArticleQueryResult,
	ProcedureArticlesSlugsByCategorySlugResult,
} from "@root/sanity.types";
import { groq } from "next-sanity";
import { procedureArticlesSlugsByCategorySlug } from "../api";

export const procedureArticleQuery = groq`
  *[_type=="procedureArticle" && slug.current == $article][0]{
    _id,
    _type,
    title,
    slug,
    "category": *[_type=="category" && references(^._id)][0]{
      "slug":slug.current,
      title
    },
    body[],
		"schemaMarkup": coalesce(schemaMarkup[], [])	
  }`;

export async function getArticle({ article }: { article: string }) {
	const data = await sanityFetch<ProcedureArticleQueryResult>({
		query: procedureArticleQuery,
		qParams: { article },
	});

	if (!data) throw new Error("There is no article");

	return data;
}

export async function getArticlesSlugsByCategory(category: string) {
	const slugs = await sanityFetch<ProcedureArticlesSlugsByCategorySlugResult>({
		query: procedureArticlesSlugsByCategorySlug,
		qParams: { category },
	});

	if (!slugs) return [];

	return slugs;
}
