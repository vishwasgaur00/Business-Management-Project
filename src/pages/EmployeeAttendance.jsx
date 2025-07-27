import React from "react";
import "./EmployeeAttendance.css";

const EmployeeAttendance = () => {
  return (
    <div className="attendance-page">
      <h2>Attendance</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Clock In</th>
            <th>Clock Out</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>27-Jul-2025</td>
            <td>9:03 AM</td>
            <td>5:00 PM</td>
            <td>Present</td>
          </tr>
          <tr>
            <td>26-Jul-2025</td>
            <td>9:01 AM</td>
            <td>5:02 PM</td>
            <td>Present</td>
          </tr>
          <tr>
            <td>25-Jul-2025</td>
            <td>—</td>
            <td>—</td>
            <td>Absent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeAttendance;