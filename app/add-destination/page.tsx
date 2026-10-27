import type { Metadata } from "next"

import { AddDestinationForm } from "@/components/Add Destination/add-destination-form"

export const metadata: Metadata = {
  title: "Add New Travel Package | Wanderlast",
}

export default function AddDestinationPage() {
  return (
    <main className="min-h-svh bg-white">
      <div className="mx-auto w-full max-w-4xl px-5 pt-10 pb-16 md:px-8 md:pt-14">
        <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-light tracking-[-0.01em] text-neutral-950">
          Add New Travel Package
        </h1>

        <div className="mt-8 rounded-lg border bg-white p-5 shadow-sm md:p-8">
          <AddDestinationForm />
        </div>
      </div>
    </main>
  )
}
