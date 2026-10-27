import { CallToAction } from "@/components/Home/call-to-action"

import { HomeHeroBanner } from "@/components/Home/home-hero-banner"

import { TestimonialCarousel } from "@/components/Home/testimonial-carousel"
import { WhyChoos } from "@/components/Home/why-choos"

export default function Page() {
  return (
    <main className="min-h-svh bg-white">
      
      <HomeHeroBanner />
      <WhyChoos />
      <TestimonialCarousel />
      <CallToAction />
      
    </main>
  )
}
