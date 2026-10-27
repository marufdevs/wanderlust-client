"use client"

import { ArrowUpRight } from "lucide-react"

function NewsletterForm() {
  return (
    <form
      className="mt-5 flex items-center gap-2 rounded-md bg-white/10 px-4 py-2.5 transition-colors focus-within:bg-white/15"
      onSubmit={(event) => {
        event.preventDefault()
        event.currentTarget.reset()
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Enter email"
        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/60"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="text-white/80 transition-colors hover:text-white"
      >
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  )
}

export { NewsletterForm }
