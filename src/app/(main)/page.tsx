import Team from "@/components/Team"
import WhyTeam from "@/components/Team/WhyTeam"
import { OurServicesLinks } from "@/components/OurServices"
import ContactUs from "@/components/ContactUs"
import AutoplayCarousel from "@/components/Carousel"
import { heroSlides } from "@/components/Carousel/Slides"
import SurgeonQuestionForm from "@/components/SurgeonQuestionForm"
import Chat from "@/components/Chat"

export default function Home() {
  return (
    <div className="flex flex-grow flex-col">
      <main className="flex-1">
        <AutoplayCarousel content={heroSlides} delay={2500} />
        <Team />
        <OurServicesLinks />
        <WhyTeam />
        <ContactUs />
        <SurgeonQuestionForm />
        <Chat />
      </main>
    </div>
  )
}
