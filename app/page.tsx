import { HomeHeroBanner } from "@/components/home-hero-banner"
import { NavBar } from "@/components/nav-bar"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { WhyChoos } from "@/components/why-choos"

export default function Page() {
  return (
    <main className="min-h-svh bg-white">
      <NavBar />
      <HomeHeroBanner />
      <WhyChoos />
      <TestimonialCarousel />
    </main>
  )
}
