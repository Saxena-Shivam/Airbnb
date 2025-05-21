const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");
const authenticateToken = require("../middleware/auth");

// Fetch all properties
router.get("/", propertyController.getAllProperties);

// Add a new property
router.post("/", authenticateToken, propertyController.addProperty);

// Update an existing property
router.put("/:id", authenticateToken, propertyController.updateProperty);

// Delete a property
router.delete("/:id", authenticateToken, propertyController.deleteProperty);

module.exports = router;