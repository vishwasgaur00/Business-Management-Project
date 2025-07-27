import { useNavigate,Link } from "react-router-dom";
import React from "react";
import "./OwnerDashboard.css";
import {
  FaBox,
  FaDollarSign,
  FaUsers,
  FaExclamationTriangle,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const topSellingData = [
  { name: "Oil", sales: 240 },
  { name: "Grease", sales: 180 },
  { name: "Spare Part", sales: 140 },
  { name: "Battery", sales: 100 },
  { name: "Paint", sales: 80 },
];

const OwnerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Owner's Dashboard</h2>

      <div className="dashboard-content">
        <div className="dashboard-left">
          <div className="card-grid">
            {/* Inventory Card */}
            <Link to="/owner/inventory" className="dashboard-card-link">
              <div className="dashboard-card">
                <FaBox className="card-icon" />
                <div>
                  <h3>Inventory</h3>
                  <p>120 items</p>
                </div>
              </div>
            </Link>

            {/* Total Revenue Card */}
            <div
              className="dashboard-card"
              onClick={() => navigate("/owner/total-revenue")}
            >
              <FaDollarSign className="card-icon" />
              <div>
                <h3>Total Revenue</h3>
                <p>₹42,000</p>
              </div>
            </div>

            {/* Today's Revenue Card */}
            <div
              className="dashboard-card"
              onClick={() => navigate("/owner/todays-revenue")}
            >
              <FaDollarSign className="card-icon" />
              <div>
                <h3>Today's Revenue</h3>
                <p>₹2,300</p>
              </div>
            </div>

            {/* Employees Card */}
            <Link to="/owner/employees" className="dashboard-card-link">
              <div className="dashboard-card">
                <FaUsers className="card-icon" />
                <div>
                  <h3>Employees</h3>
                  <p>15 Active</p>
                </div>
              </div>
            </Link>

            {/* Alerts Card */}
            <div className="dashboard-card" onClick={() => navigate("/owner/alerts")}>
              <FaExclamationTriangle className="card-icon warning" />
              <div>
                <h3>Alerts</h3>
                <p>3 Low Stock</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-right">
          <h3 className="chart-title">Top-Selling Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topSellingData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
