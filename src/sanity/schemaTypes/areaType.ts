import { defineType } from "sanity";

export const areaType = defineType({
	type: "object",
	name: "area",
	title: "Area",
	fields: [
		{ type: "string", name: "name" },
		{
			type: "reference",
			name: "relatedArticle",
			to: { type: "procedureArticle" },
		},
	],
});
