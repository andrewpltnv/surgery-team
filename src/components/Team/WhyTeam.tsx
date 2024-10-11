import { Clock, Award, Scale, RadarIcon } from "lucide-react"

export default function WhyTeam() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our Team?</h2>
              <p className="max-w-[600px] text-pretty text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of board-certified surgeons brings years of experience and a commitment to excellence in
                patient care.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8" />
                <div className="space-y-1">
                  <h3 className="font-medium">24/7 Availability</h3>
                  <p className="text-sm text-muted-foreground">Round-the-clock emergency care</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8" />
                <div className="space-y-1">
                  <h3 className="font-medium">Board Certified</h3>
                  <p className="text-sm text-muted-foreground">Highly qualified surgeons</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Scale className="h-8 w-8" />
                <div className="space-y-1">
                  <h3 className="font-medium">Board Certified</h3>
                  <p className="text-sm text-muted-foreground">Highly qualified surgeons</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <RadarIcon className="h-8 w-8" />
                <div className="space-y-1">
                  <h3 className="font-medium">Board Certified</h3>
                  <p className="text-sm text-muted-foreground">Highly qualified surgeons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
