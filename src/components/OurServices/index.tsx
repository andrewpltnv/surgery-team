import {
  Microscope,
  HeartPulse,
  UserCircle,
  Activity,
  PocketKnife,
  Scissors,
  Stethoscope,
  Utensils,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import Link from "next/link"

export default function OurServices() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Microscope className="mb-2 h-6 w-6" />
              <CardTitle>General Surgery</CardTitle>
            </CardHeader>
            <CardContent>Comprehensive surgical procedures for a wide range of conditions.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <HeartPulse className="mb-2 h-6 w-6" />
              <CardTitle>Emergency Surgery</CardTitle>
            </CardHeader>
            <CardContent>24/7 emergency surgical care for critical conditions.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <UserCircle className="mb-2 h-6 w-6" />
              <CardTitle>Specialized Procedures</CardTitle>
            </CardHeader>
            <CardContent>Advanced surgical techniques for complex cases.</CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const specialties = [
  {
    name: "General Surgery",
    icon: PocketKnife,
    description: "General and urgent surgury",
  },
  {
    name: "Proctology",
    icon: Microscope,
    description: "Care for colorectal health",
  },
  {
    name: "Endoscopy",
    icon: Stethoscope,
    description: "Advanced diagnostic procedures",
  },
  {
    name: "Bariatrics",
    icon: Utensils,
    description: "Comprehensive weight loss solutions",
  },
  {
    name: "Plastic Surgery",
    icon: Scissors,
    description: "Aesthetic and reconstructive procedures",
  },
  {
    name: "Oncological Surgery",
    icon: Activity,
    description: "Expert cancer treatment and care",
  },
]

export function OurServicesLinks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container m-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          Our Surgical Specialties
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty, index) => (
            <Link href={`/${specialty.name.toLowerCase().replace(" ", "-")}`} key={index}>
              <Card className="flex h-full flex-col items-center transition-all hover:bg-accent">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <specialty.icon className="h-6 w-6" />
                    <span>{specialty.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="line-clamp-1 text-muted-foreground">{specialty.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
