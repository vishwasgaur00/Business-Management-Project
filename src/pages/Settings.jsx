import React from "react";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings-page">
      <h2 className="settings-title">Settings</h2>

      <div className="settings-section">
        <h3>Edit Profile</h3>
        <label>
          Name: <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email: <input type="email" placeholder="your@email.com" />
        </label>
      </div>

      <div className="settings-section">
        <h3>Change Password</h3>
        <label>
          Current Password: <input type="password" />
        </label>
        <label>
          New Password: <input type="password" />
        </label>
        <label>
          Confirm Password: <input type="password" />
        </label>
      </div>

      <div className="settings-section">
        <h3>Notification Preferences</h3>
        <label>
          <input type="checkbox" defaultChecked /> Email Alerts
        </label>
        <label>
          <input type="checkbox" /> SMS Notifications
        </label>
      </div>

      <div className="settings-section">
        <h3>System Preferences</h3>
        <label>
          Theme:
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Settings;
