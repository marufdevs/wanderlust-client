import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const searchFields = [
  {
    id: "location",
    label: "Location",
    placeholder: "Address, City Or Zip",
  },
  {
    id: "date-duration",
    label: "Date/Duration",
    placeholder: "Anytime/3 Days",
  },
  {
    id: "budget",
    label: "Budget",
    placeholder: "$0-$3000",
  },
  {
    id: "people",
    label: "People",
    placeholder: "5-10",
  },
]

function HomeHeroBanner() {
  return (
    <section className="relative flex min-h-[calc(100svh-3rem)] flex-col overflow-hidden bg-neutral-950">
      <Image
        src="/Images/Banner.png"
        alt="Aerial view of a turquoise bay surrounded by forested hills"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-10 pb-6 text-center">
        <h1 className="font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.15] font-light tracking-[-0.01em] text-white">
          <span className="block">Discover Your</span>
          <span className="block">Next Adventure</span>
        </h1>
        <p className="mt-3 w-full max-w-[450px] text-[13px] leading-[1.5] text-white/95">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center">
          <a
            href="#destinations"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-[34px] rounded-none bg-[#15A1BF] px-4 text-[9px] font-semibold tracking-[0.08em] text-white uppercase hover:bg-[#128AA3]"
            )}
          >
            Explore Now
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
          <a
            href="#destinations"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-[34px] rounded-none bg-white/20 px-4 text-[9px] font-semibold tracking-[0.08em] text-white uppercase backdrop-blur-sm hover:bg-white/30 hover:text-white"
            )}
          >
            View Destination
          </a>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 border-t border-white/10 bg-neutral-500/55 backdrop-blur-md md:grid-cols-[1.05fr_1.1fr_1fr_0.85fr_9rem]">
        {searchFields.map((field) => (
          <label
            key={field.id}
            htmlFor={field.id}
            className="flex flex-col gap-1 border-r border-b border-white/15 px-4 py-3.5 transition-colors even:border-r-0 focus-within:bg-white/5 md:border-b-0 md:even:border-r"
          >
            <span className="text-xs leading-none font-semibold text-white">
              {field.label}
            </span>
            <input
              id={field.id}
              name={field.id}
              type="text"
              placeholder={field.placeholder}
              autoComplete="off"
              className="w-full min-w-0 bg-transparent p-0 text-[11px] leading-none text-white outline-none placeholder:text-white/55"
            />
          </label>
        ))}

        <button
          type="button"
          className="col-span-2 flex h-12 items-center justify-center bg-[#15A1BF] text-[13px] font-medium text-white transition-colors hover:bg-[#128AA3] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white md:col-span-1 md:h-auto"
        >
          Search
        </button>
      </div>
    </section>
  )
}

export { HomeHeroBanner }
