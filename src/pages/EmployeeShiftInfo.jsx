import React from "react";
import "./EmployeeShiftInfo.css";

const EmployeeShiftInfo = () => {
  return (
    <div className="shift-page">
      <h2>Shift Information</h2>
      <div className="shift-box">
        <p><strong>Shift:</strong> Morning</p>
        <p><strong>Timing:</strong> 9:00 AM - 5:00 PM</p>
        <p><strong>Lunch Break:</strong> 1:00 PM - 1:30 PM</p>
        <p><strong>Supervisor:</strong> John Doe</p>
      </div>
    </div>
  );
};

export default EmployeeShiftInfo;