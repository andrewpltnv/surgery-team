import { categories } from "@/app/(main)/[category]/constants"
import SurgeonQuestionForm from "@/components/SurgeonQuestionForm"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PortableText } from "@portabletext/react"
import { sanityFetch } from "@/sanity/lib/client"
import { defineQuery, groq } from "next-sanity"
import Link from "next/link"
import type { ProcedureArticle } from "@root/sanity.types"

export async function generateStaticParams() {
  return categories.flatMap((category) =>
    Object.keys(category.procedures).map((article) => ({
      category: category.slug,
      article,
    }))
  )
}

const data = await sanityFetch<ProcedureArticle>({
  query: defineQuery(
    groq`
    *[_type=="post"][0]{
      title,
      categories[0]->,
      body[]
    }`
  ),
})

export default async function Page(props: { params: Promise<{ category: string; article: string }> }) {
  const params = await props.params

  const { category, article } = params

  const categoryInfo = categories.find((categoryInfo) => categoryInfo.slug === category)
  const procedure = categoryInfo?.procedures[article]
  const Component = procedure?.page

  if (!Component) {
    throw new Error("Component not found")
  }

  return (
    <>
      <div className="container mx-auto flex max-w-prose flex-auto flex-col p-4">
        <Breadcrumb className="my-2 pb-2 text-lg">
          <BreadcrumbList
            className="flex-nowrap overflow-x-hidden"
            itemType="https://schema.org/BreadcrumbList"
            itemScope
          >
            <BreadcrumbSeparator />
            <BreadcrumbItem itemType="https://schema.org/ListItem" itemProp="itemListElement" itemScope>
              <BreadcrumbLink asChild>
                <Link href={`/${category}`} itemProp="item">
                  {categoryInfo?.name}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="overflow-x-hidden">
              <BreadcrumbPage className="truncate">{procedure.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="prose">
          <Component />
        </div>
        <div className="prose">{data.body && <PortableText value={data.body} />}</div>
      </div>
      <SurgeonQuestionForm />
    </>
  )
}
