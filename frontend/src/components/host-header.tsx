import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HostHeader() {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Airbnb"
            width={32}
            height={32}
            className="text-red-500"
          />
        </Link>

        <Button className="rounded-full bg-red-500 hover:bg-red-600">Airbnb Setup</Button>
      </div>
    </header>
  )
}

