import React from "react";
import "./EmployeeSettings.css";

const EmployeeSettings = () => {
  return (
    // <EmployeeLayout>
    <div className="employee-settings">
      <h2>Settings</h2>
      <form>
        <label>Email Notifications</label>
        <select>
          <option>Enabled</option>
          <option>Disabled</option>
        </select>

        <label>Language Preference</label>
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>

        <button type="submit">Save Settings</button>
      </form>
    </div>
    // </EmployeeLayout>
  );
};

export default EmployeeSettings;
