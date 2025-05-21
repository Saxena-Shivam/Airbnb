// Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, User } from "lucide-react";

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
              <Link to="/host" className="text-gray-500 text-sm">
                Airbnb your home
              </Link>
            </nav>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 rounded-full border border-gray-300 p-2 hover:shadow-md transition-shadow"
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
                  {userName ? (
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
                  ) : (
                    <>
                      <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                        <Link to="/login">Log in</Link>
                      </li>
                      <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                        <Link to="/signup">Sign up</Link>
                      </li>
                      <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                        <Link to="/host">Airbnb your home</Link>
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

export default Header;
