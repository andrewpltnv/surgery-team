import { defineField, defineType } from "sanity"

export const customerReviewType = defineType({
  name: "review",
  title: "Customer Review",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "review", type: "text" }),
    defineField({ name: "date", type: "date", title: "date" }),
    defineField({ name: "source", title: "Source", type: "string" }),
  ],
})
