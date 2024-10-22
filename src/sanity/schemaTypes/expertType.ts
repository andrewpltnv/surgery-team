import { UserIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const expertType = defineType({
  name: "expert",
  title: "Expert",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "reviews",
      title: "Reviews",
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
      title: "name",
      media: "image",
    },
  },
})
