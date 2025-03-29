import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Menu, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/logo1.png"
              alt="Airbnb"
              width={102}
              height={32}
              className="text-red-500"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link to="/" className="font-medium text-sm">
                Stays
              </Link>
              <Link to="/experiences" className="text-gray-500 text-sm">
                Experiences
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/host">
              <button className="hidden md:flex text-sm font-medium bg-transparent hover:bg-gray-100 py-2 px-4 rounded-md">
                Airbnb your home
              </button>
            </Link>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Globe className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-gray-300 p-2">
              <Menu className="h-4 w-4" />
              <User className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "10 Most Beautiful Destinations for Your Next Airbnb Stay",
    excerpt:
      "Discover breathtaking locations around the world that are perfect for your next vacation.",
    image: "/beatiful.avif",
    author: "Sarah Johnson",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Travel",
  },
  {
    id: 2,
    title: "How to Become a Successful Airbnb Host in 2023",
    excerpt:
      "Learn the tips and tricks to maximize your earnings and get great reviews as an Airbnb host.",
    image: "/beatiful1.webp",
    author: "Michael Chen",
    date: "June 2, 2023",
    readTime: "8 min read",
    category: "Hosting",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Airbnb's New Features",
    excerpt:
      "Everything you need to know about the latest updates and features on the Airbnb platform.",
    image: "/beatiful2.avif",
    author: "Emma Wilson",
    date: "June 10, 2023",
    readTime: "6 min read",
    category: "News",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ marginLeft: "20px" }}>
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Airbnb Blog
              </h1>
              <p className="text-xl text-gray-500">
                Stories, tips, and guides to inspire your next stay
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/blogmain.avif"
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-sm font-medium text-red-500 mb-2">
                  Featured
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Introducing AirCover for Hosts: Top-to-Bottom Protection
                </h2>
                <p className="text-gray-500 mb-6">
                  We're upgrading our protection for hosts with comprehensive
                  coverage and dedicated support for every host on Airbnb.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
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
                <button className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 w-fit flex items-center">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-12">
              <button className="rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100">
                All
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100">
                Travel
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100">
                Hosting
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100">
                News
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100">
                Tips
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-red-500 mb-1">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <button className="text-black hover:underline flex items-center">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button className="border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
                Load more articles
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Subscribe to our newsletter
              </h2>
              <p className="text-gray-500">
                Get the latest news, tips, and inspiration delivered straight to
                your inbox.
              </p>
            </div>

            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              />
              <button className="bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800">
                Subscribe
              </button>
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
  );
};

export default BlogPage;
