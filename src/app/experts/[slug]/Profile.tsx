import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Briefcase, Stethoscope, GraduationCap } from "lucide-react"
import Image from "next/image"
import { Expert } from "../constants"

export default function Profile({ expert }: { expert: Expert }) {
  const { image, name, pos, experience, activity, areasOfActivity, education } = expert

  return (
    <div>
      <div className="flex flex-col items-center ~py-2/10">
        <h3 className="m-4 font-semibold leading-8 tracking-wide ~text-xl/3xl">{name}</h3>
        <p className="text-pretty text-sm text-gray-700">{pos}</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <div className="grid grid-cols-1 items-center sm:grid-cols-[1fr_auto] md:col-span-2 lg:col-span-1 lg:block">
          <div className="max-size-96 flex flex-col items-center overflow-hidden rounded-lg text-center">
            <Image src={image} alt={name} width={400} height={400} className="w-full" />
          </div>

          <div className="max-w-fit p-5">
            <h4 className="mb-4 flex items-center text-xl">
              <Briefcase className="mr-2 h-5 w-5" />
              Досвід роботи
            </h4>
            <div className="prose max-w-none prose-p:my-1 prose-p:text-sm">
              <strong>Рік початку практики:</strong>
              <p>{experience[0]}</p>
              <strong>Досвід роботи:</strong>
              <p>{experience[1]} років</p>
              <strong>Активність:</strong>
              <p className="mt-2">{activity}</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-6">
          <div className="rounded-lg border-b-2 border-gray-200 bg-gradient-to-t from-white to-transparent p-6 lg:pt-0">
            <h4 className="mb-4 flex items-center text-xl">
              <Stethoscope className="mr-2 h-5 w-5" />
              Напрями діяльності
            </h4>
            <div>
              <ul className="prose max-w-none list-disc space-y-2 pl-5 prose-li:text-sm">
                {areasOfActivity.map((area, i) => (
                  <li key={i}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <GraduationCap className="mr-2 h-5 w-5" />
                Освіта та професійні досягнення
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none prose-li:text-sm">
              <ul className="list-disc space-y-2 pl-5">
                {education.map((edu, i) => (
                  <li key={i}>{edu}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
