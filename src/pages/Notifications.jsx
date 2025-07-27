import React from "react";
import "./Notifications.css";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Order Received",
      message: "Order #4567 has been placed.",
      time: "5 mins ago",
      type: "info",
    },
    {
      id: 2,
      title: "Inventory Alert",
      message: "Low stock on Product A.",
      time: "2 hours ago",
      type: "warning",
    },
    {
      id: 3,
      title: "New Message",
      message: "You have a message from HR.",
      time: "1 day ago",
      type: "message",
    },
  ];

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.map((notif) => (
          <div key={notif.id} className={`notification-card ${notif.type}`}>
            <div className="notif-title">{notif.title}</div>
            <div className="notif-message">{notif.message}</div>
            <div className="notif-time">{notif.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
