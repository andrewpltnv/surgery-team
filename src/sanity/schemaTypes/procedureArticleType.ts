import { defineArrayMember, defineField, defineType } from "sanity"

export const procedureArticleType = defineType({
  type: "document",
  name: "procedureArticle",
  title: "Procedure Article",
  fields: [
    defineField({ type: "string", name: "title", title: "Title" }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({ type: "blockContent", name: "body" }),
    defineField({
      name: "schemaMarkup",
      type: "schemaMarkup",
      description: "Mainly for FAQ parts!",
      title: "Schema Markup",
    }),
    defineField({
      type: "array",
      name: "tags",
      title: "Tags",
      options: { layout: "tags" },
      of: [defineArrayMember({ type: "reference", to: [{ type: "tag" }] })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      tag0: "tags.0.title",
      tag1: "tags.1.title",
      tag2: "tags.2.title",
      tag3: "tags.3.title",
    },
    prepare(selection) {
      const { tag0, tag1, tag2, tag3 } = selection

      return {
        ...selection,
        subtitle:
          tag0 || tag1 || tag2 || tag3 ? `tags: ${[tag0, tag1, tag2, tag3].filter(Boolean).join(", ")}` : "No tags",
      }
    },
  },
})
