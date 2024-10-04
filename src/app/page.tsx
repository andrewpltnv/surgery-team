import Team from "@/components/Team"
import WhyTeam from "@/components/Team/WhyTeam"
import { OurServicesLinks } from "@/components/OurServices"
import ContactUs from "@/components/ContactUs"
import CarouselHero from "@/components/Carousel"

export default function Home() {
  return (
    <div className="flex flex-grow flex-col">
      <main className="flex-1">
        <CarouselHero />
        <Team />
        <WhyTeam />
        <OurServicesLinks />
        <ContactUs />
      </main>
    </div>
  )
}
