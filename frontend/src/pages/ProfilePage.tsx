"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Shield,
  Globe,
  Star,
  Menu,
  MapPin,
  Languages,
  Briefcase,
  Check,
  ChevronDown,
  User,
} from "lucide-react";

const Header = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-gray-200 bg-white">
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

          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 rounded-full border border-gray-300 p-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Menu className="h-4 w-4" />
              {userName ? (
                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-sm font-bold">
                  {userName.charAt(0).toUpperCase()}
                </div>
              ) : (
                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-sm font-bold">
                  <User className="h-6 w-6 text-gray-500" />
                </div>
              )}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <>
                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                      <Link to="/watchlist">Watchlist</Link>
                    </li>
                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                      <Link to="/messages">Messages</Link>
                    </li>
                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                      <Link to="/settings">Settings</Link>
                    </li>
                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                      <Link to="/host">Airbnb your home</Link>
                    </li>
                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                      <Link to="/blog">Host an experience</Link>
                    </li>
                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                      <Link to="/help">Help</Link>
                    </li>
                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                      <button onClick={handleLogout}>Log out</button>
                    </li>
                  </>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    location: "",
    languages: "",
    work: "",
    memberSince: new Date().getFullYear().toString(),
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editField, setEditField] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Load user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUserData((prev) => ({
      ...prev,
      name: storedUser.name || "",
      email: storedUser.email || "",
      memberSince:
        storedUser.memberSince || new Date().getFullYear().toString(),
    }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(userData));
    setIsEditing(false);
    setEditField("");
  };

  const startEditing = (field: string) => {
    setIsEditing(true);
    setEditField(field);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6">
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="text-center">
                <div className="flex justify-center mb-4 relative">
                  <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    {userData.name
                      ? userData.name.charAt(0).toUpperCase()
                      : "?"}
                  </div>
                </div>
                <h2 className="text-xl font-bold">
                  {userData.name || "Your Name"}
                </h2>
                <p className="text-gray-500 text-sm">
                  Member since {userData.memberSince}
                </p>
              </div>
              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <BadgeCheck className="h-4 w-4 text-blue-500" />
                    <span>Identity verified</span>
                  </div>
                  <button className="text-sm text-blue-600 hover:underline">
                    Verify
                  </button>
                </div>
              </div>
            </div>

            {/* Dropdown Section */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <h3 className="text-lg font-medium">More Options</h3>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {dropdownOpen && (
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      to="/settings"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Account Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/help"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">About you</h3>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {/* Email - Not editable */}
                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs">Email</span>
                  </div>
                  <p className="text-sm">{userData.email || "N/A"}</p>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span className="text-xs">Location</span>
                    </div>
                    {isEditing && editField === "location" ? (
                      <button
                        onClick={handleSave}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Save
                      </button>
                    ) : isEditing ? (
                      <button
                        onClick={() => startEditing("location")}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                    ) : null}
                  </div>
                  {isEditing && editField === "location" ? (
                    <input
                      type="text"
                      name="location"
                      value={userData.location}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md text-sm"
                      placeholder="Enter your location"
                    />
                  ) : (
                    <p className="text-sm">
                      {userData.location || (
                        <span className="text-gray-400">Add your location</span>
                      )}
                    </p>
                  )}
                </div>

                {/* Languages */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Languages className="h-4 w-4" />
                      <span className="text-xs">Languages</span>
                    </div>
                    {isEditing && editField === "languages" ? (
                      <button
                        onClick={handleSave}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Save
                      </button>
                    ) : isEditing ? (
                      <button
                        onClick={() => startEditing("languages")}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                    ) : null}
                  </div>
                  {isEditing && editField === "languages" ? (
                    <input
                      type="text"
                      name="languages"
                      value={userData.languages}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md text-sm"
                      placeholder="English, French, etc."
                    />
                  ) : (
                    <p className="text-sm">
                      {userData.languages || (
                        <span className="text-gray-400">
                          Add languages you speak
                        </span>
                      )}
                    </p>
                  )}
                </div>

                {/* Work */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-xs">Work</span>
                    </div>
                    {isEditing && editField === "work" ? (
                      <button
                        onClick={handleSave}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Save
                      </button>
                    ) : isEditing ? (
                      <button
                        onClick={() => startEditing("work")}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                    ) : null}
                  </div>
                  {isEditing && editField === "work" ? (
                    <input
                      type="text"
                      name="work"
                      value={userData.work}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md text-sm"
                      placeholder="Your profession"
                    />
                  ) : (
                    <p className="text-sm">
                      {userData.work || (
                        <span className="text-gray-400">
                          Add your profession
                        </span>
                      )}
                    </p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={handleSave}
                      className="bg-black text-white text-sm rounded-lg px-4 py-2 hover:bg-gray-800 flex items-center gap-2"
                    >
                      <Check className="h-4 w-4" />
                      Save changes
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setEditField("");
                      }}
                      className="bg-transparent text-black text-sm rounded-lg px-4 py-2 hover:bg-gray-100 border"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="border-b bg-white p-4 rounded-t-lg shadow-sm">
              <div className="flex space-x-8">
                <button
                  className={`pb-4 text-sm font-medium ${
                    activeTab === "profile"
                      ? "border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${
                    activeTab === "trips"
                      ? "border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("trips")}
                >
                  Trips
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${
                    activeTab === "wishlists"
                      ? "border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("wishlists")}
                >
                  Wishlists
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${
                    activeTab === "reviews"
                      ? "border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
                <button
                  className={`pb-4 text-sm font-medium ${
                    activeTab === "settings"
                      ? "border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  Settings
                </button>
              </div>
            </div>

            {activeTab === "profile" && (
              <div className="bg-white p-6 rounded-b-lg shadow-sm">
                <h3 className="text-xl font-medium mb-6">
                  Personal Information
                </h3>

                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <h4 className="font-medium mb-4">Basic info</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">
                          First name
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-md"
                          value={userData.name.split(" ")[0] || ""}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              name: `${e.target.value} ${
                                userData.name.split(" ")[1] || ""
                              }`.trim(),
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-md"
                          value={userData.name.split(" ")[1] || ""}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              name: `${userData.name.split(" ")[0] || ""} ${
                                e.target.value
                              }`.trim(),
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-6">
                    <h4 className="font-medium mb-4">Address</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">
                          Street address
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-md"
                          placeholder="Enter your street address"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 border rounded-md"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">
                            State/Province
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 border rounded-md"
                            placeholder="State"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">
                            ZIP/Postal code
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 border rounded-md"
                            placeholder="ZIP code"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">
                          Country
                        </label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Select country</option>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>India</option>
                          {/* Add more countries as needed */}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSave}
                      className="bg-black text-white rounded-lg px-6 py-2 hover:bg-gray-800"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "trips" && (
              <div className="bg-white p-6 rounded-b-lg shadow-sm text-center py-12">
                <h3 className="text-xl font-medium mb-2">
                  No trips booked...yet!
                </h3>
                <p className="text-gray-500 mb-6">
                  Time to dust off your bags and start planning your next
                  adventure
                </p>
                <button className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800">
                  Start searching
                </button>
              </div>
            )}

            {activeTab === "wishlists" && (
              <div className="bg-white p-6 rounded-b-lg shadow-sm text-center py-12">
                <h3 className="text-xl font-medium mb-2">
                  Create your first wishlist
                </h3>
                <p className="text-gray-500 mb-6">
                  As you search, click the heart icon to save your favorite
                  places to stay or things to do
                </p>
                <button className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800">
                  Start searching
                </button>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="bg-white p-6 rounded-b-lg shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <div>
                    <h3 className="font-medium">Reviews by you</h3>
                    <p className="text-sm text-gray-500">
                      You haven't written any reviews yet
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <div>
                    <h3 className="font-medium">Reviews about you</h3>
                    <p className="text-sm text-gray-500">
                      No one has reviewed you yet
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white p-6 rounded-b-lg shadow-sm space-y-6">
                <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <Shield className="h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Personal info</h3>
                    <p className="text-sm text-gray-500">
                      Provide personal details and how we can reach you
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <Globe className="h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Login & security</h3>
                    <p className="text-sm text-gray-500">
                      Update your password and secure your account
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <BadgeCheck className="h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Payments and payouts</h3>
                    <p className="text-sm text-gray-500">
                      Review payments, payouts, coupons, and gift cards
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
