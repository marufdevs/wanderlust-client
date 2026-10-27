import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function CallToAction() {
  return (
    <section className="relative flex overflow-hidden bg-neutral-950">
      <Image
        src="/Images/CTA.png"
        alt="Aerial view of a passenger plane flying over a tropical island"
        width={1440}
        height={440}
        sizes="100vw"
        className="h-64 w-full object-cover object-center sm:h-72 md:h-[280px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] font-light tracking-[-0.01em] text-white">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-2 text-[13px] leading-[1.5] text-white/95">
          Join thousands of travelers who have discovered the world with us
        </p>

        <a
          href="#book"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 h-11 rounded-md bg-white px-6 text-[10px] font-semibold tracking-[0.08em] text-neutral-950 uppercase hover:bg-white/90"
          )}
        >
          Book Your Trip Today
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export { CallToAction }
