import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const properties = [
  {
    id: 1,
    location: "Manali, India",
    distance: "396 kilometres away",
    dates: "1-6 Apr",
    price: "₹4,500 night",
    rating: 4.88,
    isFavorite: true,
    isGuestFavorite: true,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    location: "Pharog, India",
    distance: "293 kilometres away",
    dates: "Available",
    price: "₹3,800 night",
    rating: null,
    isFavorite: false,
    isGuestFavorite: false,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    location: "Bir, India",
    distance: "384 kilometres away",
    dates: "1-6 Jun",
    price: "₹5,200 night",
    rating: null,
    isFavorite: false,
    isGuestFavorite: false,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    location: "Shimla, India",
    distance: "150 kilometres away",
    dates: "1-6 Apr",
    price: "₹4,200 night",
    rating: 4.95,
    isFavorite: false,
    isGuestFavorite: false,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
]

export function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((property) => (
        <div key={property.id} className="group cursor-pointer">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={property.imageUrl || "/placeholder.svg"}
              alt={property.location}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10 text-white hover:text-white">
              <Heart className={`h-6 w-6 ${property.isFavorite ? "fill-red-500 stroke-red-500" : "stroke-white"}`} />
            </Button>
            {property.isGuestFavorite && (
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md text-xs font-medium">
                Guest favourite
              </div>
            )}
          </div>
          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="font-medium">{property.location}</h3>
              {property.rating && (
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{property.rating}</span>
                </div>
              )}
            </div>
            <p className="text-gray-500 text-sm">{property.distance}</p>
            <p className="text-gray-500 text-sm">{property.dates}</p>
            <p className="mt-1">
              <span className="font-medium">{property.price}</span>
            </p>
          </div>
        </div>
      ))}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <Button className="bg-gray-800 hover:bg-black text-white rounded-full px-4 py-3 flex items-center gap-2">
          <span>Show map</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map"
          >
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            <line x1="9" x2="9" y1="3" y2="18" />
            <line x1="15" x2="15" y1="6" y2="21" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

