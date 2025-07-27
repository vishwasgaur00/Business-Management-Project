import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./TodaysRevenue.css";

const data = [
  { product: "Pens", sales: 2400 },
  { product: "Books", sales: 1398 },
  { product: "Chairs", sales: 9800 },
  { product: "Tables", sales: 3908 },
];

const TodaysRevenue = () => {
  return (
    <div className="today-revenue">
      <h2>Today's Revenue</h2>
      <div className="summary-cards">
        <div className="card">Revenue: ₹12,000</div>
        <div className="card">Orders: 120</div>
      </div>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#2f80ed" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TodaysRevenue;
