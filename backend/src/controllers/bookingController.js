const Booking = require('../models/booking'); // Assuming you have a booking model defined
const Property = require('../models/property'); // Assuming you have a property model defined

// Create a new booking
exports.createBooking = async (req, res) => {
  const { propertyId, checkIn, checkOut } = req.body;
  const userId = req.user.userId;

  if (!propertyId || !checkIn || !checkOut) {
    return res.status(400).json({
      error: "Property ID, check-in and check-out dates are required",
    });
  }

  try {
    const booking = new Booking({
      user_id: userId,
      property_id: propertyId,
      check_in: checkIn,
      check_out: checkOut,
      status: 'pending',
    });

    await booking.save();
    res.status(201).json({
      message: "Booking request submitted",
      bookingId: booking._id,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
};

// Fetch all bookings for a user
exports.getUserBookings = async (req, res) => {
  const userId = req.user.userId;

  try {
    const bookings = await Booking.find({ user_id: userId }).populate('property_id');
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};