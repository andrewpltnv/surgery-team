import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { urlFor } from "@/sanity/lib/image"
import type { Expert } from "@root/sanity.types"
import { Briefcase, Stethoscope, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function Profile({ expert }: { expert: Expert }) {
  const { image, name, position, experience, areasOfExpertise, education } = expert

  if (!expert || !image || !name || !position || !experience || !areasOfExpertise || !education) {
    throw new Error("Expert data not found")
  }

  return (
    <div>
      <div className="flex flex-col items-center ~py-2/10">
        <h3 className="m-4 font-semibold leading-8 tracking-wide ~text-xl/3xl">{name}</h3>
        <p className="text-pretty text-sm text-gray-700">{position}</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <div className="grid grid-cols-1 items-center sm:grid-cols-[1fr_auto] md:col-span-2 lg:col-span-1 lg:block">
          <div className="max-size-96 flex flex-col items-center overflow-hidden rounded-lg text-center">
            <Image src={urlFor(image).auto("format").url()} alt={name} width={400} height={400} className="w-full" />
          </div>

          <div className="max-w-fit p-5">
            <h4 className="mb-4 flex items-center text-xl">
              <Briefcase className="mr-2 h-5 w-5" />
              Досвід роботи
            </h4>
            <div className="prose max-w-none prose-p:my-1 prose-p:text-sm">
              <strong>Рік початку практики:</strong>
              <p>{experience?.start}</p>
              <strong>Досвід роботи:</strong>
              <p>{experience?.start ? new Date().getFullYear() - experience?.start : 0} років</p>
              <strong>Активність:</strong>
              <p className="mt-2">{experience?.activity}</p>
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
                {areasOfExpertise.map((area, i) => (
                  <li key={area._key + i}>{area.name}</li>
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
                {education.map((edu) => (
                  <li key={edu}>{edu}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
