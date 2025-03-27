import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "10 Most Beautiful Destinations for Your Next Airbnb Stay",
    excerpt: "Discover breathtaking locations around the world that are perfect for your next vacation.",
    image: "/placeholder.svg?height=300&width=600",
    author: "Sarah Johnson",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Travel",
  },
  {
    id: 2,
    title: "How to Become a Successful Airbnb Host in 2023",
    excerpt: "Learn the tips and tricks to maximize your earnings and get great reviews as an Airbnb host.",
    image: "/placeholder.svg?height=300&width=600",
    author: "Michael Chen",
    date: "June 2, 2023",
    readTime: "8 min read",
    category: "Hosting",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Airbnb's New Features",
    excerpt: "Everything you need to know about the latest updates and features on the Airbnb platform.",
    image: "/placeholder.svg?height=300&width=600",
    author: "Emma Wilson",
    date: "June 10, 2023",
    readTime: "6 min read",
    category: "News",
  },
  {
    id: 4,
    title: "Budget-Friendly Airbnb Stays for Family Vacations",
    excerpt: "Find the perfect affordable accommodations for your next family trip without compromising on quality.",
    image: "/placeholder.svg?height=300&width=600",
    author: "David Thompson",
    date: "June 18, 2023",
    readTime: "7 min read",
    category: "Budget Travel",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Airbnb Blog</h1>
              <p className="text-xl text-muted-foreground">Stories, tips, and guides to inspire your next stay</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Featured post" fill className="object-cover" />
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-sm font-medium text-red-500 mb-2">Featured</div>
                <h2 className="text-3xl font-bold mb-4">Introducing AirCover for Hosts: Top-to-Bottom Protection</h2>
                <p className="text-muted-foreground mb-6">
                  We're upgrading our protection for hosts with comprehensive coverage and dedicated support for every
                  host on Airbnb.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Airbnb Team</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>June 20, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>10 min read</span>
                  </div>
                </div>
                <Button className="w-fit">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-12">
              <Button variant="outline" className="rounded-full">
                All
              </Button>
              <Button variant="outline" className="rounded-full">
                Travel
              </Button>
              <Button variant="outline" className="rounded-full">
                Hosting
              </Button>
              <Button variant="outline" className="rounded-full">
                News
              </Button>
              <Button variant="outline" className="rounded-full">
                Tips
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id}>
                  <div className="relative h-[200px] overflow-hidden">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="text-sm font-medium text-red-500 mb-1">{post.category}</div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline">Load more articles</Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Subscribe to our newsletter</h2>
              <p className="text-muted-foreground">
                Get the latest news, tips, and inspiration delivered straight to your inbox.
              </p>
            </div>

            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Help Centre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    AirCover
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Safety information
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Hosting</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Airbnb your home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    AirCover for Hosts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Hosting resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Airbnb</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    New features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">© 2023 Airbnb, Inc.</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

