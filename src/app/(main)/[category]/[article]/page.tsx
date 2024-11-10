import { categories } from "@/app/(main)/[category]/constants"
import SurgeonQuestionForm from "@/components/SurgeonQuestionForm"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
// import { PortableText } from "@portabletext/react"
import { sanityFetch } from "@/sanity/lib/client"
import Link from "next/link"
// import type { ProcedureArticle } from "@root/sanity.types"
import { procedureArticleQuery } from "@/sanity/lib/queries"
import type { ProcedureArticle } from "@root/sanity.types"

export async function generateStaticParams() {
  return categories.flatMap((category) =>
    Object.keys(category.procedures).map((article) => ({
      category: category.slug,
      article,
    }))
  )
}

async function getArticle({ article }: { article: string }) {
  const data = await sanityFetch<ProcedureArticle>({
    query: procedureArticleQuery,
    qParams: { article },
  })

  console.log({ article, data })

  return data
}

export default async function Page(props: { params: Promise<{ category: string; article: string }> }) {
  const { category, article } = await props.params

  const { title, body } = await getArticle({ article })
  console.log({ title, body })

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
                  {title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="overflow-x-hidden">
              {/* <BreadcrumbPage className="truncate">{procedure.title}</BreadcrumbPage> */}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* <div className="prose">{data.body && <PortableText value={data.body} />}</div> */}
      </div>
      <SurgeonQuestionForm />
    </>
  )
}
