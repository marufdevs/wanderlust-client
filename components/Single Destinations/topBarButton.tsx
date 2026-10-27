"use client"
import { SquarePen, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { DestinationWithId } from "@/Type/Destination";
import { redirect } from "next/navigation";

const handleDelete = async (value: DestinationWithId) => {
    const id = value._id
    const res = await fetch(`http://localhost:5000/add-destination/${id}`, {
        method: "DELETE"
    });
    if (!res.ok) {
        console.log("respons Failed")
    }
    const result = await res.json()
    if (result.deletedCount) {
        redirect('/destinations')
    }
}

const TopBarButtons = ({ destination }: { destination: DestinationWithId }) => {
    return (
        <div className="flex items-center gap-3">
            {/* TODO: wire to an edit flow once the frontend edit page exists */}
            <button
                type="button"
                className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-9 gap-2 rounded-md px-4 text-sm font-semibold text-neutral-950"
                )}
            >
                <SquarePen className="size-3.5" aria-hidden="true" />
                Edit
            </button>
            {/* TODO: wire to DELETE once the backend exposes it */}
            <button
                type="button"
                onClick={() => { handleDelete(destination) }}
                className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-9 gap-2 rounded-md border-red-300 bg-white px-4 text-sm font-semibold text-red-600 hover:bg-red-50 hover:text-red-700"
                )}
            >
                <Trash2 className="size-3.5" aria-hidden="true" />
                Cancel
            </button>
        </div>
    );
};

export default TopBarButtons;