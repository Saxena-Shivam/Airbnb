"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Edit, BadgeCheck, Shield, Globe, Star, Menu, User } from "lucide-react"

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/placeholder.svg" alt="Airbnb" width={102} height={32} className="text-red-500" />
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
  )
}

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("trips")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-gray-500 text-sm">Member since 2020</p>
              </div>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Edit className="h-4 w-4" />
                  <span>Edit profile</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BadgeCheck className="h-4 w-4" />
                  <span>Identity verified</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">About you</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-gray-500">Mumbai, India</p>
                </div>
                <div>
                  <h4 className="font-medium">Languages</h4>
                  <p className="text-sm text-gray-500">English, Hindi</p>
                </div>
                <div>
                  <h4 className="font-medium">Work</h4>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-b">
              <div className="flex space-x-8">
                <button
                  className={`pb-4 text-sm font-medium ${activeTab === "trips" ? "border-b-2 border-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("trips")}
                >
                  Trips
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${activeTab === "wishlists" ? "border-b-2 border-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("wishlists")}
                >
                  Wishlists
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${activeTab === "reviews" ? "border-b-2 border-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${activeTab === "settings" ? "border-b-2 border-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("settings")}
                >
                  Settings
                </button>
              </div>
            </div>

            {activeTab === "trips" && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No trips booked...yet!</h3>
                <p className="text-gray-500 mb-6">Time to dust off your bags and start planning your next adventure</p>
                <button className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800">Start searching</button>
              </div>
            )}

            {activeTab === "wishlists" && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Create your first wishlist</h3>
                <p className="text-gray-500 mb-6">
                  As you search, click the heart icon to save your favorite places to stay or things to do
                </p>
                <button className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800">Start searching</button>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <div>
                    <h3 className="font-medium">Reviews by you</h3>
                    <p className="text-sm text-gray-500">You haven't written any reviews yet</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <div>
                    <h3 className="font-medium">Reviews about you</h3>
                    <p className="text-sm text-gray-500">No one has reviewed you yet</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Shield className="h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Personal info</h3>
                    <p className="text-sm text-gray-500">Provide personal details and how we can reach you</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Globe className="h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Login & security</h3>
                    <p className="text-sm text-gray-500">Update your password and secure your account</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <BadgeCheck className="h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Payments and payouts</h3>
                    <p className="text-sm text-gray-500">Review payments, payouts, coupons, and gift cards</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProfilePage

