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
import FilterModal from "../components/filter-modal"; // Import the FilterModal component

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Header = ({ isSearchCompact }: { isSearchCompact: boolean }) => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const languages = ["English", "Español", "Français", "Deutsch", "中文"];

  const languageRef = React.useRef<HTMLDivElement>(null);
  const profileRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageDropdownOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setUserEmail(email);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate login
  };

  const handleLogout = () => {
    // Clear localStorage and update state
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setUserEmail(null);
    setIsLoggedIn(false);
  };

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

        {/* Navigation bar for full mode */}
        {!isSearchCompact && (
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium text-sm hover:text-black">
              Stays
            </Link>
            <Link
              to="/experiences"
              className="text-gray-500 text-sm hover:text-black"
            >
              Experiences
            </Link>
          </nav>
        )}

        {/* Compact search bar */}
        {isSearchCompact && (
          <div className="hidden md:flex flex-1 justify-center">
            <Search compact={true} />
          </div>
        )}

        <div className="flex items-center gap-4">
          <Link to="/host">
            <button className="hidden md:flex text-sm font-medium bg-transparent hover:bg-gray-100 py-2 px-4 rounded-md">
              Airbnb your home
            </button>
          </Link>
          <div className="relative" ref={languageRef}>
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
          <div className="relative" ref={profileRef}>
            <button
              className="flex items-center gap-2 rounded-full border border-gray-300 p-2"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <>
                <Menu className="h-4 w-4" />
                {userEmail ? (
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-sm font-bold">
                    {userEmail.charAt(0).toUpperCase()}
                  </div>
                ) : (
                  <User className="h-6 w-6 text-gray-500" />
                )}
              </>
            </button>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  {userEmail ? (
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
                        <button onClick={handleLogout}>Log out</button>
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
                    </>
                  ) : (
                    <>
                      <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                        <Link to="/auth/login" onClick={handleLogin}>
                          Log in
                        </Link>
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
                        <Link to="/help">Help</Link>
                      </li>
                    </>
                  )}
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
    <div
      className="flex items-center rounded-full border border-gray-300 shadow-md px-6 transition-all duration-300 w-full max-w-md py-2 justify-center fixed-height"
      style={{
        height: "40px", // Ensure consistent height
        marginLeft: "50px", // Shift compact search bar to the right
      }}
    >
      <div className="px-4 hover:bg-gray-200 cursor-pointer transition-colors rounded-l-full">
        <div className="text-xs font-medium">Anywhere</div>
      </div>
      <div
        className="px-4 hover:bg-gray-200 cursor-pointer transition-colors relative"
        style={{
          borderLeft: "1px solid gray",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <div className="text-xs font-medium">Any week</div>
      </div>
      <div
        className="px-4 pr-4 hover:bg-gray-200 cursor-pointer transition-colors relative"
        style={{
          borderLeft: "1px solid gray",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <div className="text-xs font-medium">Add guests</div>
      </div>
      <button className="rounded-full bg-red-500 hover:bg-red-600 h-8 w-8 flex items-center justify-center ml-20">
        <SearchIcon className="h-4 w-4 text-white" />
      </button>
    </div>
  );
};

const CategoryBar = ({
  isTotalBeforeTaxes,
  setIsTotalBeforeTaxes,
  onOpenFilterModal,
}: {
  isTotalBeforeTaxes: boolean;
  setIsTotalBeforeTaxes: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenFilterModal: () => void;
}) => {
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
    { name: "Luxe", icon: Trees },
    { name: "Shared homes", icon: Building2 },
    { name: "Beachfront", icon: Waves },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );

  const containerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center gap-3 mb-3">
      {/* Left slider button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Scrollable category container */}
      <div
        ref={containerRef}
        className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide mx-10"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-1 min-w-[56px] cursor-pointer ${
              selectedCategory === category.name
                ? "border-b-2 border-black"
                : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <category.icon
              className={`h-6 w-6 text-gray-500 hover:text-black transition-colors ${
                selectedCategory === category.name ? "text-black" : ""
              }`}
            />
            <span
              className={`text-xs text-gray-500 hover:text-black transition-colors ${
                selectedCategory === category.name ? "text-black underline" : ""
              }`}
            >
              {category.name}
            </span>
          </div>
        ))}
      </div>

      {/* Right slider button */}
      <button
        className="bg-white border border-gray-300 rounded-full p-2 shadow-md z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Filters and Display total before taxes */}
      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-sm"
          onClick={onOpenFilterModal} // Open the filter modal
        >
          <Filter className="h-4 w-4" />
          Filters
        </button>
        <div className="flex items-center text-sm">
          <span>Display total before taxes</span>
          <button
            className={`relative inline-flex h-6 w-15 items-center rounded-full ${
              isTotalBeforeTaxes ? "bg-black" : "bg-gray-500"
            }`}
            onClick={() => setIsTotalBeforeTaxes(!isTotalBeforeTaxes)}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                isTotalBeforeTaxes ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const PropertyGrid = ({
  properties,
  isTotalBeforeTaxes,
  onToggleFavorite,
}: {
  properties: {
    id: number;
    location: string;
    distance: string;
    dates: string;
    cost: number;
    rating: number | null;
    isFavorite: boolean;
    isGuestFavorite: boolean;
    imageUrl: string;
  }[];
  isTotalBeforeTaxes: boolean;
  onToggleFavorite: (id: number) => void;
}) => {
  const calculateCost = (cost: number) => {
    return isTotalBeforeTaxes ? cost : Math.round(cost * 1.18); // Add 18% tax
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="group cursor-pointer">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <img
                src={property.imageUrl || "/placeholder.svg"}
                alt={property.location}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <button
                className="absolute top-2 right-2 z-10 text-white hover:text-white bg-transparent border-none"
                onClick={() => onToggleFavorite(property.id)}
              >
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
                <span className="font-medium">
                  ₹{calculateCost(property.cost)} night
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MapView = ({
  properties,
  isTotalBeforeTaxes,
}: {
  properties: {
    id: number;
    location: string;
    lat: number;
    lng: number;
    cost: number;
  }[];
  isTotalBeforeTaxes: boolean;
}) => {
  const calculateCost = (cost: number) => {
    return isTotalBeforeTaxes ? cost : Math.round(cost * 1.18); // Add 18% tax
  };

  return (
    <div className="h-[500px] w-full mt-4">
      <MapContainer
        center={[28.7041, 77.1025]} // Centered on Delhi
        zoom={5}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.lat, property.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="text-center">
                <p className="font-medium">{property.location}</p>
                <p className="text-gray-500">
                  ₹{calculateCost(property.cost)} night
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Airbnb Clone. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/help" className="hover:underline">
            Help
          </Link>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  const [showMap, setShowMap] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isSearchCompact, setIsSearchCompact] = useState(false);
  const [isTotalBeforeTaxes, setIsTotalBeforeTaxes] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [properties, setProperties] = useState([
    {
      id: 1,
      location: "Manali, India",
      distance: "396 kilometres away",
      dates: "1-6 Apr",
      cost: 4500,
      rating: 4.88,
      isFavorite: false,
      isGuestFavorite: true,
      imageUrl: "images/image1.avif",
    },
    {
      id: 2,
      location: "Pharog, India",
      distance: "293 kilometres away",
      dates: "Available",
      cost: 3800,
      rating: null,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "images/image2.avif",
    },
    {
      id: 3,
      location: "Bir, India",
      distance: "384 kilometres away",
      dates: "1-6 Jun",
      cost: 5200,
      rating: null,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "images/image3.avif",
    },
    {
      id: 4,
      location: "Shimla, India",
      distance: "150 kilometres away",
      dates: "1-6 Apr",
      cost: 4200,
      rating: 4.95,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "images/image4.avif",
    },
    {
      id: 5,
      location: "Jaipur, India",
      distance: "280 kilometres away",
      dates: "1-6 May",
      cost: 3500,
      rating: 4.5,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "images/image5.avif",
    },
    {
      id: 6,
      location: "Chandigarh, India",
      distance: "250 kilometres away",
      dates: "1-6 Jul",
      cost: 4000,
      rating: 4.7,
      isFavorite: false,
      isGuestFavorite: true,
      imageUrl: "images/image6.avif",
    },
    {
      id: 7,
      location: "Lucknow, India",
      distance: "500 kilometres away",
      dates: "1-6 Aug",
      cost: 3200,
      rating: 4.2,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "images/image8.avif",
    },
    {
      id: 8,
      location: "Delhi, India",
      distance: "300 kilometres away",
      dates: "1-6 Sep",
      cost: 4800,
      rating: 4.9,
      isFavorite: false,
      isGuestFavorite: true,
      imageUrl: "images/image9.avif",
    },
    {
      id: 9,
      location: "Agra, India",
      distance: "200 kilometres away",
      dates: "Available",
      cost: 3000,
      rating: null,
      isFavorite: false,
      isGuestFavorite: false,
      imageUrl: "images/image10.avif",
    },
  ]);

  const toggleFavorite = (id: number) => {
    setProperties((prevProperties) => {
      const updatedProperties = prevProperties.map((property) =>
        property.id === id
          ? { ...property, isFavorite: !property.isFavorite }
          : property
      );

      // Update localStorage with the new list of favorite properties
      const favoriteProperties = updatedProperties.filter(
        (property) => property.isFavorite
      );
      localStorage.setItem(
        "favoriteProperties",
        JSON.stringify(favoriteProperties)
      );

      return updatedProperties;
    });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollThreshold = 100; // Adjust threshold for smoother transition
      if (window.scrollY > scrollThreshold && window.scrollY > lastScrollY) {
        setIsSearchVisible(false);
        setIsSearchCompact(true);
      } else if (
        window.scrollY < scrollThreshold &&
        window.scrollY < lastScrollY
      ) {
        setIsSearchVisible(true);
        setIsSearchCompact(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Header isSearchCompact={isSearchCompact} />
      <div className="container mx-auto px-4 py-4 pt-20">
        <div
          className={`flex justify-center mb-8 mt-4 transition-transform duration-300 ${
            isSearchVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {!isSearchCompact && <Search />}
        </div>
        <CategoryBar
          isTotalBeforeTaxes={isTotalBeforeTaxes}
          setIsTotalBeforeTaxes={setIsTotalBeforeTaxes}
          onOpenFilterModal={() => setIsFilterModalOpen(true)}
        />
        {showMap ? (
          <MapView
            properties={properties.map((property) => ({
              id: property.id,
              location: property.location,
              lat: 0, // Replace with actual latitude
              lng: 0, // Replace with actual longitude
              cost: property.cost,
            }))}
            isTotalBeforeTaxes={isTotalBeforeTaxes}
          />
        ) : (
          <PropertyGrid
            properties={properties}
            isTotalBeforeTaxes={isTotalBeforeTaxes}
            onToggleFavorite={toggleFavorite}
          />
        )}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[1000]">
          <button
            className="bg-gray-800 hover:bg-black text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg"
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
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
      <Footer />
    </main>
  );
};

export default HomePage;
