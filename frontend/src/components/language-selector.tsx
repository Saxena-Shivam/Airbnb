import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

const languages = [
  { name: "English", code: "en", region: "United States" },
  { name: "English", code: "en-GB", region: "United Kingdom" },
  { name: "Français", code: "fr", region: "France" },
  { name: "Español", code: "es", region: "Spain" },
  { name: "Deutsch", code: "de", region: "Germany" },
  { name: "Italiano", code: "it", region: "Italy" },
  { name: "中文", code: "zh", region: "China" },
  { name: "日本語", code: "ja", region: "Japan" },
  { name: "한국어", code: "ko", region: "Korea" },
  { name: "Português", code: "pt", region: "Brazil" },
  { name: "हिन्दी", code: "hi", region: "India" },
]

export function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>Select a language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-[300px] overflow-y-auto">
          {languages.map((language) => (
            <DropdownMenuItem key={language.code}>
              <span className="flex flex-col">
                <span>{language.name}</span>
                <span className="text-xs text-muted-foreground">{language.region}</span>
              </span>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="flex flex-col">
            <span>Currency</span>
            <span className="text-xs text-muted-foreground">₹ INR</span>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

