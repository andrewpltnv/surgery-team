import Hemorrhoid from "./hemorrhoid.mdx"
import AnalCrack from "./Анальна_тріщина.mdx"
import PararectalFistula from "./Параректальна_нориця.mdx"
import PilonidalCyst from "./Пілонідальна_кіста.mdx"
import RectumPain from "./Біль_у_прямій_кишці.mdx"

export const proctologyArticles = {
  hemorrhoid: { title: "Геморой - лазерне та Ligasure видалення", page: () => <Hemorrhoid /> },
  analCrack: { title: "Анальна тріщина", page: () => <AnalCrack /> },
  rectumPain: { title: "Біль у прямій кишці", page: () => <RectumPain /> },
  pinolidalCyst: { title: "Пілонідальна кіста", page: () => <PilonidalCyst /> },
  pararectalFistula: { title: "Параректальна нориця (Хронічний парапроктит, Свищ)", page: () => <PararectalFistula /> },
}
