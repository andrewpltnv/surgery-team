import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t bg-background px-4 py-6 shadow-md sm:flex-row md:px-6">
      <p className="text-xs text-muted-foreground">© 2024 SurgeryTeam. All rights reserved.</p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          Oncological Surgery
        </Link>
      </nav>
    </footer>
  )
}
