import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="employee-dashboard-content">
      <h2 className="dashboard-heading">Employee Dashboard</h2>
      <div className="employee-grid">
        <div className="employee-card" onClick={() => navigate("/employee/tasks")}>
          <h3>Tasks Today</h3>
          <p>Completed: 4 / Total: 6</p>
        </div>

        <div className="employee-card" onClick={() => navigate("/employee/shift-info")}>
          <h3>Shift Info</h3>
          <p>9:00 AM - 5:00 PM</p>
        </div>

        <div className="employee-card" onClick={() => navigate("/employee/attendance")}>
          <h3>Attendance</h3>
          <p>Clocked In: 9:03 AM</p>
        </div>

        <div className="employee-card span1-5" onClick={() => navigate("/employee/leaves")}>
          <h3>Leave Status</h3>
          <p>2 Leaves Remaining</p>
        </div>

        <div className="employee-card span1-5" onClick={() => navigate("/employee/announcements")}>
          <h3>Announcements</h3>
          <p>New HR policy update available.</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
