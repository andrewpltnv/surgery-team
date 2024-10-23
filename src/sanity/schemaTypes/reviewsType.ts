import { defineArrayMember, defineField, defineType } from "sanity"

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
        defineArrayMember({
          type: "review",
        }),
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
