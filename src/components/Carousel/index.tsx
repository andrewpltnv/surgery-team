"use client"
import React from "react"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { slides } from "./Slides"

export default function CarouselHero() {
  const plugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {slides.map((slide, i) => (
          <CarouselItem key={i}>{slide}</CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
