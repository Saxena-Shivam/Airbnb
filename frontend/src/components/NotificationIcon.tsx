import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react";

const NotificationIcon = () => {
  const [hasNewMessages, setHasNewMessages] = useState(false);

  useEffect(() => {
    // Check if there are new messages
    const newMessageFlag = localStorage.getItem("hasNewMessages") === "true";
    setHasNewMessages(newMessageFlag);
  }, []);

  return (
    <div className="relative">
      <Bell className="h-6 w-6 text-gray-500" />
      {hasNewMessages && (
        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
      )}
    </div>
  );
};

export default NotificationIcon;
