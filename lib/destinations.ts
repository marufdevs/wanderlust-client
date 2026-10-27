import type { DestinationWithId } from "@/Type/Destination"

export type Destination = DestinationWithId

const API_URL = "http://localhost:5000/add-destination"

// Signal/options must be created per call: a shared AbortSignal created at
// module load fires once, making every later fetch fail instantly.
function fetchOptions(): RequestInit {
  return {
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  }
}

// The list endpoint has returned both a plain array and an object wrapping
// the array (e.g. { "value": [...] }); accept the common wrappers.
function unwrapList(data: unknown): Destination[] | null {
  if (Array.isArray(data)) {
    return data as Destination[]
  }

  if (data && typeof data === "object") {
    for (const key of ["value", "data", "destinations", "results"]) {
      const list = (data as Record<string, unknown>)[key]
      if (Array.isArray(list)) {
        return list as Destination[]
      }
    }
  }

  return null
}

function unwrapRecord(data: unknown): Destination | null {
  if (data && typeof data === "object" && "_id" in data) {
    return data as Destination
  }

  if (data && typeof data === "object") {
    for (const key of ["value", "data", "destination", "result"]) {
      const record = (data as Record<string, unknown>)[key]
      if (record && typeof record === "object" && "_id" in record) {
        return record as Destination
      }
    }
  }

  return null
}

// Fetches all destinations from the local backend. Returns null when the
// backend is not reachable so the page can render a friendly error state.
export async function getDestinations(): Promise<Destination[] | null> {
  try {
    const response = await fetch(API_URL, fetchOptions())

    if (!response.ok) {
      return null
    }

    return unwrapList(await response.json())
  } catch {
    return null
  }
}

// Fetches one destination. Uses the single-destination endpoint when it is
// available, then falls back to finding the record in the full list.
export async function getDestination(id: string): Promise<Destination | null> {
  try {
    const response = await fetch(`${API_URL}/${id}`, fetchOptions())

    if (response.ok) {
      return unwrapRecord(await response.json())
    }
  } catch {
    // fall through to the list lookup
  }

  const destinations = await getDestinations()
  return destinations?.find((item) => item._id === id) ?? null
}
