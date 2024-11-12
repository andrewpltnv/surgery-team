import { sanityFetch } from "@/sanity/lib/client"
import { procedureArticleQuery } from "@/sanity/lib/queries"
import type { PortableTextComponents } from "@portabletext/react"
import type { ProcedureArticleQueryResult } from "@root/sanity.types"
import Link from "next/link"

export function getArticle({ article }: { article: string }) {
  const data = sanityFetch<ProcedureArticleQueryResult>({
    query: procedureArticleQuery,
    qParams: { article },
  })

  return data
}

export const components: PortableTextComponents = {
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
