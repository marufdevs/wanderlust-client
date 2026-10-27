import { Destination } from "@/Type/Destination"
import { ArrowRight, Check } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const sidebarPerks = [
    "Free cancellation up to 7 days",
    "Travel insurance included",
    "24/7 customer support",
]

function formatPrice(destination: Destination) {
    return Number.isFinite(Number(destination.price))
        ? Number(destination.price).toLocaleString("en-US")
        : destination.price
}



function formatDeparture(destination: Destination) {
    const date = new Date(`${destination.departureDate}T00:00:00`)
    return Number.isNaN(date.getTime())
        ? destination.departureDate
        : format(date, "MM/dd/yyyy")
}

const BookCard = ({ destination }:{destination: Destination}) => { 
    
    return (
        <div>
            <aside className="h-fit rounded-lg border border-neutral-200 p-5 lg:sticky lg:top-8">
                <p className="text-sm text-neutral-700">Starting from</p>
                <p className="mt-1 text-4xl font-bold text-[#15A1BF]">
                    ${formatPrice(destination)}
                </p>
                <p className="mt-1 text-xs text-neutral-500">per person</p>

                <p className="mt-5 rounded-md bg-neutral-50 px-3.5 py-2.5 text-sm font-medium text-neutral-950">
                    {formatDeparture(destination)}
                </p>

                <button
                    type="button"
                    className={cn(
                        buttonVariants(),
                        "mt-4 h-11 w-full gap-2 rounded-md bg-[#15A1BF] text-sm font-semibold text-white hover:bg-[#128AA3]"
                    )}
                >
                    Book Now
                    <ArrowRight className="size-4" aria-hidden="true" />
                </button>

                <ul className="mt-4 space-y-2.5 border-t border-neutral-200 pt-4">
                    {sidebarPerks.map((perk) => (
                        <li
                            key={perk}
                            className="flex items-start gap-2 text-[13px] text-neutral-700"
                        >
                            <Check
                                className="mt-0.5 size-3.5 shrink-0 text-green-600"
                                aria-hidden="true"
                            />
                            {perk}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default BookCard;