import { defineField, defineType } from "sanity"

export const reviewsType = defineType({
  name: "reviews",
  title: "Reviews",
  type: "document",
  fields: [
    defineField({
      type: "reference",
      name: "expert",
      title: "Expert",
      to: [{ type: "expert" }],
    }),
    defineField({
      type: "array",
      name: "reviewsArray",
      title: "Reviews",
      options: { modal: { type: "dialog" } },
      of: [
        {
          type: "object",
          name: "review",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({ name: "review", type: "text" }),
            defineField({ name: "date", type: "string", title: "date" }),
            defineField({ name: "source", title: "Source", type: "string" }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "expert.name",
      media: "expert.image",
    },
  },
})
