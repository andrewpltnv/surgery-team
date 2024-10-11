import { categories } from "@/components/Category/constants"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

export async function generateStaticParams() {
  return categories.flatMap((category) =>
    Object.keys(category.procedures).map((article) => ({ category: category.slug, article }))
  )
}

export default function Page({ params: { category, article } }: { params: { category: string; article: string } }) {
  const categoryInfo = categories.find((categoryInfo) => categoryInfo.slug === category)
  const procedure = categoryInfo?.procedures[article]
  const Component = procedure?.page

  if (!Component) {
    throw new Error("Component not found")
  }

  return (
    <>
      <div className="container mx-auto flex flex-auto flex-col p-4">
        <Breadcrumb className="my-2 pb-2 text-lg">
          <BreadcrumbList className="flex-nowrap overflow-x-hidden">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/speciality/${category}`}>{categoryInfo?.name}</Link>
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
      </div>
    </>
  )
}
