import type { Metadata } from "next"

import { DestinationsView } from "@/components/Destinations/destinations-view"
import { getDestinations } from "@/lib/destinations"

export const metadata: Metadata = {
  title: "Explore All Destinations | Wanderlast",
}

export default async function DestinationsPage() {
  const destinations = await getDestinations()

  return (
    <main className="min-h-svh bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 pt-10 pb-16 md:px-8 md:pt-14">
        <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-light tracking-[-0.01em] text-neutral-950">
          Explore All Destinations
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          Find your perfect travel experience from our curated collection
        </p>

        {destinations === null ? (
          <p className="mt-10 rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-12 text-center text-sm text-neutral-600">
            Could not load destinations. Make sure the server is running on
            localhost:5000 and try again.
          </p>
        ) : (
          <DestinationsView destinations={destinations} />
        )}
      </div>
    </main>
  )
}
