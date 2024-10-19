import Bronchoscopy from "./bronchoscopy.mdx"
import AlternativeThought from "./alternative_thought.mdx"

export const endoscopyArticles = {
  ga: { title: "Гастроскопія експертного рівня OLGA, Olgim, Seattle", page: () => <></> },
  ko: { title: "Колоноскопія експертного рівня", page: () => <></> },
  bronchoscopy: { title: "Бронхоскопія експертного рівня", page: () => <Bronchoscopy /> },
  vu: { title: "Видалення поліпів шлунку та товстої кишки", page: () => <></> },
  bu: { title: "Бужування стріктур", page: () => <></> },
  en: { title: "Ендоскопічне видалення пухлин товстої кишки та шлунку (EMR, ESD)", page: () => <></> },
  li: { title: "Лікування стравоходу Барета. Радіохвильовим методом", page: () => <></> },
  ly: { title: "Лігування варикозно розширених вен стравоходу та прямої кишки", page: () => <></> },
  al: {
    title: "Альтернативна думка (second opinion) в діагностиці пухлин шлунково-кишкового тракту",
    page: () => <AlternativeThought />,
  },
}
