import { Menu, Stethoscope } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import React from "react"
import { cn } from "@/lib/utils"
import { categories } from "../Category/constants"
import { EXPERTS } from "@/app/experts/constants"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

export default function Header() {
  return (
    <header role="navigation" className="flex h-14 items-center justify-between bg-background shadow-md ~/lg:~px-2/6">
      <Link className="flex items-center justify-center" href="/#">
        <Button variant={"ghost"}>
          <Stethoscope className="mr-2 h-6 w-6" />
          <span className="font-bold">SurgeryTeam</span>
        </Button>
      </Link>
      <div className="hidden md:block">
        <NavMenu />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="inline-flex size-12 p-0 md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"top"} className="flex justify-end p-2">
          <NavMenu />
        </SheetContent>
      </Sheet>
    </header>
  )
}

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Напрями</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid items-stretch gap-3 p-6 sm:grid-cols-[1fr_1fr] md:w-[400px] lg:w-[500px]">
              {categories.map(({ name, slug, icon: Icon }) => (
                <ListItem key={slug} href={`/speciality/${slug}`}>
                  <Icon className="mr-2 h-6 w-6" />
                  {name}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Лікарі</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-6 px-2 py-6">
              {Object.entries(EXPERTS).map(([slug, { name }], i) => (
                <ListItem key={i} href={`/experts/${slug}`}>
                  {/* <Image
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="mr-2 aspect-square rounded-full object-cover"
                  /> */}
                  <h3 className="text-base font-medium leading-none">{name}</h3>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({ className, children, href }: { className?: string; href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        legacyBehavior
        passHref
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{children}</NavigationMenuLink>
      </Link>
    </li>
  )
}
ListItem.displayName = "ListItem"
