import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const OwnerLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div style={{ display: "flex" }}>
        <Sidebar isOpen={sidebarVisible} />
        <div
          style={{
            flex: 1,
            marginLeft: sidebarVisible ? "200px" : "0",
            marginTop: "70px",
            padding: "20px",
            transition: "margin-left 0.3s ease",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OwnerLayout;
