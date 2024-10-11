import { Menu, Stethoscope } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const ROUTES = [
  { name: "About us", link: "/about" },
  { name: "Contacts", link: "/contacts" },
]

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between px-4 shadow-md lg:px-6">
      <Link className="flex items-center justify-center" href="/#">
        <Button variant={"ghost"}>
          <Stethoscope className="mr-2 h-6 w-6" />
          <span className="font-bold">SurgeryTeam</span>
        </Button>
      </Link>
      <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
        {ROUTES.map(({ name, link }, i) => (
          <Button asChild variant={"outline"} key={i}>
            <Link className="text-sm font-medium underline-offset-4 hover:underline" href={link}>
              {name}
            </Link>
          </Button>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="inline-flex size-12 p-0 md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"top"}>
          <nav className="ml-auto flex flex-col gap-4 sm:gap-6">
            {ROUTES.map(({ name, link }, i) => (
              <Button asChild variant={"link"} key={i}>
                <Link className="font-medium ~text-base/xl" href={link}>
                  {name}
                </Link>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
