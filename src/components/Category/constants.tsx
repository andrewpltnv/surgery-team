import { Activity, Apple, LucideIcon, Microscope, Scissors, Stethoscope, Syringe } from "lucide-react"
import Hemorrhoid from "@/markdown/hemorrhoid.mdx"
import Bronchoscopy from "@/markdown/bronchoscopy.mdx"

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
    procedures: {
      ku: { title: "Кили передньої черевної стінки", page: () => <div></div> },
      pa: { title: "Пахова кила (ліхтенштейн, лапароскопія — TAPP)", page: () => <></> },
      go: { title: "Гострий апендицит", page: () => <></> },
      jo: { title: "Гострий та хронічний холецистит. ЖКХ.", page: () => <></> },
      di: { title: "Діафрагмальна кила", page: () => <></> },
      pe: { title: "Перфоративна виразка", page: () => <></> },
      vu: { title: "Видалення доброякісних та злоякісних новоутворень шкіри різних локалізацій", page: () => <></> },
      pr: { title: "Перитоніт, абсцес черевної порожнини, перфорація дивертикула, дивертикуліт", page: () => <></> },
      ki: { title: "Кісти підшлункової залози", page: () => <></> },
      pi: { title: "Післяопераційні грижі/кили", page: () => <></> },
    },
  },
  {
    name: "Проктологія",
    slug: "proctology",
    icon: Microscope,
    description: "Care for colorectal health",
    procedures: {
      hemorrhoid: { title: "Геморой - лазерне та Ligasure видалення", page: Hemorrhoid as () => JSX.Element },
      an: { title: "Анальна тріщина", page: () => <></> },
      go: { title: "Гострокінцеві кондиломи", page: () => <></> },
      jo: { title: "Гострий парапроктит", page: () => <></> },
      pa: { title: "Параректальна нориця (Хронічний парапроктит, Свищ)", page: () => <></> },
      ek: { title: "ЕКХ. Кісarticlesий поліп", page: () => <></> },
      gi: { title: "Гіпертрофований анальний сосочок", page: () => <></> },
      un: { title: "Анальні бахромки, гемороїдальні шкірні мітки, шкіряні бахромки", page: () => <></> },
      vu: { title: "Випадіння прямої кишки", page: () => <></> },
    },
  },
  {
    name: "Ендоскопія",
    slug: "endoscopy",
    icon: Stethoscope,
    description: "Advanced diagnostic procedures",
    procedures: {
      ga: { title: "Гастроскопія експертного рівня OLGA, Olgim, Seattle", page: () => <></> },
      ko: { title: "Колоноскопія експертного рівня", page: () => <></> },
      bronchoscopy: { title: "Бронхоскопія експертного рівня", page: Bronchoscopy as () => JSX.Element },
      vu: { title: "Видалення поліпів шлунку та товстої кишки", page: () => <></> },
      bu: { title: "Бужування стріктур", page: () => <></> },
      en: { title: "Ендоскопічне видалення пухлин товстої кишки та шлунку (EMR, ESD)", page: () => <></> },
      li: { title: "Лікування стравоходу Барета. Радіохвильовим методом", page: () => <></> },
      ly: { title: "Лігування варикозно розширених вен стравоходу та прямої кишки", page: () => <></> },
      al: {
        title: "Альтернативна думка (second opinion) стосовно доброякісних та злоякісних пухлин стравоходу",
        page: () => <></>,
      },
    },
  },
  {
    name: "Баріатрія",
    slug: "bariatrics",
    icon: Apple,
    description: "Comprehensive weight loss solutions",
    procedures: {
      me: {
        title: "Метаболічний консиліум (КМН Енд. Гастроент Оніщук Л. + Хірург Посохов Д.М. Хірург Жовніренко Д.О.)",
        page: () => <></>,
      },
      ry: { title: "Рукавна резекція шлунку (Sleeve – резекція)", page: () => <></> },
      ga: {
        title:
          "Гастрошунтування (gastric bypass, Roux-en-Y gastric bypass, Анастомоз по РУ. Обхідне гастрошунтування по РУ)",
        page: () => <></>,
      },
      vs: { title: "Встновлення внутрішньошлункового балону для схуднення", page: () => <></> },
      ek: { title: "Екстрація внутрішньошлункових балонів", page: () => <></> },
    },
  },
  {
    name: "Онкологія",
    slug: "oncological-surgery",
    icon: Activity,
    description: "Expert cancer treatment and care",
    procedures: {
      on: { title: "Онкологічний консиліум (Second Opinion) Американські протоколи NCCN", page: () => <></> },
      ko: {
        title:
          "Колоректальний рак. Сучасне лікування. Комплексний підхід. Наш підхід мінімальне виведення стом! Мультидисциплінарна команда",
        page: () => <></>,
      },
      can: { title: "Рак шлунку", page: () => <></> },
      cer: { title: "Рак стравоходу", page: () => <></> },
      pu: { title: "Пухлини та метастази печінки та підшлункової залози", page: () => <></> },
      la: { title: "Лапароскопічне видалення селезінки", page: () => <></> },
      hl: { title: "Пухлини наднирників та нирок", page: () => <></> },
      un: { title: "Пухлини молочної залози та м'яких тканин", page: () => <></> },
    },
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
