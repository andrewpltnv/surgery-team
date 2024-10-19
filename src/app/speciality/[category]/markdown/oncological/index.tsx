import OncoConsilium from "./Онкоконсиліум_та_друга_думка_нссн.mdx"
import ColorectalCancer from "./Колоректальний_рак.mdx"
import StomachCancer from "./Рак_шлунку.mdx"
import EsophagealCancer from "./Рак_стравоходу.mdx"

export const oncologicalArticles = {
  oncologocalConsilium: {
    title: "Онкологічний консиліум (Second Opinion) Американські протоколи NCCN",
    page: () => <OncoConsilium />,
  },
  colateralCancer: {
    title:
      "Колоректальний рак. Сучасне лікування. Комплексний підхід. Наш підхід мінімальне виведення стом! Мультидисциплінарна команда",
    page: () => <ColorectalCancer />,
  },
  stomachCancer: { title: "Рак шлунку", page: () => <StomachCancer /> },
  esophagealCancer: { title: "Рак стравоходу", page: () => <EsophagealCancer /> },
  pu: { title: "Пухлини та метастази печінки та підшлункової залози", page: () => <></> },
  la: { title: "Лапароскопічне видалення селезінки", page: () => <></> },
  hl: { title: "Пухлини наднирників та нирок", page: () => <></> },
  un: { title: "Пухлини молочної залози та м'яких тканин", page: () => <></> },
}
