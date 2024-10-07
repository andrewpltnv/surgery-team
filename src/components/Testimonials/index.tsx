import type { Testimonial } from "./testimonials"
import AutoplayCarousel from "../Carousel"
import { CarouselContent, CarouselItem } from "../ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import clsx from "clsx"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const content = (
    <CarouselContent className="cursor-grab p-6">
      {testimonials.map((t, i) => (
        <CarouselItem key={i} className="h-96 basis-96">
          <Testimonial testimonial={t} isOpen={false} />
        </CarouselItem>
      ))}
    </CarouselContent>
  )

  return (
    <div className="flex w-full flex-col bg-slate-50">
      <AutoplayCarousel content={content} delay={3000} />
    </div>
  )
}

const Testimonial = ({ testimonial, isOpen }: { testimonial: Testimonial; isOpen: boolean }) => {
  return (
    <Card className="relative flex h-96 flex-col">
      <CardHeader className="pb-2">
        <CardTitle>
          {testimonial.name}
          <CardDescription>
            <span>{testimonial.date}</span>
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={clsx({ "line-clamp-[8]": !isOpen }, "select-none hyphens-auto")}>{testimonial.text}</p>
        {testimonial.text.length > 290 && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"link"}>Читати повністю {">>>"}</Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-scroll p-0">
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle>
                    {testimonial.name}
                    <CardDescription>
                      <span>{testimonial.date}</span>
                    </CardDescription>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={clsx("hyphens-auto")}>{testimonial.text}</p>
                </CardContent>
                <CardFooter className="prose bottom-0 text-xs">
                  <blockquote className="line-clamp-3 leading-none">{testimonial.source}</blockquote>
                </CardFooter>
              </Card>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
      <CardFooter className="prose absolute bottom-0 text-xs">
        <blockquote className="line-clamp-3 leading-none">{testimonial.source}</blockquote>
      </CardFooter>
    </Card>
  )
}
