import Link from "next/link"
import { Button } from "../ui/button"
import { LucideNotebookText } from "lucide-react"

export default function CategoryArticles({
  category,
  procedures,
}: {
  category: [string, string]
  procedures: string[][]
}) {
  return (
    <div className="container m-auto max-w-[50rem] px-4 pb-0 pt-6">
      <h3 className="m-auto text-center font-semibold tracking-wide ~text-xl/3xl ~p-4/8">
        Статті на тему {category[1]}
      </h3>
      <div className="flex flex-col space-y-4">
        {procedures.map(([id, procedure], index) => (
          <Button variant={"link"} className="w-fit hyphens-auto text-pretty" key={index} asChild>
            <Link href={`${category[0]}/${id}`} className="inline-flex gap-2 text-start align-bottom text-base">
              <LucideNotebookText /> {procedure}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
