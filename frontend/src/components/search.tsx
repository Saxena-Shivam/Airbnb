import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Search() {
  return (
    <div className="flex items-center rounded-full border shadow-sm divide-x">
      <div className="px-6 py-3">
        <div className="text-sm font-medium">Where</div>
        <div className="text-sm text-gray-500">Search destinations</div>
      </div>
      <div className="px-6 py-3">
        <div className="text-sm font-medium">Check in</div>
        <div className="text-sm text-gray-500">Add dates</div>
      </div>
      <div className="px-6 py-3">
        <div className="text-sm font-medium">Check out</div>
        <div className="text-sm text-gray-500">Add dates</div>
      </div>
      <div className="px-6 py-3 pr-2">
        <div className="text-sm font-medium">Who</div>
        <div className="text-sm text-gray-500">Add guests</div>
      </div>
      <div className="pl-2 pr-2">
        <Button size="icon" className="rounded-full bg-red-500 hover:bg-red-600 h-12 w-12">
          <SearchIcon className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  )
}

