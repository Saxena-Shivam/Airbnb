import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, User } from "lucide-react"
import Link from "next/link"

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-full border-gray-300">
          <Menu className="h-4 w-4" />
          <User className="h-6 w-6 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/auth/login">Log in</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/auth/signup">Sign up</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/host">Airbnb your home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/host/experiences">Host an experience</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/help">Help</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

