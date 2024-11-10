import { defineArrayMember, defineField, defineType } from "sanity"

export const categoryType = defineType({
  type: "document",
  name: "category",
  title: "Category",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({
      type: "text",
      name: "description",
      title: "Description",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "icon.manager",
      name: "icon",
      title: "Icon",
    }),
    defineField({
      type: "array",
      name: "articles",
      title: "Articles",
      of: [
        defineArrayMember({
          type: "reference",
          name: "articles",
          to: [{ type: "procedureArticle" }],
        }),
      ],
      initialValue: [],
    }),
    defineField({
      type: "array",
      name: "experts",
      title: "Experts",
      of: [defineArrayMember({ type: "reference", to: [{ type: "expert" }] })],
    }),
    defineField({
      type: "array",
      name: "contacts",
      title: "Emergency Contact",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      type: "array",
      name: "accreditations",
      title: "Accreditation",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "icon.metadata",
    },
    prepare(selection) {
      const { title, media } = selection

      return {
        title: title,
        media: media ? <span dangerouslySetInnerHTML={{ __html: media.inlineSvg }} /> : null,
      }
    },
  },
})
