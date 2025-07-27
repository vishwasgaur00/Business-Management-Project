import React from "react";
import "./Navbar.css";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h2 className="app-logo">
          <span className="bizz">Bizz</span>
          <span className="flow">Flow</span>
        </h2>
      </div>

      <div className="navbar-center">
        <p className="navbar-subtitle">
          Empowering your business management 🚀
        </p>
      </div>

      <div className="navbar-right">
      <button
        className="icon-btn"
        title="Notifications"
        onClick={() => navigate("/notifications")}
      >
        <FaBell className="nav-icon" />
      </button>

      <div
        className="profile-section"
        title="Profile"
        onClick={() => navigate("/profile")}
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="profile"
          className="profile-icon"
        />
      </div>
    </div>
    </div>
  );
};

export default Navbar;
