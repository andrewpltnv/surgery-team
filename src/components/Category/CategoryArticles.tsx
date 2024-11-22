import Link from "next/link";
import { Button } from "../ui/button";
import { LucideNotebookText } from "lucide-react";
import type { CategoriesQueryResult } from "@root/sanity.types";
import type { Route } from "next";

export default function CategoryArticles({
	category,
	articles,
}: {
	category: [string, string];
	articles: CategoriesQueryResult[0]["articles"];
}) {
	return (
		<div className="container m-auto max-w-prose px-4 pb-0 pt-6">
			<h3 className="m-auto text-center font-semibold tracking-wide ~text-xl/3xl ~p-4/8">
				Статті на тему {category[1]}
			</h3>
			<div className="flex flex-col space-y-4">
				{articles?.map(({ title, slug }) => (
					<Button
						variant={"link"}
						className="w-fit hyphens-auto text-pretty"
						key={slug?.current}
						asChild
					>
						<Link
							href={
								`${category[0]}/${slug?.current ? slug.current : ""}` as Route
							}
							className="inline-flex h-fit gap-2 text-start align-bottom text-base"
						>
							<LucideNotebookText className="h-6 w-6 shrink-0" /> {title}
						</Link>
					</Button>
				))}
			</div>
		</div>
	);
}
