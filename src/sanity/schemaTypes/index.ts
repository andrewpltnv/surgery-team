import { type SchemaTypeDefinition } from "sanity"

import { blockContentType } from "./blockContentType"
import { categoryType } from "./categoryType"
import { postType } from "./postType"
import { expertType } from "./expertType"
import { customerReviewType } from "./customerReview"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, expertType, customerReviewType],
}
