import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Layouts
import OwnerLayout from "./components/OwnerLayout";

import EmployeeLayout from "./components/EmployeeLayout";

// Pages
import Login from "./pages/Login";
import OwnerDashboard from "./pages/OwnerDashboard";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Employees from "./pages/Employees";
import Settings from "./pages/Settings";
import TotalRevenue from "./pages/TotalRevenue";
import TodaysRevenue from "./pages/TodaysRevenue";
import Alerts from "./pages/Alerts";
import UpdateStock from "./pages/UpdateStock";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

// Employee Pages
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeeTasks from "./pages/EmployeeTasks";
import EmployeeShiftInfo from "./pages/EmployeeShiftInfo";
import EmployeeMessages from "./pages/EmployeeMessages";
import EmployeeSettings from "./pages/EmployeeSettings";
import EmployeeAttendance from "./pages/EmployeeAttendance";
import EmployeeLeaves from "./pages/EmployeeLeaves";
import EmployeeAnnouncements from "./pages/EmployeeAnnouncements";


const AppWrapper = () => {
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    let updatedUser;

    // If user data already exists, update only the role based on path
    if (storedUser) {
      updatedUser = JSON.parse(storedUser);
      updatedUser.role = location.pathname.includes("/owner")
        ? "owner"
        : "employee";
    } else {
      // If user data not present, create fresh
      updatedUser = {
        name: "Bharat Rajput",
        email: "bharat@example.com",
        phone: "9876543210",
        role: location.pathname.includes("/owner") ? "owner" : "employee",
        avatar: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
        joined: "2024-01-01",
        shift: "Morning",
        supervisor: "John Doe",
        businessName: "My Biz",
        started: "2022-01-01",
      };
    }

    localStorage.setItem("userData", JSON.stringify(updatedUser));
    setUserData(updatedUser);
  }, [location.pathname]);

  if (!userData) return null;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route
        path="/profile"
        element={<Profile userType={userData.role} userData={userData} />}
      />

      {/* OWNER ROUTES */}
      <Route path="/owner" element={<OwnerLayout />}>
        <Route path="dashboard" element={<OwnerDashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="sales" element={<Sales />} />
        <Route path="employees" element={<Employees />} />
        <Route path="settings" element={<Settings />} />
        <Route path="total-revenue" element={<TotalRevenue />} />
        <Route path="todays-revenue" element={<TodaysRevenue />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="update-stock" element={<UpdateStock />} />
      </Route>

      {/* EMPLOYEE ROUTES */}
      <Route path="/employee" element={<EmployeeLayout />}>
  <Route index element={<Navigate to="dashboard" />} />
  <Route path="dashboard" element={<EmployeeDashboard />} />
  <Route path="tasks" element={<EmployeeTasks />} />
  <Route path="shift-info" element={<EmployeeShiftInfo />} />
  <Route path="messages" element={<EmployeeMessages />} />
  <Route path="settings" element={<EmployeeSettings />} />
   <Route path="attendance" element={<EmployeeAttendance />} />
  <Route path="leaves" element={<EmployeeLeaves />} />
  <Route path="announcements" element={<EmployeeAnnouncements />} />
</Route>
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
