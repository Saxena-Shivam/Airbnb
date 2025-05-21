const Wishlist = require('../models/wishlist'); // Assuming you have a Wishlist model defined

// Add property to wishlist
exports.addToWishlist = async (req, res) => {
  try {
    const { propertyId } = req.body;
    const userId = req.user.userId;

    if (!propertyId) {
      return res.status(400).json({ error: "Property ID is required" });
    }

    const wishlistItem = new Wishlist({ user_id: userId, property_id: propertyId });
    await wishlistItem.save();

    res.status(201).json({ message: "Added to wishlist" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "Property already in wishlist" });
    }
    console.error("Error adding to wishlist:", error);
    res.status(500).json({ error: "Failed to add to wishlist" });
  }
};

// Get user's wishlist
exports.getWishlist = async (req, res) => {
  try {
    const userId = req.user.userId;
    const wishlist = await Wishlist.find({ user_id: userId }).populate('property_id');

    res.json(wishlist);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ error: "Failed to fetch wishlist" });
  }
};