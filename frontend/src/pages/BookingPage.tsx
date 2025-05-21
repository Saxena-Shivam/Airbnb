import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header"; // Assuming the Airbnb navbar is in a Header component

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    checkIn: "",
    checkOut: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add booking message to "Messages" and "Notifications" sections
    const bookingMessage = `You have successfully booked the property at ${id} from ${formData.checkIn} to ${formData.checkOut}.`;
    const messages = JSON.parse(localStorage.getItem("messages") || "[]");
    const notifications = JSON.parse(
      localStorage.getItem("notifications") || "[]"
    );

    localStorage.setItem(
      "messages",
      JSON.stringify([...messages, bookingMessage])
    );
    localStorage.setItem(
      "notifications",
      JSON.stringify([...notifications, bookingMessage])
    );

    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Book Your Stay
            </h1>
            <p className="text-gray-600">
              Complete the form below to reserve property at {id}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-In Date
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-Out Date
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition duration-200 transform hover:scale-105"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Enhanced Alert Box */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100 w-full max-w-md border-2 border-red-500">
            <div className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg leading-6 font-medium text-black mb-2">
                Booking Confirmed!
              </h3>
              <div className="mt-2 px-4 py-3">
                <p className="text-sm text-gray-700">
                  Your booking for the property at{" "}
                  <span className="font-bold">{id}</span> has been successfully
                  confirmed from{" "}
                  <span className="font-bold">{formData.checkIn}</span> to{" "}
                  <span className="font-bold">{formData.checkOut}</span>.
                </p>
              </div>
              <div className="mt-5">
                <button
                  onClick={handleAlertClose}
                  className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
