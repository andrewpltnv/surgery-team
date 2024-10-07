export default function Page({ params: { category, article } }: { params: { category: string; article: string } }) {
  return (
    <div>
      {/* TODO: Breadcrumps */}
      {category}
      {article}
    </div>
  )
}
