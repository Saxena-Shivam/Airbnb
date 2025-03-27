import { Search } from "@/components/search"
import { CategoryBar } from "@/components/category-bar"
import { PropertyGrid } from "@/components/property-grid"
import { Header } from "@/components/header"
import { Toggle } from "@/components/ui/toggle"
import { FilterModal } from "@/components/filter-modal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center mb-8">
          <Search />
        </div>
        <CategoryBar />
        <div className="flex justify-between items-center my-4">
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <FilterModal />
            <div className="flex items-center gap-2 text-sm">
              <span>Display total before taxes</span>
              <Toggle />
            </div>
          </div>
        </div>
        <PropertyGrid />
      </div>
    </main>
  )
}

