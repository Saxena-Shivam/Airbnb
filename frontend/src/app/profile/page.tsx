import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { BadgeCheck, Edit, Globe, Shield, Star } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Member since 2020</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  <span className="text-sm">Edit profile</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4" />
                  <span className="text-sm">Identity verified</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About you</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">Mumbai, India</p>
                </div>
                <div>
                  <h3 className="font-medium">Languages</h3>
                  <p className="text-sm text-muted-foreground">English, Hindi</p>
                </div>
                <div>
                  <h3 className="font-medium">Work</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Tabs defaultValue="trips">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="trips">Trips</TabsTrigger>
                <TabsTrigger value="wishlists">Wishlists</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="trips" className="pt-6">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No trips booked...yet!</h3>
                  <p className="text-muted-foreground mb-6">
                    Time to dust off your bags and start planning your next adventure
                  </p>
                  <Button>Start searching</Button>
                </div>
              </TabsContent>

              <TabsContent value="wishlists" className="pt-6">
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Create your first wishlist</h3>
                  <p className="text-muted-foreground mb-6">
                    As you search, click the heart icon to save your favorite places to stay or things to do
                  </p>
                  <Button>Start searching</Button>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Star className="h-6 w-6 text-yellow-400" />
                    <div>
                      <h3 className="font-medium">Reviews by you</h3>
                      <p className="text-sm text-muted-foreground">You haven't written any reviews yet</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Star className="h-6 w-6 text-yellow-400" />
                    <div>
                      <h3 className="font-medium">Reviews about you</h3>
                      <p className="text-sm text-muted-foreground">No one has reviewed you yet</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Shield className="h-6 w-6" />
                    <div>
                      <h3 className="font-medium">Personal info</h3>
                      <p className="text-sm text-muted-foreground">Provide personal details and how we can reach you</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Globe className="h-6 w-6" />
                    <div>
                      <h3 className="font-medium">Login & security</h3>
                      <p className="text-sm text-muted-foreground">Update your password and secure your account</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <BadgeCheck className="h-6 w-6" />
                    <div>
                      <h3 className="font-medium">Payments and payouts</h3>
                      <p className="text-sm text-muted-foreground">Review payments, payouts, coupons, and gift cards</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

