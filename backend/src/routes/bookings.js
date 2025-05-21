const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const authenticateToken = require("../middleware/auth");

// Create a new booking
router.post("/", authenticateToken, bookingController.createBooking);

// Get all bookings for a user
router.get("/", authenticateToken, bookingController.getUserBookings);

// Get a specific booking by ID
router.get("/:id", authenticateToken, bookingController.getBookingById);

// Update a booking by ID
router.put("/:id", authenticateToken, bookingController.updateBooking);

// Delete a booking by ID
router.delete("/:id", authenticateToken, bookingController.deleteBooking);

module.exports = router;