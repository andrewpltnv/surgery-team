import CategoryBanner from "@/components/Category/CategoryBanner";
import CategoryArticles from "@/components/Category/CategoryArticles";
import Team from "@/components/Team";
import { getCategoryInfo } from "./api";
import { notFound } from "next/navigation";

export default async function Page(props: {
	params: Promise<{ category: string }>;
}) {
	const { category } = await props.params;

	const categoryInfo = await getCategoryInfo(category);
	if (!categoryInfo) notFound();

	const { title, articles, slug, description } = categoryInfo;
	if (!title || !slug?.current || !description) notFound();

	return (
		<div className="flex min-h-screen flex-col">
			<main className="flex-1">
				<CategoryBanner title={title} description={description} />
				<CategoryArticles
					category={[slug.current, title]}
					articles={articles}
				/>
				<Team />
			</main>
		</div>
	);
}
