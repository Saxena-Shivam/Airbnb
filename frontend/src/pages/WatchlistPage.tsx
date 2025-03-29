import React from "react";
import { Link } from "react-router-dom";

const WatchlistPage = () => {
  const favoriteProperties = JSON.parse(
    localStorage.getItem("favoriteProperties") || "[]"
  );

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold mb-4">Your Watchlist</h1>
      {favoriteProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteProperties.map((property: any) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={property.imageUrl || "/placeholder.svg"}
                  alt={property.location}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-medium">{property.location}</h3>
                <p className="text-gray-500 text-sm">{property.distance}</p>
                <p className="text-gray-500 text-sm">{property.dates}</p>
                <p className="mt-1">
                  <span className="font-medium">₹{property.cost} night</span>
                </p>
                <Link to={`/booking/${property.id}`}>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          You have no properties in your watchlist.
        </p>
      )}
      <Link to="/" className="text-blue-500 hover:underline mt-4 block">
        Back to Home
      </Link>
    </div>
  );
};

export default WatchlistPage;
