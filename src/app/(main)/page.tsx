import Team from "@/components/Team"
import WhyTeam from "@/components/Team/WhyTeam"
import { OurServicesLinks } from "@/components/OurServices"
import ContactUs from "@/components/ContactUs"
import AutoplayCarousel from "@/components/Carousel"
import { heroSlides } from "@/components/Carousel/Slides"
// import { client } from "@/sanity/lib/client"
// import { TESTIMONIALS_Posohov, TESTIMONIALS_Zhovnirenko } from "@/components/Testimonials/testimonials"

export default function Home() {
  return (
    <div className="flex flex-grow flex-col">
      <main className="flex-1">
        <AutoplayCarousel content={heroSlides} delay={2500} />
        <Team />
        <OurServicesLinks />
        <WhyTeam />
        <ContactUs />
      </main>
    </div>
  )
}

// TESTIMONIALS_Zhovnirenko.forEach(async (i, k) => {
// const { text, ...res } = i
// const item = {
//   _type: "review",
//   review: text,
//   ...res,
//   _id: "rev" + k,
// }
// console.log({ c: client.config() })

// await client
//   .patch("f15e845f-ee14-4abc-b682-c965526aa733")
//   .setIfMissing({ reviews: [] })
//   .insert("after", "reviews[-1]", [item])
//   .commit({ autoGenerateArrayKeys: true })
//   .then((res: any) => console.log(res))

// await client.createIfNotExists(item).then((res: any) => console.log(res))
// })
