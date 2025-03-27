import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Facebook, Mail } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="container max-w-md mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Log in to Airbnb</h1>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" />
        </div>

        <Button className="w-full">Log in</Button>

        <div className="flex items-center gap-2">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>

        <Button variant="outline" className="w-full flex items-center gap-2">
          <Facebook className="h-4 w-4" />
          Continue with Facebook
        </Button>

        <Button variant="outline" className="w-full flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Continue with Email
        </Button>

        <div className="text-center text-sm">
          <p>
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-red-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

