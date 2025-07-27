import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./TotalRevenue.css";

const data = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 150000 },
  { month: "Mar", revenue: 90000 },
  { month: "Apr", revenue: 160000 },
  { month: "May", revenue: 200000 },
];

const TotalRevenue = () => {
  return (
    <div className="revenue-container">
      <h2>Total Revenue</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#2f80ed" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalRevenue;
