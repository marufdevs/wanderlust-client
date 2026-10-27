const CARD_PLACEHOLDERS = 8

function DestinationsLoadingSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite">
      <div className="h-10 w-72 animate-pulse rounded-md bg-neutral-200" />
      <div className="mt-3 h-4 w-80 animate-pulse rounded bg-neutral-100" />

      <div className="mt-8 grid gap-4 border-y border-neutral-200 py-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-11 animate-pulse rounded-md bg-neutral-100"
          />
        ))}
      </div>

      <div className="mt-4 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: CARD_PLACEHOLDERS }).map((_, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-44 animate-pulse rounded-md bg-neutral-200" />
            <div className="mt-4 h-3.5 w-24 animate-pulse rounded bg-neutral-100" />
            <div className="mt-3 h-5 w-48 animate-pulse rounded bg-neutral-100" />
            <div className="mt-3 h-3.5 w-32 animate-pulse rounded bg-neutral-100" />
            <div className="mt-4 h-3.5 w-24 animate-pulse rounded bg-neutral-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DestinationsLoading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-10 pb-16 md:px-8 md:pt-14">
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-light tracking-[-0.01em] text-neutral-950">
        Explore All Destinations
      </h1>
      <DestinationsLoadingSkeleton />
    </div>
  )
}
