"use client"
import React from "react"
import { Carousel } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function AutoplayCarousel({ content, delay }: { content: JSX.Element; delay: number }) {
  const plugin = React.useRef(Autoplay({ delay, stopOnInteraction: false }))

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true, align: "center" }}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      {content}
    </Carousel>
  )
}
