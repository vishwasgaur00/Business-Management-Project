import React from "react";
import "./EmployeeLeaves.css";

const EmployeeLeaves = () => {
  return (
    <div className="leaves-page">
      <h2>Leave Status</h2>
      <div className="leave-summary">
        <p><strong>Total Leaves:</strong> 20</p>
        <p><strong>Used:</strong> 18</p>
        <p><strong>Remaining:</strong> 2</p>
      </div>
      <div className="leave-log">
        <h3>Recent Leave Applications</h3>
        <ul>
          <li>15-Jul-2025 - Sick Leave - Approved</li>
          <li>02-Jul-2025 - Personal - Approved</li>
          <li>28-Jun-2025 - Casual - Rejected</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeLeaves;