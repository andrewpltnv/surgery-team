import { CarouselContent, CarouselItem } from "../ui/carousel"

function SlideOne() {
  return (
    <CarouselItem>
      <section className="w-full bg-cyan-100 py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to SurgeryTeam
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our specialized surgical services and find the expert care you need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </CarouselItem>
  )
}

function SlideTwo() {
  return (
    <CarouselItem>
      <section className="w-full bg-teal-100 py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Second Slide
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Something realy different</p>
            </div>
          </div>
        </div>
      </section>
    </CarouselItem>
  )
}
export const heroSlides = (
  <CarouselContent>
    <SlideOne key={0} /> <SlideTwo key={1} />
  </CarouselContent>
)
