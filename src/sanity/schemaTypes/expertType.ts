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
          type: "reference",
          to: [{ type: "review" }],
          title: "Reviews",
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
