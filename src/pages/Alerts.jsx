import React from "react";
import "./Alerts.css";

const Alerts = () => {
  const alerts = [
    { id: 1, message: "Stock low for Item #102", type: "Warning" },
    { id: 2, message: "New version available", type: "Info" },
    { id: 3, message: "Failed login attempt", type: "Critical" },
  ];

  return (
    <div className="alerts-container">
      <h2>System Alerts</h2>
      <table className="alerts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Alert Message</th>
            <th>Severity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.message}</td>
              <td className={`severity ${alert.type.toLowerCase()}`}>{alert.type}</td>
              <td>
                <button className="delete-btn">Dismiss</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alerts;
