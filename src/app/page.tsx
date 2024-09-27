import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Stethoscope,
  Clock,
  Award,
  Phone,
  ChevronRight,
  HeartPulse,
  Microscope,
  UserCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Stethoscope className="h-6 w-6 mr-2" />
          <span className="font-bold">SurgeryTeam</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  General and Emergency Surgery
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Providing professional and skilled surgical care when you need
                  it most.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Our Services</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Our Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Microscope className="h-6 w-6 mb-2" />
                  <CardTitle>General Surgery</CardTitle>
                </CardHeader>
                <CardContent>
                  Comprehensive surgical procedures for a wide range of
                  conditions.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HeartPulse className="h-6 w-6 mb-2" />
                  <CardTitle>Emergency Surgery</CardTitle>
                </CardHeader>
                <CardContent>
                  24/7 emergency surgical care for critical conditions.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <UserCircle className="h-6 w-6 mb-2" />
                  <CardTitle>Specialized Procedures</CardTitle>
                </CardHeader>
                <CardContent>
                  Advanced surgical techniques for complex cases.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Why Choose Our Team?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our team of board-certified surgeons brings years of
                    experience and a commitment to excellence in patient care.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex items-center">
                    Meet Our Team
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-8 w-8" />
                    <div className="space-y-1">
                      <h3 className="font-medium">24/7 Availability</h3>
                      <p className="text-sm text-muted-foreground">
                        Round-the-clock emergency care
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Board Certified</h3>
                      <p className="text-sm text-muted-foreground">
                        Highly qualified surgeons
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Dr. Jane Smith"
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">Dr. Jane Smith</h3>
                <p className="text-gray-500">Chief of Surgery</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Dr. John Doe"
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">Dr. John Doe</h3>
                <p className="text-gray-500">Emergency Surgery Specialist</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/photo.jpg"
                  alt="Dr. Emily Chen"
                  width={200}
                  height={200}
                  className="object-scale-down rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">Dr. Emily Chen</h3>
                <p className="text-gray-500">
                  Minimally Invasive Surgery Expert
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Emergency? We&apos;re Here to Help
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our emergency surgery team is available 24/7. Don&apos;t
                  hesitate to call if you need immediate assistance.
                </p>
              </div>
              <Button className="inline-flex items-center" size="lg">
                <Phone className="mr-2 h-4 w-4" /> Call Emergency Line
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 SurgeryTeam. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Proctology
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Endoscopy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Bariatrics
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Plastic Surgery
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Oncological Surgery
          </Link>
        </nav>
      </footer>
    </div>
  );
}
