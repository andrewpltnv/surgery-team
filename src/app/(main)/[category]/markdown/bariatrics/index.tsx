import Anastomosis from "./anastomosis.mdx"
import BallonInsert from "./ballonInsert.mdx"
import BallonReject from "./ballonReject.mdx"
import MetabolicCons from "./metabolicConsileum.mdx"
import SleeveResection from "./sleeveResection.mdx"

export const bariatricsArticles = {
  metabolicConsileum: {
    title: "Метаболічний консиліум (КМН Енд. Гастроент Оніщук Л. + Хірург Посохов Д.М. Хірург Жовніренко Д.О.)",
    page: () => <MetabolicCons />,
  },
  sleeveResection: { title: "Рукавна резекція шлунку (Sleeve – резекція)", page: () => <SleeveResection /> },
  anastomosis: {
    title:
      "Гастрошунтування (gastric bypass, Roux-en-Y gastric bypass, Анастомоз по РУ. Обхідне гастрошунтування по РУ)",
    page: () => <Anastomosis />,
  },
  ballonInsert: { title: "Встновлення внутрішньошлункового балону для схуднення", page: () => <BallonInsert /> },
  ballonReject: { title: "Екстрація внутрішньошлункових балонів", page: () => <BallonReject /> },
}
