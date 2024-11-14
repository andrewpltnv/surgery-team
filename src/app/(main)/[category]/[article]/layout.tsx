import Chat from "@/components/Chat";
import { getArticlesSlugsByCategory } from "./api";
import SurgeonQuestionForm from "@/components/SurgeonQuestionForm";
// import type {} from "@root/sanity.types";
// import { groq } from "next-sanity";
// import { sanityFetch } from "@/sanity/lib/client";

// const faqQ = groq`*[_type == "procedureArticle" && defined(schemaMarkup)].schemaMarkup`;
// const faq = await sanityFetch({ query: faqQ });

// console.log(faq);

export async function generateStaticParams({
	params,
}: { params: Promise<{ category: string }> }) {
	const { category } = await params;
	const slugs = await getArticlesSlugsByCategory(category);

	return slugs.map(({ slug }) => ({
		article: slug,
	}));
}

export default function ArticleLayout({
	children,
}: { children: React.ReactElement }) {
	return (
		<>
			{children}
			<SurgeonQuestionForm />
			<Chat />
		</>
	);
}
