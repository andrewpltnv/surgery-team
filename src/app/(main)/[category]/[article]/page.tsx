import SurgeonQuestionForm from "@/components/SurgeonQuestionForm"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PortableText, type PortableTextComponents } from "@portabletext/react"
import { sanityFetch } from "@/sanity/lib/client"
import Link from "next/link"
import { categoriesQuery, procedureArticleQuery } from "@/sanity/lib/queries"
import type { CategoriesQueryResult, ProcedureArticleQueryResult } from "@root/sanity.types"

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

const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      return (
        <Link href={value?.url ?? value?.href} target={"_blank"} rel={"_blank"}>
          {children}
        </Link>
      )
    },
  },
}

async function getArticle({ article }: { article: string }) {
  const data = await sanityFetch<ProcedureArticleQueryResult>({
    query: procedureArticleQuery,
    qParams: { article },
  })

  return data
}

export default async function Page(props: { params: Promise<{ category: string; article: string }> }) {
  const { article } = await props.params

  const data = await getArticle({ article })
  if (!data) return null
  const { title, body, category: categoryData } = data

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
        <div className="prose">{body && <PortableText value={body} components={components} />}</div>
      </div>
      <SurgeonQuestionForm />
    </>
  )
}
