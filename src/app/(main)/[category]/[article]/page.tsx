import CustomPortableText from "@/components/PortableText"
import SurgeonQuestionForm from "@/components/SurgeonQuestionForm"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { sanityFetch } from "@/sanity/lib/client"
import { categoriesQuery, procedureArticleQuery } from "@/sanity/lib/queries"
import type { CategoriesQueryResult, FaqQResult, ProcedureArticleQueryResult } from "@root/sanity.types"
import { groq } from "next-sanity"
// import { FAQPageJsonLd } from "next-seo"
import Link from "next/link"

export async function generateStaticParams() {
  const categories = await sanityFetch<CategoriesQueryResult>({
    query: categoriesQuery,
  })

  if (!categories) return []
  const res: { category: string; article: string }[] = []

  for (const category of categories) {
    if (!category.articles) continue
    for (const article of category.articles) {
      res.push({ category: category.slug?.current ?? "", article: article.slug?.current ?? "" })
    }
  }

  return res
}

async function getArticle({ article }: { article: string }) {
  const data = await sanityFetch<ProcedureArticleQueryResult>({
    query: procedureArticleQuery,
    qParams: { article },
  })

  if (!data) throw new Error("There is no article")

  return data
}

const faqQ = groq`*[_type == "procedureArticle" && defined(schemaMarkup)].schemaMarkup`
const faq = await sanityFetch<FaqQResult>({ query: faqQ })

console.dir(faq)

export default async function Page(props: { params: Promise<{ category: string; article: string }> }) {
  const { article } = await props.params

  const { title, body, category: categoryData } = await getArticle({ article })

  if (!title || !body || !categoryData) return null

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
                <Link href={`/${categoryData?.slug?.current}`} itemProp="item">
                  {categoryData?.title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="overflow-x-hidden">
              <BreadcrumbPage className="truncate">{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="prose">
          <CustomPortableText value={body} />
        </div>
      </div>
      <SurgeonQuestionForm />
    </>
  )
}
