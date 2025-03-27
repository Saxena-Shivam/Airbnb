import { Link } from "react-router-dom"
import { Check, ChevronDown } from "lucide-react"

const HostHeader = () => {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/placeholder.svg" alt="Airbnb" width={32} height={32} className="text-red-500" />
        </Link>

        <button className="rounded-full bg-red-500 hover:bg-red-600 text-white px-4 py-2">Airbnb Setup</button>
      </div>
    </header>
  )
}

const HostPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HostHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Your home could make ₹15,647 on Airbnb</h1>
              <p className="text-lg text-gray-500">7 nights · 4 guests · Estimated earnings</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Explore what you can earn</span>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Map showing potential earnings" className="w-full h-full object-cover" />
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
                <img
                  src="/placeholder.svg"
                  alt="Airbnb app screenshot - Tell guests what your place has to offer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative h-[400px] w-[220px]">
                <img
                  src="/placeholder.svg"
                  alt="Airbnb app screenshot - Tell us about your place"
                  className="w-full h-full object-contain"
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
              <img src="/placeholder.svg" alt="AirCover for Hosts" width={120} height={40} className="object-contain" />
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

            <button className="border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50">
              Learn about AirCover
            </button>
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
                  <img
                    src="/placeholder.svg"
                    alt="Listing editor"
                    className="w-[150px] h-[300px] object-contain mx-auto"
                  />
                </div>
                <h3 className="font-medium">Listing editor</h3>
                <p className="text-sm text-gray-500">Showcase every detail of your home</p>
              </div>

              <div className="text-center">
                <div className="relative h-[300px] mb-4">
                  <img src="/placeholder.svg" alt="Calendar" className="w-[150px] h-[300px] object-contain mx-auto" />
                </div>
                <h3 className="font-medium">Calendar</h3>
                <p className="text-sm text-gray-500">Manage your availability and pricing</p>
              </div>

              <div className="text-center">
                <div className="relative h-[300px] mb-4">
                  <img src="/placeholder.svg" alt="Messages" className="w-[150px] h-[300px] object-contain mx-auto" />
                </div>
                <h3 className="font-medium">Messages</h3>
                <p className="text-sm text-gray-500">Quickly message guests and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your questions, answered</h2>

            <div className="space-y-4 mb-8">
              <div className="border-b pb-4">
                <button className="flex w-full justify-between items-center text-lg font-medium">
                  <span>Top questions</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>

              <div className="border-b pb-4">
                <button className="flex w-full justify-between items-center text-lg font-medium">
                  <span>Hosting basics</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>

              <div className="border-b pb-4">
                <button className="flex w-full justify-between items-center text-lg font-medium">
                  <span>Policy & regulations</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-medium">Still have questions?</h3>
              <p className="text-gray-500">Get answers from experienced hosts and our support team.</p>
              <button className="rounded-full bg-black hover:bg-gray-800 text-white px-4 py-2">Ask a host</button>
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
                  <Link to="#" className="text-gray-500 hover:underline">
                    Help Centre
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    AirCover
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    Safety information
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Hosting</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    Airbnb your home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    AirCover for Hosts
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    Hosting resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Airbnb</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    New features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">© 2023 Airbnb, Inc.</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:underline">
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

export default HostPage

