"use client"

import * as React from "react"
import { Save, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { redirect } from "next/navigation"

const categories = [
  "Beach",
  "Mountain",
  "Adventure",
  "Cultural",
  "Romantic",
  "Wildlife",
]

const fieldStyles =
  "h-10 rounded-md border-input bg-muted/60 px-3 focus-visible:border-ring md:text-sm"

function AddDestinationForm() {
  const [category, setCategory] = React.useState<string | null>(null)
  const formRef = React.useRef<HTMLFormElement>(null)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    const res = await fetch("http://localhost:5000/add-destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      console.log("Fethching Failed ....")
      return
    }

    const result = await res.json()
    if (result.acknowledged === true) {
      redirect("/")
    }

    console.log(result)

    // event.currentTarget.reset()
    // setCategory(null)
  }

  return (
    <form ref={formRef} className="grid gap-x-6 gap-y-5" onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="destination-name"
          className="mb-2 block text-sm font-semibold"
        >
          Destination Name
        </label>
        <Input
          id="destination-name"
          name="destinationName"
          required
          placeholder="Bali Paradise"
          className={fieldStyles}
        />
      </div>

      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className="mb-2 block text-sm font-semibold">
            Country
          </label>
          <Input
            id="country"
            name="country"
            required
            placeholder="Indonesia"
            className={fieldStyles}
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-semibold"
          >
            Category
          </label>
          <Select
            value={category}
            onValueChange={(value) => setCategory(value as string)}
          >
            <SelectTrigger
              id="category"
              aria-label="Category"
              className="h-10 w-full rounded-md border-input bg-muted/60 px-3"
            >
              <SelectValue placeholder="Beach" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((name) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="price" className="mb-2 block text-sm font-semibold">
            Price (USD)
          </label>
          <Input
            id="price"
            name="price"
            type="number"
            min="0"
            required
            placeholder="e.g., 1299"
            className={fieldStyles}
          />
        </div>
        <div>
          <label
            htmlFor="duration"
            className="mb-2 block text-sm font-semibold"
          >
            Duration
          </label>
          <Input
            id="duration"
            name="duration"
            required
            placeholder="e.g., 7 Days/6 Nights"
            className={fieldStyles}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="departure-date"
          className="mb-2 block text-sm font-semibold"
        >
          Departure Date
        </label>
        <Input
          id="departure-date"
          name="departureDate"
          type="date"
          required
          className={cn(
            fieldStyles,
            "text-muted-foreground not-empty:text-foreground"
          )}
        />
      </div>

      <div>
        <label htmlFor="image-url" className="mb-2 block text-sm font-semibold">
          Image URL
        </label>
        <Input
          id="image-url"
          name="imageUrl"
          type="url"
          placeholder="https://example.com/image.jpg"
          className={fieldStyles}
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-semibold"
        >
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Describe the travel experience..."
          className="min-h-28 rounded-md border-input bg-muted/60 px-3 py-2.5 md:text-sm"
        />
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            formRef.current?.reset()
            setCategory(null)
          }}
          className="h-10 gap-2 rounded-md border-red-300 bg-white px-5 text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          <Trash2 className="size-4" aria-hidden="true" />
          Cancel
        </Button>
        <Button
          type="submit"
          className="h-10 gap-2 rounded-md bg-[#15A1BF] px-5 text-white hover:bg-[#128AA3]"
        >
          <Save className="size-4" aria-hidden="true" />
          Add Travel Package
        </Button>
      </div>
    </form>
  )
}

export { AddDestinationForm }
