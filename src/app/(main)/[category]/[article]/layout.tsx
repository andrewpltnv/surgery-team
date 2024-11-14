import Chat from "@/components/Chat";
import { getArticlesSlugsByCategory } from "./api";
import SurgeonQuestionForm from "@/components/SurgeonQuestionForm";

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
