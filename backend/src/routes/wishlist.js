const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController");
const authenticateToken = require("../middleware/auth");

// Route to add a property to the wishlist
router.post("/", authenticateToken, wishlistController.addToWishlist);

// Route to get the user's wishlist
router.get("/", authenticateToken, wishlistController.getWishlist);

module.exports = router;