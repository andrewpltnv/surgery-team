import Image from "next/image"
import { MapPin, Briefcase, GraduationCap, Stethoscope } from "lucide-react"
import { EXPERTS } from "@/components/Team"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  return EXPERTS.map(({ slug }) => ({ slug }))
}

const experts = new Map()
EXPERTS.forEach(({ name, pos, image, slug }) => experts.set(slug, { name, pos, image }))

export default function ExpertPage({ params: { slug } }: { params: { slug: string } }) {
  const { image, name, pos } = experts.get(slug)
  if (!image) {
    throw new Error("Image not found")
  }

  return (
    <div className="flex-grow bg-slate-200">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <div className="flex flex-col items-center overflow-hidden rounded-lg text-center">
              <Image src={image} alt={name} width={384} height={384} className="w-full" />
              <h3 className="m-4 text-2xl font-semibold leading-8 tracking-wide">{name}</h3>
              <Badge variant={"outline"} className="mb-4">
                <p className="text-pretty text-sm text-gray-700">{pos}</p>
              </Badge>
            </div>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Досвід роботи
              </CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                <strong>Рік початку практики:</strong> 2008
              </p>
              <p>
                <strong>Досвід роботи:</strong> 16 років
              </p>
              <p className="mt-2">
                <strong>Активність:</strong> Лікар виконав понад 10 000 хірургічних втручань
              </p>
            </CardContent>

            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Де приймає лікар
              </CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <ul className="list-disc pl-5">
                <li>Філія на Печерську | ст. м. «Либідська»</li>
                <li>Філія на Чернігівській | ст. м. «Чернігівська»</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="mr-2 h-5 w-5" />
                Напрями діяльності
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="prose list-disc space-y-2 pl-5">
                <li>Грижі, зокрема стравохідного отвору діафрагми</li>
                <li>
                  Холецистит, гострий та хронічний; апендицит, прободна виразка, кишкова непрохідність, будь-яка гостра
                  та хронічна патологія органів черевної порожнини
                </li>
                <li>Всі сучасні методи лікування геморою, нориць, тріщин, екх, у тому числі лазер, лігація</li>
                <li>
                  Гастроскопія, колоноскопія; рання діагностика захворювань шлунка та кишечника, у тому числі онкології;
                  видалення поліпів, пухлин
                </li>
                <li>Аугментаційна мамопластика, редукційна мамопластика, «підтяжка» грудей; блефаропластика</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                Освіта та професійні досягнення
              </CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <ul className="list-disc space-y-2 pl-5">
                <li>Харківський Національний медичний університет, спеціальність «Лікувальна справа», 2008 р.</li>
                <li>Сімферопольський медичний університет, спеціальність «Хірургія», 2011 р.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
