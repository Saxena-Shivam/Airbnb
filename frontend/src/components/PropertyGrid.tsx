import React from "react";

interface PropertyGridProps {
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
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  isTotalBeforeTaxes,
  onToggleFavorite,
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

export default PropertyGrid;
