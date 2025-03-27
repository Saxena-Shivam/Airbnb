import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HostHeader } from "@/components/host-header"

export default function HostPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HostHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Your home could make ₹15,647 on Airbnb</h1>
              <p className="text-lg text-muted-foreground">7 nights · 4 guests · Estimated earnings</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Explore what you can earn</span>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Map showing potential earnings"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full px-3 py-1 text-sm font-medium shadow-md">₹15,647</div>
              </div>
            </div>
          </div>
        </section>

        {/* Easy to List Section */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">It's easy to list your home on Airbnb</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
              <div className="relative h-[400px] w-[220px]">
                <Image
                  src="/placeholder.svg?height=400&width=220"
                  alt="Airbnb app screenshot - Tell guests what your place has to offer"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-[400px] w-[220px]">
                <Image
                  src="/placeholder.svg?height=400&width=220"
                  alt="Airbnb app screenshot - Tell us about your place"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <h3 className="font-medium">Create a listing for your place in just a few steps</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                </div>
                <h3 className="font-medium">Get at your own pace, and make changes whenever</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <h3 className="font-medium">Get 1:1 support from experienced hosts at any time</h3>
              </div>
            </div>
          </div>
        </section>

        {/* AirCover Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl mx-auto">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="AirCover for Hosts"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">However you host, you're protected</h2>

            <p className="text-lg mb-8">Top-to-bottom protection, included every time you host your home on Airbnb.</p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span>Up to $1M USD damage protection</span>
                <Check className="text-green-500" />
              </div>
              <div className="flex justify-between">
                <span>Up to $1M USD liability insurance</span>
                <Check className="text-green-500" />
              </div>
              <div className="flex justify-between">
                <span>24-hour safety line</span>
                <Check className="text-green-500" />
              </div>
            </div>

            <Button variant="outline" className="rounded-full">
              Learn about AirCover
            </Button>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              All the tools you need to host, all in one app
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative h-[300px] mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=150"
                    alt="Listing editor"
                    width={150}
                    height={300}
                    className="object-contain mx-auto"
                  />
                </div>
                <h3 className="font-medium">Listing editor</h3>
                <p className="text-sm text-muted-foreground">Showcase every detail of your home</p>
              </div>

              <div className="text-center">
                <div className="relative h-[300px] mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=150"
                    alt="Calendar"
                    width={150}
                    height={300}
                    className="object-contain mx-auto"
                  />
                </div>
                <h3 className="font-medium">Calendar</h3>
                <p className="text-sm text-muted-foreground">Manage your availability and pricing</p>
              </div>

              <div className="text-center">
                <div className="relative h-[300px] mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=150"
                    alt="Messages"
                    width={150}
                    height={300}
                    className="object-contain mx-auto"
                  />
                </div>
                <h3 className="font-medium">Messages</h3>
                <p className="text-sm text-muted-foreground">Quickly message guests and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your questions, answered</h2>

            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">Top questions</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>How do I get started with hosting?</p>
                    <p>How much can I earn as a host?</p>
                    <p>Is my home suitable for Airbnb?</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">Hosting basics</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>What are the requirements for hosting?</p>
                    <p>How do I set my pricing?</p>
                    <p>How do I create an attractive listing?</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">Policy & regulations</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>What are the local regulations for hosting?</p>
                    <p>Do I need to collect taxes?</p>
                    <p>What are Airbnb's hosting standards?</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-medium">Still have questions?</h3>
              <p className="text-muted-foreground">Get answers from experienced hosts and our support team.</p>
              <Button className="rounded-full bg-black hover:bg-gray-800">Ask a host</Button>
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

