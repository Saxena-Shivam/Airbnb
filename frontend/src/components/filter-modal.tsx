"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Filter } from "lucide-react"

export function FilterModal() {
  const [priceRange, setPriceRange] = useState([1000, 50000])
  const [bedrooms, setBedrooms] = useState<number | null>(null)
  const [beds, setBeds] = useState<number | null>(null)
  const [bathrooms, setBathrooms] = useState<number | null>(null)
  const [propertyType, setPropertyType] = useState<string[]>([])
  const [amenities, setAmenities] = useState<string[]>([])

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
  }

  const handlePropertyTypeChange = (type: string) => {
    if (propertyType.includes(type)) {
      setPropertyType(propertyType.filter((t) => t !== type))
    } else {
      setPropertyType([...propertyType, type])
    }
  }

  const handleAmenitiesChange = (amenity: string) => {
    if (amenities.includes(amenity)) {
      setAmenities(amenities.filter((a) => a !== amenity))
    } else {
      setAmenities([...amenities, amenity])
    }
  }

  const handleReset = () => {
    setPriceRange([1000, 50000])
    setBedrooms(null)
    setBeds(null)
    setBathrooms(null)
    setPropertyType([])
    setAmenities([])
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
          <DialogDescription>Find your perfect place to stay</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="price" className="mt-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="price">Price</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="property">Property</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
          </TabsList>

          <TabsContent value="price" className="space-y-4 py-4">
            <div>
              <h3 className="font-medium mb-4">Price range</h3>
              <Slider
                defaultValue={priceRange}
                max={100000}
                min={0}
                step={1000}
                value={priceRange}
                onValueChange={handlePriceChange}
                className="mb-6"
              />
              <div className="flex justify-between">
                <div className="border rounded-md p-3 w-[45%]">
                  <p className="text-xs text-muted-foreground">Min price</p>
                  <p>₹{priceRange[0]}</p>
                </div>
                <div className="border rounded-md p-3 w-[45%]">
                  <p className="text-xs text-muted-foreground">Max price</p>
                  <p>₹{priceRange[1]}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-6 py-4">
            <div>
              <h3 className="font-medium mb-4">Bedrooms</h3>
              <div className="flex gap-2">
                {[null, 1, 2, 3, 4, 5, "6+"].map((num, i) => (
                  <Button
                    key={i}
                    variant={bedrooms === num ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setBedrooms(num as any)}
                  >
                    {num === null ? "Any" : num}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Beds</h3>
              <div className="flex gap-2">
                {[null, 1, 2, 3, 4, 5, "6+"].map((num, i) => (
                  <Button
                    key={i}
                    variant={beds === num ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setBeds(num as any)}
                  >
                    {num === null ? "Any" : num}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Bathrooms</h3>
              <div className="flex gap-2">
                {[null, 1, 2, 3, 4, 5, "6+"].map((num, i) => (
                  <Button
                    key={i}
                    variant={bathrooms === num ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setBathrooms(num as any)}
                  >
                    {num === null ? "Any" : num}
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="property" className="space-y-4 py-4">
            <h3 className="font-medium mb-4">Property type</h3>
            <div className="grid grid-cols-2 gap-4">
              {["House", "Apartment", "Guesthouse", "Hotel", "Villa", "Resort", "Cabin", "Farm"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`property-${type}`}
                    checked={propertyType.includes(type)}
                    onCheckedChange={() => handlePropertyTypeChange(type)}
                  />
                  <Label htmlFor={`property-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="amenities" className="space-y-4 py-4">
            <h3 className="font-medium mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Wifi",
                "Kitchen",
                "Washer",
                "Dryer",
                "Air conditioning",
                "Heating",
                "Pool",
                "Hot tub",
                "Free parking",
                "Gym",
                "TV",
                "Iron",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={`amenity-${amenity}`}
                    checked={amenities.includes(amenity)}
                    onCheckedChange={() => handleAmenitiesChange(amenity)}
                  />
                  <Label htmlFor={`amenity-${amenity}`}>{amenity}</Label>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex justify-between">
          <Button variant="outline" onClick={handleReset}>
            Clear all
          </Button>
          <Button>Show results</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

