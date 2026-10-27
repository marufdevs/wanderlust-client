"use client"

import * as React from "react"

import { DestinationCard } from "@/components/Destinations/destination-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Destination } from "@/lib/destinations"

type CategoryFilter = string
type PriceRangeFilter =
  "all" | "under-1000" | "1000-2000" | "2000-3000" | "over-3000"
type SortFilter = "none" | "price-asc" | "price-desc"

const priceRanges: {
  value: Exclude<PriceRangeFilter, "all">
  label: string
}[] = [
  { value: "under-1000", label: "Under $1,000" },
  { value: "1000-2000", label: "$1,000 - $2,000" },
  { value: "2000-3000", label: "$2,000 - $3,000" },
  { value: "over-3000", label: "Over $3,000" },
]

function filterStyleTrigger(hasValue: boolean) {
  return hasValue
    ? "h-11 w-full rounded-md border-border bg-white px-3 text-sm font-semibold text-neutral-950"
    : "h-11 w-full rounded-md border-border bg-white px-3 text-sm font-semibold tracking-[0.06em] text-neutral-800 uppercase"
}

function DestinationsView({ destinations }: { destinations: Destination[] }) {
  const [category, setCategory] = React.useState<CategoryFilter | null>(null)
  const [priceRange, setPriceRange] = React.useState<PriceRangeFilter | null>(
    null
  )
  const [sort, setSort] = React.useState<SortFilter | null>(null)

  // Records have no category field yet; derive options from the data so the
  // filter starts working as soon as the backend stores one.
  const categories = React.useMemo(
    () =>
      Array.from(
        new Set(
          destinations
            .map(
              (destination) =>
                (destination as Destination & { category?: string }).category
            )
            .filter(Boolean)
        )
      ),
    [destinations]
  )

  const visible = React.useMemo(() => {
    let items = [...destinations]

    items = items.filter((destination) => {
      const price = Number(destination.price)

      if (
        category &&
        (destination as Destination & { category?: string }).category !==
          category
      ) {
        return false
      }
      if (
        priceRange &&
        !(priceRange === "under-1000"
          ? price < 1000
          : priceRange === "1000-2000"
            ? price >= 1000 && price < 2000
            : priceRange === "2000-3000"
              ? price >= 2000 && price < 3000
              : price >= 3000)
      ) {
        return false
      }
      return true
    })

    if (sort === "price-asc") {
      items.sort((a, b) => Number(a.price) - Number(b.price))
    } else if (sort === "price-desc") {
      items.sort((a, b) => Number(b.price) - Number(a.price))
    }

    return items
  }, [destinations, category, priceRange, sort])

  return (
    <>
      <div className="mt-7 grid gap-4 border-y border-neutral-200 py-4 sm:grid-cols-2 md:grid-cols-3 md:divide-x md:divide-neutral-200">
        <Select
          value={category}
          onValueChange={(value) => setCategory(value as CategoryFilter)}
        >
          <SelectTrigger
            aria-label="Category"
            className={`px-3 ${filterStyleTrigger(Boolean(category))}`}
          >
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((name) => (
              <SelectItem key={name} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as PriceRangeFilter)}
        >
          <SelectTrigger
            aria-label="Price range"
            className={`px-3 ${filterStyleTrigger(Boolean(priceRange))}`}
          >
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Price</SelectItem>
            {priceRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={sort}
          onValueChange={(value) => setSort(value as SortFilter)}
        >
          <SelectTrigger
            aria-label="Sort by"
            className={`px-3 ${filterStyleTrigger(Boolean(sort))}`}
          >
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="mt-5 text-sm text-neutral-700">
        Showing {visible.length} destination{visible.length === 1 ? "" : "s"}
      </p>

      {visible.length > 0 ? (
        <div className="mt-4 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      ) : (
        <p className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-10 text-center text-sm text-neutral-600">
          No destinations match your filters. Try widening your search.
        </p>
      )}
    </>
  )
}

export { DestinationsView }
