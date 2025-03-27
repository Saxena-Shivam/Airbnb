"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  SearchIcon,
  Home,
  Castle,
  Mountain,
  Warehouse,
  Tent,
  Building,
  Waves,
  Building2,
  Trees,
  TreePine,
  Menu,
  User,
  Globe,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const cities = [
  { id: 1, name: "Chandigarh", lat: 30.7333, lng: 76.7794, cost: "₹29,671" },
  { id: 2, name: "Jaipur", lat: 26.9124, lng: 75.7873, cost: "₹22,271" },
  { id: 3, name: "Lucknow", lat: 26.8467, lng: 80.9462, cost: "₹18,715" },
  { id: 4, name: "Hyderabad", lat: 17.385, lng: 78.4867, cost: "₹14,493" },
];

const Header = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const languages = ["English", "Español", "Français", "Deutsch", "中文"];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center relative group">
          <img
            src="/logo1.png"
            alt="Airbnb"
            width={102}
            height={32}
            className="text-red-500 group-hover:opacity-0 transition-opacity duration-200"
          />
          <img
            src="/logo2.png"
            alt="Airbnb"
            width={102}
            height={32}
            className="text-red-500 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-sm hover:text-black">
            Homes
          </Link>
          <Link
            to="/experiences"
            className="text-gray-500 text-sm hover:text-black"
          >
            Experiences
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/host">
            <button className="hidden md:flex text-sm font-medium bg-transparent hover:bg-gray-100 py-2 px-4 rounded-md">
              Airbnb your home
            </button>
          </Link>
          <div className="relative">
            <button
              className="rounded-full p-2 hover:bg-gray-100"
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            >
              <Globe className="h-5 w-5" />
            </button>
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  {languages.map((language, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        console.log(`Language selected: ${language}`);
                        setLanguageDropdownOpen(false);
                      }}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 rounded-full border border-gray-300 p-2"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <Menu className="h-4 w-4" />
              <User className="h-6 w-6 text-gray-500" />
            </button>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                    <Link to="/auth/login">Log in</Link>
                  </li>
                  <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                    <Link to="/auth/signup">Sign up</Link>
                  </li>
                  <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                    <Link to="/host">Airbnb your home</Link>
                  </li>
                  <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                    <Link to="/blog">Host an experience</Link>
                  </li>
                  <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                    <Link to="/profile">Profile</Link> {/* Fixed closing tag */}
                  </li>
                  <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                    <Link to="/help">Help</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const Search = () => {
  return (
    <div className="flex items-center rounded-full border shadow-sm divide-x">
      <div className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors rounded-full">
        <div className="text-sm font-medium">Where</div>
        <div className="text-sm text-gray-500">Search destinations</div>
      </div>
      <div className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors rounded-full">
        <div className="text-sm font-medium">Check in</div>
        <div className="text-sm text-gray-500">Add dates</div>
      </div>
      <div className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors rounded-full">
        <div className="text-sm font-medium">Check out</div>
        <div className="text-sm text-gray-500">Add dates</div>
      </div>
      <div className="px-6 py-3 pr-2 hover:bg-gray-100 cursor-pointer transition-colors rounded-full">
        <div className="text-sm font-medium">Who</div>
        <div className="text-sm text-gray-500">Add guests</div>
      </div>
      <div className="pl-2 pr-2">
        <button className="rounded-full bg-red-500 hover:bg-red-600 h-12 w-12 flex items-center justify-center">
          <SearchIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

const CategoryBar = () => {
  const categories = [
    { name: "Farms", icon: Warehouse },
    { name: "Icons", icon: Castle },
    { name: "Amazing views", icon: Mountain },
    { name: "Rooms", icon: Home },
    { name: "Camping", icon: Tent },
    { name: "Top cities", icon: Building },
    { name: "Amazing pools", icon: Waves },
    { name: "Cabins", icon: Building2 },
    { name: "Countryside", icon: Trees },
    { name: "Treehouses", icon: TreePine },
  ];

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [showTotalBeforeTaxes, setShowTotalBeforeTaxes] = useState(false); // Fix: Add setShowTotalBeforeTaxes
  const containerRef = React.useRef<HTMLDivElement>(null);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Check scroll position after a short delay to allow smooth scrolling to complete
      setTimeout(checkScrollPosition, 300);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="relative flex-1">
          <div
            ref={containerRef}
            className="flex items-center gap-8 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-1 min-w-[56px] cursor-pointer ${
                  index === 0 ? "border-b-2 border-black pb-2" : ""
                }`}
              >
                <category.icon className="h-6 w-6" />
                <span className="text-xs">{category.name}</span>
              </div>
            ))}
          </div>

          {showLeftButton && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-10"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}

          {showRightButton && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-10"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm">
            <Filter className="h-4 w-4" />
            Filters
          </button>
          <div className="flex items-center gap-2 text-sm">
            <span>Display total before taxes</span>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                showTotalBeforeTaxes ? "bg-gray-900" : "bg-gray-200"
              }`}
              onClick={() => setShowTotalBeforeTaxes(!showTotalBeforeTaxes)} // Fix: Use setShowTotalBeforeTaxes
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  showTotalBeforeTaxes ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyGrid = () => {
  const properties = [
    {
      id: 1,
      location: "Manali, India",
      distance: "396 kilometres away",
      dates: "1-6 Apr",
      price: "₹4,500 night",
      rating: 4.88,
      isFavorite: true,
      isGuestFavorite: true,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      location: "Pharog, India",
      distance: "293 kilometres away",
      dates: "Available",
      price: "₹3,800 night",
      rating: null,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      location: "Bir, India",
      distance: "384 kilometres away",
      dates: "1-6 Jun",
      price: "₹5,200 night",
      rating: null,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      location: "Shimla, India",
      distance: "150 kilometres away",
      dates: "1-6 Apr",
      price: "₹4,200 night",
      rating: 4.95,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 5,
      location: "Jaipur, India",
      distance: "280 kilometres away",
      dates: "1-6 May",
      price: "₹3,500 night",
      rating: 4.5,
      isFavorite: true,
      isGuestFavorite: false,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 6,
      location: "Chandigarh, India",
      distance: "250 kilometres away",
      dates: "1-6 Jul",
      price: "₹4,000 night",
      rating: 4.7,
      isFavorite: false,
      isGuestFavorite: true,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 7,
      location: "Lucknow, India",
      distance: "500 kilometres away",
      dates: "1-6 Aug",
      price: "₹3,200 night",
      rating: 4.2,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((property) => (
        <div key={property.id} className="group cursor-pointer">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <img
              src={property.imageUrl || "/placeholder.svg"}
              alt={property.location}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
            <button className="absolute top-2 right-2 z-10 text-white hover:text-white bg-transparent border-none">
              <Heart
                className={`h-6 w-6 ${
                  property.isFavorite
                    ? "fill-red-500 stroke-red-500"
                    : "stroke-white"
                }`}
              />
            </button>
            {property.isGuestFavorite && (
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md text-xs font-medium">
                Guest favourite
              </div>
            )}
          </div>
          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="font-medium">{property.location}</h3>
              {property.rating && (
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{property.rating}</span>
                </div>
              )}
            </div>
            <p className="text-gray-500 text-sm">{property.distance}</p>
            <p className="text-gray-500 text-sm">{property.dates}</p>
            <p className="mt-1">
              <span className="font-medium">{property.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const MapView = () => {
  return (
    <div className="h-[500px] w-full mt-4">
      <MapContainer
        center={[28.7041, 77.1025]}
        zoom={5}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.lat, city.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="text-center">
                <p className="font-medium">{city.name}</p>
                <p className="text-gray-500">{city.cost}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

const HomePage = () => {
  const [showMap, setShowMap] = useState(false);
  const [showTotalBeforeTaxes, setShowTotalBeforeTaxes] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        setIsSearchVisible(false); // Hide after scrolling down 100px
      } else if (window.scrollY < lastScrollY) {
        setIsSearchVisible(true); // Show on scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-4 pt-20">
        <div
          className={`flex justify-center mb-8 mt-4 transition-transform duration-300 ${
            isSearchVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Search />
        </div>
        <CategoryBar />
        {showMap ? <MapView /> : <PropertyGrid />}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <button
            className="bg-gray-800 hover:bg-black text-white rounded-full px-4 py-3 flex items-center gap-2"
            onClick={() => setShowMap(!showMap)}
          >
            <span>{showMap ? "Show list" : "Show map"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map"
            >
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
              <line x1="9" x2="9" y1="3" y2="18" />
              <line x1="15" x2="15" y1="6" y2="21" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
