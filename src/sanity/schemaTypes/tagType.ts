import { defineField, defineType } from "sanity"

export const tagType = defineType({
  type: "document",
  name: "tag",
  title: "Tag",
  fields: [
    defineField({ type: "string", name: "title", title: "Title" }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
  ],
})
