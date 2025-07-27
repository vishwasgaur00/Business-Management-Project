// src/components/EmployeeLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import EmployeeSidebar from "./EmployeeSidebar";
import "./EmployeeLayout.css";

const EmployeeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="employee-layout">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="employee-main">
        <EmployeeSidebar isOpen={isSidebarOpen} />

        {/* 👇 Adjust margin based on sidebar */}
        <div
          className="employee-content"
          style={{
            marginLeft: isSidebarOpen ? "220px" : "70px", // match sidebar width
            transition: "margin-left 0.3s ease",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayout;
