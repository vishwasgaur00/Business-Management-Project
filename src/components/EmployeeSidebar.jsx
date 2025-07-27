import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTasks,
  FaClock,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./EmployeeSidebar.css";

const EmployeeSidebar = ({ isOpen }) => {
  return (
    <div
      className="employee-sidebar"
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <ul>
        <li>
          <Link to="/employee/dashboard">
            <FaTachometerAlt className="sidebar-icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/employee/tasks">
            <FaTasks className="sidebar-icon" />
            <span>My Tasks</span>
          </Link>
        </li>
        <li>
          <Link to="/employee/shift-info">
            <FaClock className="sidebar-icon" />
            <span>Shift Info</span>
          </Link>
        </li>
        <li>
          <Link to="/employee/messages">
            <FaEnvelope className="sidebar-icon" />
            <span>Messages</span>
          </Link>
        </li>
        <li>
          <Link to="/employee/settings">
            <FaCog className="sidebar-icon" />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignOutAlt className="sidebar-icon" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EmployeeSidebar;
