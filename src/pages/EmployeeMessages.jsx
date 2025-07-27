import React from "react";
import "./EmployeeMessages.css";

const messages = [
  { id: 1, from: "Manager", subject: "Meeting Reminder", time: "Today, 10:00 AM" },
  { id: 2, from: "HR", subject: "Policy Update", time: "Yesterday, 4:30 PM" },
];

const EmployeeMessages = () => {
  return (
    // <EmployeeLayout>
    <div className="employee-messages">
      <h2>Messages</h2>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>
            <strong>{msg.from}</strong> - {msg.subject}
            <span>{msg.time}</span>
          </li>
        ))}
      </ul>
    </div>
    // </EmployeeLayout>
  );
};

export default EmployeeMessages;
