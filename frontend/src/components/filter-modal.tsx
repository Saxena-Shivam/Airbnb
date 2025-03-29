import React from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modal content styled as a centered box */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 border border-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Guest favourite</h3>
            <p className="text-sm text-gray-500">
              The most loved homes on Airbnb
            </p>
          </div>
          <div>
            <h3 className="font-medium">Property type</h3>
            <p className="text-sm text-gray-500">Select property type</p>
          </div>
          <div>
            <h3 className="font-medium">Accessibility features</h3>
            <p className="text-sm text-gray-500">
              Select accessibility options
            </p>
          </div>
          <div>
            <h3 className="font-medium">Host language</h3>
            <p className="text-sm text-gray-500">Select host language</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition"
          >
            Clear all
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Show 1,000+ places
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
