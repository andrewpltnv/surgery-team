import { UserIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const expertType = defineType({
  name: "expert",
  title: "Expert",
  type: "document",
  icon: UserIcon,
  groups: [
    { name: "bio", title: "Bio" },
    { name: "seo", title: "SEO" },
    { name: "assets", title: "Photos & ..." },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      group: "bio",
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "seo",
      options: { source: "name" },
    }),
    defineField({
      name: "image",
      type: "image",
      group: "assets",
      options: { hotspot: true },
    }),
    // defineField({
    //   name: "bio",
    //   type: "array",
    //   group: "bio",
    //   of: [defineArrayMember({ type: "block", styles: [{ title: "Normal", value: "normal" }], lists: [] })],
    // }),
    defineField({
      type: "array",
      name: "areasOfExpertise",
      title: "Areas Of Expertise",
      group: "bio",
      of: [
        defineArrayMember({
          type: "object",
          name: "area",
          title: "Area",
          fields: [
            { type: "string", name: "name" },
            { type: "reference", name: "relatedPost", to: { type: "post" } },
          ],
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "experience",
      title: "Expirience",
      group: "bio",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      type: "array",
      name: "education",
      title: "Education",
      group: "bio",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "reviews",
      type: "reference",
      title: "Reviews",
      to: { type: "reviews" },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
})
