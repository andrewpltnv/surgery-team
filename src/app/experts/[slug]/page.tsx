import Image from "next/image"
import { Briefcase, GraduationCap, Stethoscope } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EXPERTS } from "../constants"
import type { Expert } from "../constants"

const experts = new Map<string, Expert>()
EXPERTS.forEach(({ slug, ...rest }) => experts.set(slug || "x", rest))

export async function generateStaticParams() {
  return EXPERTS.map(({ slug }) => ({ slug }))
}

export default function ExpertPage({ params: { slug } }: { params: { slug: string } }) {
  const expert = experts.get(slug)
  if (!expert) {
    throw new Error("Image not found")
  }
  const { image, name, pos, experience, activity, areasOfActivity, education } = expert

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
                <strong>Рік початку практики:</strong> {experience[0]}
              </p>
              <p>
                <strong>Досвід роботи:</strong> {experience[1]} років
              </p>
              <p className="mt-2">
                <strong>Активність:</strong> {activity}
              </p>
            </CardContent>

            {/* <CardHeader>
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
            </CardContent> */}
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
            <CardContent className="prose">
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
