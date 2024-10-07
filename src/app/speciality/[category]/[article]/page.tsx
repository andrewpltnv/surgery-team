import { categories } from "@/components/Category/constants"

export async function generateStaticParams() {
  return categories.flatMap((category) =>
    Object.keys(category.procedures).map((article) => ({ category: category.slug, article }))
  )
}

export default function Page({ params: { category, article } }: { params: { category: string; article: string } }) {
  const Component = categories.find((categoryInfo) => categoryInfo.slug === category)?.procedures[article].page

  if (!Component) {
    throw new Error("Component not found")
  }

  return (
    <div className="container prose m-auto p-4">
      {/* TODO: Breadcrumps */}
      <Component />
    </div>
  )
}
