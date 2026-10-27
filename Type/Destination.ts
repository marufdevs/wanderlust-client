export interface Destination {
  destinationName: string
  country: string
  price: string // Change to 'number' if you plan to parse it (e.g., 5868)
  duration: string // Change to 'number' if tracking days/weeks as digits (e.g., 6)
  departureDate: string // Change to 'Date' if using JavaScript Date objects
  imageUrl: string
  description: string
  _id: string
}

// Records returned by the API also carry the Mongo document id, which the
// frontend needs for keys and for linking to the detail page.
export type DestinationWithId = Destination & {
  _id: string
}
