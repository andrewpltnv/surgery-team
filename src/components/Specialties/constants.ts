import { Syringe, Microscope, Stethoscope, Apple, Activity, Scissors } from "lucide-react";

export const specialties = [
  {
    name: "Хірургія",
    icon: Syringe,
    procedures: [
      "Кили передньої черевної стінки",
      "Пахова кила (ліхтенштейн, лапароскопія — TAPP)",
      "Гострий апендицит",
      "Гострий та хронічний холецистит. ЖКХ.",
      "Діафрагмальна кила",
      "Перфоративна виразка",
      "Видалення доброякісних та злоякісних новоутворень шкіри різних локалізацій",
      "Перитоніт, абсцес черевної порожнини, перфорація дивертикула, дивертикуліт",
      "Кісти підшлункової залози",
      "Післяопераційні грижі/кили",
    ],
  },
  {
    name: "Проктологія",
    icon: Microscope,
    procedures: [
      "Геморой - лазерне та Ligasure видалення",
      "Анальна тріщина",
      "Гострокінцеві кондиломи",
      "Гострий парапроктит",
      "Параректальна нориця (Хронічний парапроктит, Свищ)",
      "ЕКХ. Кіста куприка. Пілонідальна кіста. Радикальне та лазерне видалення",
      "Анальний поліп",
      "Гіпертрофований анальний сосочок",
      "Анальні бахромки, гемороїдальні шкірні мітки, шкіряні бахромки",
      "Випадіння прямої кишки",
    ],
  },
  {
    name: "Ендоскопія",
    icon: Stethoscope,
    procedures: [
      "Гастроскопія експертного рівня OLGA, Olgim, Seattle",
      "Колоноскопія експертного рівня",
      "Бронхоскопія експертного рівня",
      "Видалення поліпів шлунку та товстої кишки",
      "Бужування стріктур",
      "Ендоскопічне видалення пухлин товстої кишки та шлунку (EMR, ESD)",
      "Лікування стравоходу Барета. Радіохвильовим методом",
      "Лігування варикозно розширених вен стравоходу та прямої кишки",
      "Альтернативна думка (second opinion) стосовно доброякісних та злоякісних пухлин стравоходу",
    ],
  },
  {
    name: "Баріатрія",
    icon: Apple,
    procedures: [
      "Метаболічний консиліум (КМН Енд. Гастроент Оніщук Л. + Хірург Посохов Д.М. Хірург Жовніренко Д.О.)",
      "Рукавна резекція шлунку (Sleeve – резекція)",
      "Гастрошунтування (gastric bypass, Roux-en-Y gastric bypass, Анастомоз по РУ. Обхідне гастрошунтування по РУ)",
      "Встновлення внутрішньошлункового балону для схуднення",
      "Екстрація внутрішньошлункових балонів",
    ],
  },
  {
    name: "Онкологія",
    icon: Activity,
    procedures: [
      "Онкологічний консиліум (Second Opinion) Американські протоколи NCCN",
      "Колоректальний рак. Сучасне лікування. Комплексний підхід. Наш підхід мінімальне виведення стом! Мультидисциплінарна команда",
      "Рак шлунку",
      "Рак стравоходу",
      "Пухлини та метастази печінки та підшлункової залози",
      "Лапароскопічне видалення селезінки",
      "Пухлини наднирників та нирок",
      "Пухлини молочної залози та м'яких тканин",
    ],
  },
  {
    name: "Пластична хірургія",
    icon: Scissors,
    procedures: [
      "Блефаропластика",
      "Мамопластика",
      "Редукційна мамопластика. Зменшення грудей",
      "Абдомінопластика",
      "Ліпосакція",
      "Пластика рубців",
    ],
  },
];