import { groq } from "next-sanity"

export const expertsSlugsQuery = groq`*[_type=="expert"].slug.current`
export const expertBySlugQuery = groq`*[_type=="expert" && slug.current == $slug][0]{
  _id,
  name, 
  slug,
  image,
  experience,
  position,
  education,
  areasOfExpertise,
  schemaMarkup,
  reviews->
}`

export const expertsQuery = groq`*[_type=="expert"][]`

export const categoriesSlugsQuery = groq`*[_type=="category"].slug.current`

export const categoriesQuery = groq`*[_type=="category"][]{
  _id,
  "title": coalesce(title, name),
  slug,
  icon,
  "description": coalesce(description, ""),
  articles[]->{
    _id,
    title,
    slug,
  }
}`

export const procedureArticleQuery = groq`*[_type=="procedureArticle" && slug.current == $article][0]{
  _type,
  title,
  body[],
}`
