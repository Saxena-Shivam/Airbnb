const Notification = require('../models/notification'); // Assuming you have a notification model

// Fetch notifications for a user
exports.getNotifications = async (req, res) => {
  try {
    const userId = req.user.userId; // Assuming user ID is stored in the request after authentication
    const notifications = await Notification.find({ user_id: userId }).sort({ created_at: -1 });
    
    res.status(200).json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};

// Mark notification as read
exports.markAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const notification = await Notification.findByIdAndUpdate(notificationId, { is_read: true }, { new: true });

    if (!notification) {
      return res.status(404).json({ error: "Notification not found" });
    }

    res.status(200).json({ message: "Notification marked as read", notification });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    res.status(500).json({ error: "Failed to mark notification as read" });
  }
};