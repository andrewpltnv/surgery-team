import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Briefcase, Stethoscope, GraduationCap } from "lucide-react"
import Image from "next/image"
import { Expert } from "../constants"
import { Badge } from "@/components/ui/badge"

export default function Profile({ expert }: { expert: Expert }) {
  const { image, name, pos, experience, activity, areasOfActivity, education } = expert

  return (
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
          <CardContent className="prose max-w-none prose-p:my-2">
            <strong>Рік початку практики:</strong>
            <p>{experience[0]}</p>
            <strong>Досвід роботи:</strong>
            <p>{experience[1]} років</p>
            <strong>Активність:</strong>
            <p className="mt-2">{activity}</p>
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
            <ul className="prose max-w-none list-disc space-y-2 pl-5">
              {areasOfActivity.map((area, i) => (
                <li key={i}>{area}</li>
              ))}
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
          <CardContent className="prose max-w-none">
            <ul className="list-disc space-y-2 pl-5">
              {education.map((edu, i) => (
                <li key={i}>{edu}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
