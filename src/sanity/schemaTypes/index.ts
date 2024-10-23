import { type SchemaTypeDefinition } from "sanity"

import { blockContentType } from "./blockContentType"
import { categoryType } from "./categoryType"
import { postType } from "./postType"
import { expertType } from "./expertType"
import { reviewsType } from "./reviewsType"
import { reviewType } from "./reviewType"
import { expirienceType } from "./experience"
import { areaType } from "./areaType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, reviewType, reviewsType, expirienceType, areaType, expertType],
}
