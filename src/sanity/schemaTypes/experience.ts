import { defineField, defineType } from "sanity"

export const expirienceType = defineType({
  type: "object",
  name: "experience",
  title: "Expirience",
  fields: [
    defineField({
      name: "start",
      title: "Рік початку практики",
      type: "number",
    }),
    defineField({
      name: "activity",
      title: "Активність",
      type: "string",
    }),
  ],
})
