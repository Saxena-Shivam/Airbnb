const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const authenticateToken = require("../middleware/auth");

// Fetch notifications for the authenticated user
router.get("/", authenticateToken, notificationController.getNotifications);

module.exports = router;