import { defineField, defineType } from "sanity"

export const reviewType = defineType({
  type: "object",
  title: "Review",
  name: "review",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "review", type: "text" }),
    defineField({ name: "date", type: "string", title: "date" }),
    defineField({ name: "source", title: "Source", type: "string" }),
  ],
})
