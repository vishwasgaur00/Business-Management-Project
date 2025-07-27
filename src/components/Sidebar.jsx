import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxes,
  FaChartLine,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="sidebar-links">
        <li>
          <Link to="/owner/dashboard">
            <FaTachometerAlt className="icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/owner/inventory">
            <FaBoxes className="icon" /> Inventory
          </Link>
        </li>
        <li>
          <Link to="/owner/sales">
            <FaChartLine className="icon" /> Sales
          </Link>
        </li>
        <li>
          <Link to="/owner/employees">
            <FaUsers className="icon" /> Employees
          </Link>
        </li>
        <li>
          <Link to="/owner/settings">
            <FaCog className="icon" /> Settings
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignOutAlt className="icon" /> Log-out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
