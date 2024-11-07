import { Activity, Apple, type LucideIcon, Microscope, Scissors, Stethoscope, Syringe } from "lucide-react"
import { bariatricsArticles } from "./markdown/bariatrics"
import { generalArticles } from "./markdown/general"
import { proctologyArticles } from "./markdown/proctology"
import { endoscopyArticles } from "./markdown/endoscopy"
import { oncologicalArticles } from "./markdown/oncological"

export type CategoryType = {
  name: string
  slug: string
  icon: LucideIcon
  description: string
  procedures: {
    [key: string]: { title: string; page: () => JSX.Element }
  }
}

export const categories: CategoryType[] = [
  {
    name: "Хірургія",
    slug: "general-surgery",
    icon: Syringe,
    description: "General and urgent surgury",
    procedures: generalArticles,
  },
  {
    name: "Проктологія",
    slug: "proctology",
    icon: Microscope,
    description: "Care for colorectal health",
    procedures: proctologyArticles,
  },
  {
    name: "Ендоскопія",
    slug: "endoscopy",
    icon: Stethoscope,
    description: "Advanced diagnostic procedures",
    procedures: endoscopyArticles,
  },
  {
    name: "Баріатрія",
    slug: "bariatrics",
    icon: Apple,
    description: "Comprehensive weight loss solutions",
    procedures: bariatricsArticles,
  },
  {
    name: "Онкологія",
    slug: "oncological-surgery",
    icon: Activity,
    description: "Expert cancer treatment and care",
    procedures: oncologicalArticles,
  },
  {
    name: "Пластична хірургія",
    slug: "plastic-surgery",
    icon: Scissors,
    description: "Aesthetic and reconstructive procedures",
    procedures: {
      bl: { title: "Блефаропластика", page: () => <></> },
      ma: { title: "Мамопластика", page: () => <></> },
      re: { title: "Редукційна мамопластика. Зменшення грудей", page: () => <></> },
      ab: { title: "Абдомінопластика", page: () => <></> },
      li: { title: "Ліпосакція", page: () => <></> },
      pl: { title: "Пластика рубців", page: () => <></> },
    },
  },
]
