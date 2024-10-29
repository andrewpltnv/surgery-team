import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Blog")
		.items([
			S.documentTypeListItem("procedureArticle").title("Articles"),
			S.documentTypeListItem("category").title("Categories"),
			S.documentTypeListItem("expert").title("Experts"),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() &&
					!["procedureArticle", "category", "expert"].includes(item.getId()!),
			),
		]);
