import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  CalendarDays,
  Check,
  MapPin,
  Star,
} from "lucide-react"


import { getDestination, type Destination } from "@/lib/destinations"

import BookCard from "@/components/Single Destinations/book-card"
import TopBarButtons from "@/components/Single Destinations/topBarButton"

// The API does not store highlights (or ratings/reviews) yet. These are the
// reference placeholders; swap them for destination fields once they exist.
const defaultHighlights = [
  "Luxury beachfront accommodation",
  "Traditional Balinese spa treatment",
  "Sunrise trek to Mount Batur",
  "Visit Uluwatu Temple at sunset",
  "Private beach dinner experience",
  "Private beach dinner experience",
]

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params
  const destination = await getDestination(id)

  return {
    title: destination
      ? `${destination.destinationName} | Wanderlast`
      : "Destination | Wanderlast",
  }
}

function formatDuration(destination: Destination) {
  const days = Number(destination.duration)

  if (!Number.isFinite(days) || days < 1) {
    return destination.duration
  }

  return days === 1 ? "1 Day" : `${days} Days / ${days - 1} Nights`
}



export default async function DestinationDetailPage({ params }: PageProps) {
  const { id } = await params
  const destination = await getDestination(id)

  if (!destination) {
    notFound()
  }

  return (
    <main className="min-h-svh bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 pt-8 pb-16 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm text-neutral-800 transition-colors hover:text-neutral-950"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Destinations
          </Link>
          <TopBarButtons destination={destination}/>
        </div>

        <div className="relative mt-5 h-64 overflow-hidden rounded-lg bg-neutral-200 md:h-[420px]">
          {destination.imageUrl ? (
            <Image
              src={destination.imageUrl}
              alt={destination.destinationName}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : null}
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_16rem]">
          <div>
            <p className="flex items-center gap-1.5 text-[13px] text-neutral-700">
              <MapPin className="size-3.5" aria-hidden="true" />
              {destination.country || "Unknown"}
            </p>
            <h1 className="mt-1 font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] font-light tracking-[-0.01em] text-neutral-950">
              {destination.destinationName}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5">
              {/* TODO: render rating/reviews once the API stores them */}
              <span className="flex items-center gap-1.5 text-sm">
                <Star
                  className="size-4 fill-yellow-500 text-yellow-500"
                  aria-hidden="true"
                />
                <span className="font-bold text-neutral-950">4.5</span>
                <span className="text-neutral-500">(234 reviews)</span>
              </span>
              <span className="flex items-center gap-1.5 text-sm font-bold text-neutral-950">
                <CalendarDays className="size-4" aria-hidden="true" />
                {formatDuration(destination)}
              </span>
            </div>

            <h2 className="mt-9 font-display text-2xl font-medium text-neutral-950">
              Overview
            </h2>
            <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-neutral-600">
              {destination.description}
            </p>

            <h2 className="mt-9 font-display text-2xl font-medium text-neutral-950">
              Highlights
            </h2>
            <ul className="mt-3 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
              {defaultHighlights.map((highlight, id) => (
                <li
                  key={id}
                  className="flex items-start gap-2 text-sm text-neutral-700"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-green-600"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <BookCard destination={destination} />

        </div>
      </div>
    </main>
  )
}
