import { Clock, Award, Scale, RadarIcon } from "lucide-react"

export default function WhyTeam() {
  return (
    <section className="w-full ~py-12/24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
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
    </section>
  )
}
