import { type SchemaTypeDefinition } from "sanity"

import { blockContentType } from "./blockContentType"
import { categoryType } from "./categoryType"
import { postType } from "./postType"
import { expertType } from "./expertType"
import { reviewsType } from "./reviewsType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, reviewsType, expertType],
}
