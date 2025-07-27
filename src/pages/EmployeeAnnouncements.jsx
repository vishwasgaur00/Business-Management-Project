import React from "react";
import "./EmployeeAnnouncements.css";

const EmployeeAnnouncements = () => {
  return (
    <div className="announcements-page">
      <h2>Announcements</h2>
      <ul className="announcement-list">
        <li>
          <strong>HR Policy Update:</strong> New guidelines on leave encashment. Effective from 1-Aug-2025.
        </li>
        <li>
          <strong>Holiday Notice:</strong> Office will remain closed on 15-Aug-2025 for Independence Day.
        </li>
        <li>
          <strong>Training Session:</strong> Soft skills training scheduled for 5-Aug-2025.
        </li>
      </ul>
    </div>
  );
};

export default EmployeeAnnouncements;