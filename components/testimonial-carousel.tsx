"use client"

import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: "/Images/person2.png",
    imageAlt: "Portrait of Michael Chen",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/Images/person1.png",
    imageAlt: "Portrait of Sarah Johnson",
  },
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chens",
    location: "Singapore",
    image: "/Images/person2.png",
    imageAlt: "Portrait of Michael Chen",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnsons",
    location: "New York, USA",
    image: "/Images/person1.png",
    imageAlt: "Portrait of Sarah Johnson",
  },
]

function CarouselControls() {
  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } = useCarousel()

  const controlClass =
    "flex size-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-colors hover:border-[#15A1BF] hover:text-[#15A1BF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15A1BF] disabled:pointer-events-none disabled:border-neutral-200 disabled:text-neutral-300"

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Previous testimonials"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(controlClass)}
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next testimonials"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(controlClass)}
      >
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <article className="flex min-h-[178px] overflow-hidden rounded-sm border border-neutral-200 bg-white">
      <div className="flex min-w-0 flex-1 flex-col justify-between p-3">
        <blockquote className="text-[14px] leading-[1.1] font-medium text-neutral-950">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className="mt-4">
          <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#15A1BF]">
            <span className="h-px w-3 bg-[#15A1BF]" aria-hidden="true" />
            <span>{testimonial.name}</span>
          </div>
          <p className="mt-1 pl-[18px] text-[9px] text-neutral-500">
            {testimonial.location}
          </p>
        </div>
      </div>

      <div className="relative w-[116px] shrink-0 sm:w-[140px]">
        <Image
          src={testimonial.image}
          alt={testimonial.imageAlt}
          fill
          sizes="(min-width: 640px) 140px, 116px"
          className="object-cover"
        />
      </div>
    </article>
  )
}

function TestimonialCarousel() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-white pt-16 pb-16 md:pt-20"
    >
      <Carousel
        aria-label="Traveler testimonials"
        opts={{ align: "start", containScroll: "trimSnaps" }}
        className="mx-auto w-full max-w-[820px] px-5"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              id="testimonials-heading"
              className="text-[32px] leading-none font-medium tracking-[-0.02em] text-neutral-950"
            >
              What Travelers Say
            </h2>
            <p className="mt-2 text-[11px] text-neutral-500">
              Real experiences from our happy travelers
            </p>
          </div>
          <CarouselControls />
        </div>

        <CarouselContent className="mt-7">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.name} className="md:basis-1/2">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export { TestimonialCarousel }
