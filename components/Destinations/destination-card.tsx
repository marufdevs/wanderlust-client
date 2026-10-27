import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react"

import type { Destination } from "@/lib/destinations"

// The API stores duration as a bare number of days ("6"); the design shows
// it as "6 Days/5 Nights". Pass through pre-formatted strings untouched.
function formatDuration(duration: string) {
  const days = Number(duration)

  if (!Number.isFinite(days) || days < 1) {
    return duration
  }

  return days === 1 ? "1 Day" : `${days} Days/${days - 1} Nights`
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="flex flex-col">
      <div className="relative h-44 overflow-hidden bg-neutral-200">
        {destination.imageUrl ? (
          <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center"
          />
        ) : null}
        <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-md bg-white/95 px-2 py-1 text-xs font-semibold text-neutral-950">
          4.5
          <Star className="size-3.5 fill-current" aria-hidden="true" />
        </span>
      </div>

      <div className="pt-4">
        <p className="flex items-center gap-1.5 text-[13px] text-neutral-600">
          <MapPin className="size-3.5" aria-hidden="true" />
          {destination.country || "Unknown"}
        </p>
        <div className="mt-1.5 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl leading-tight font-medium text-neutral-950">
            {destination.destinationName}
          </h3>
          <p className="text-lg font-semibold text-neutral-950">
            $
            {Number.isFinite(Number(destination.price))
              ? Number(destination.price).toLocaleString("en-US")
              : destination.price}
            <span className="text-[11px] font-normal text-neutral-500">
              /Person
            </span>
          </p>
        </div>
        <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-neutral-600">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          {formatDuration(destination.duration)}
        </p>

        <Link
          href={`/destinations/${destination._id}`}
          className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.02em] text-[#15A1BF] uppercase underline decoration-current underline-offset-4 transition-colors hover:text-[#128AA3]"
        >
          Book Now
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

export { DestinationCard }
