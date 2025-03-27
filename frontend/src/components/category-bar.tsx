import { Home, Castle, Mountain, Warehouse, Tent, Building, Waves, Building2, Trees, TreePine } from "lucide-react"

const categories = [
  { name: "Farms", icon: Warehouse },
  { name: "Icons", icon: Castle },
  { name: "Amazing views", icon: Mountain },
  { name: "Rooms", icon: Home },
  { name: "Camping", icon: Tent },
  { name: "Top cities", icon: Building },
  { name: "Amazing pools", icon: Waves },
  { name: "Cabins", icon: Building2 },
  { name: "Countryside", icon: Trees },
  { name: "Treehouses", icon: TreePine },
]

export function CategoryBar() {
  return (
    <div className="flex items-center gap-8 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-1 min-w-[56px] cursor-pointer ${index === 0 ? "border-b-2 border-black pb-2" : ""}`}
        >
          <category.icon className="h-6 w-6" />
          <span className="text-xs">{category.name}</span>
        </div>
      ))}
      <div className="pl-4">
        <button className="rounded-full p-2 border border-gray-200 shadow-sm">
          <span className="sr-only">Next</span>
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
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

