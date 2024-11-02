import { groq } from "next-sanity";

export const expertsSlugsQuery = groq`*[_type=="expert"].slug.current`;
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
}`;

export const expertsQuery = groq`*[_type=="expert"][]`;
