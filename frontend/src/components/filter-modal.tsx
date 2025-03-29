import React, { useState } from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: Filters) => void;
}

interface Filters {
  priceRange: [number, number];
  cities: string[];
  propertyTypes: string[];
  hostLanguages: string[];
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  onApplyFilters,
}) => {
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 10000],
    cities: [],
    propertyTypes: [],
    hostLanguages: [],
  });

  const cityOptions = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Goa",
  ];
  const propertyOptions = [
    "Guesthouse",
    "House",
    "Apartment",
    "Villa",
    "Cabin",
    "Beachfront",
    "Countryside",
  ];
  const languageOptions = [
    "English",
    "Spanish",
    "French",
    "German",
    "Japanese",
    "Chinese",
  ];

  const toggleFilter = (category: keyof Filters, value: string) => {
    setFilters((prev) => {
      const currentArray = [...prev[category]] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];

      return {
        ...prev,
        [category]: newArray,
      };
    });
  };

  const handlePriceChange = (min: number, max: number) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [min, max],
    }));
  };

  const clearAll = () => {
    setFilters({
      priceRange: [0, 10000],
      cities: [],
      propertyTypes: [],
      hostLanguages: [],
    });
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-2000 flex items-center justify-center">
      <div
        className="bg-white w-full max-w-md h-[90vh] overflow-y-auto shadow-xl transform transition-all rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              ✕
            </button>
            <h2 className="text-lg font-medium">Filters</h2>
            <button
              onClick={clearAll}
              className="text-gray-500 hover:text-black transition-colors text-sm"
            >
              Clear all
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Price Range */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="font-medium mb-4">Price range</h3>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) =>
                  handlePriceChange(
                    Number(e.target.value),
                    filters.priceRange[1]
                  )
                }
                className="w-20 border border-gray-300 rounded-md p-2 text-sm"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  handlePriceChange(
                    filters.priceRange[0],
                    Number(e.target.value)
                  )
                }
                className="w-20 border border-gray-300 rounded-md p-2 text-sm"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Cities */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="font-medium mb-4">Cities</h3>
            <div className="grid grid-cols-2 gap-3">
              {cityOptions.map((city) => (
                <button
                  key={city}
                  onClick={() => toggleFilter("cities", city)}
                  className={`p-3 border rounded-lg text-left transition-colors ${
                    filters.cities.includes(city)
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium text-sm">{city}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Property Types */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="font-medium mb-4">Property type</h3>
            <div className="grid grid-cols-2 gap-3">
              {propertyOptions.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleFilter("propertyTypes", type)}
                  className={`p-3 border rounded-lg text-left transition-colors ${
                    filters.propertyTypes.includes(type)
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium text-sm">{type}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Host Languages */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="font-medium mb-4">Host language</h3>
            <div className="space-y-2">
              {languageOptions.map((language) => (
                <div
                  key={language}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  onClick={() => toggleFilter("hostLanguages", language)}
                >
                  <div
                    className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                      filters.hostLanguages.includes(language)
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.hostLanguages.includes(language) && (
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    )}
                  </div>
                  <span className="text-sm">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with apply button */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <button
            onClick={handleApply}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Show results
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
