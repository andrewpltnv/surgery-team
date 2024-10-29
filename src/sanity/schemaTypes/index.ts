import type { SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { expertType } from "./expertType";
import { reviewsType } from "./reviewsType";
import { reviewType } from "./reviewType";
import { expirienceType } from "./experience";
import { areaType } from "./areaType";
import { procedureArticleType } from "./procedureArticleType";
import { tagType } from "./tagType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		categoryType,
		procedureArticleType,
		tagType,
		reviewType,
		reviewsType,
		expirienceType,
		areaType,
		expertType,
	],
};
