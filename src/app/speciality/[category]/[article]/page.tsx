import { categories } from "@/components/Category/constants"

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
