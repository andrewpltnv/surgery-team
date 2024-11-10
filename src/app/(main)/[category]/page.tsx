import CategoryBanner from "@/components/Category/CategoryBanner"
import CategoryArticles from "@/components/Category/CategoryArticles"
import Team from "@/components/Team"
import type { Metadata } from "next"
import { categoriesQuery, categoriesSlugsQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/client"
import type { Category, ProcedureArticle } from "@root/sanity.types"

//TODO rework queries to get all the data in one query (?)
// or more atomic aproach
type CategoryWithArticles = Omit<Category, "articles"> & {
  articles: Pick<ProcedureArticle, "title" | "slug">[]
}

async function getCategoryInfo(slug: string) {
  const categoryInfo = await sanityFetch<CategoryWithArticles[]>({
    query: categoriesQuery,
    qParams: { slug },
  })

  const res = categoryInfo.find((c) => c.slug?.current === slug)
  if (!res) {
    throw new Error("Category not found")
  }
  return res
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({ query: categoriesSlugsQuery })
  return slugs.map((slug) => ({ category: slug }))
}

export async function generateMetadata(props: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await props.params

  const categoryInfo = await getCategoryInfo(category)
  console.log({ categoryInfo })
  const { title, description } = categoryInfo ?? {}

  if (!title || !description) {
    throw new Error("Category not found")
  }

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `/${category}`,
    },
  }
}

export default async function Page(props: { params: Promise<{ category: string }> }) {
  const { category } = await props.params

  const { title, articles, slug, description } = await getCategoryInfo(category)

  console.log({ title, slug, description })
  if (!title || !slug?.current || !description) {
    console.log({ title, slug, description })
    throw new Error("Category not found")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <CategoryBanner title={title} description={description} />
        <CategoryArticles category={[slug.current, title]} articles={articles} />
        <Team />
      </main>
    </div>
  )
}
