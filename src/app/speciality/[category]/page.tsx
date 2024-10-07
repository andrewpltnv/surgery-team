import CategoryBanner from "@/components/Category/CategoryBanner"
import CategoryArticles from "@/components/Category/CategoryArticles"
import { categories } from "@/components/Category/constants"
import Team from "@/components/Team"

export default function Page({ params: { category } }: { params: { category: string } }) {
  const categoryInfo = categories.find((categoryInfo) => categoryInfo.slug === category)

  if (!categoryInfo) {
    throw new Error("Category not found")
  }

  const { name, procedures, slug, description } = categoryInfo

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <CategoryBanner title={name} description={description} />
        <CategoryArticles category={[slug, name]} procedures={procedures} />
        <Team />
      </main>
    </div>
  )
}
