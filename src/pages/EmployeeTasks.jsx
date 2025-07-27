// ======== EmployeeTasks.jsx =========
import React from "react";
import "./EmployeeTasks.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Completed", value: 4 },
  { name: "Pending", value: 2 },
];

const COLORS = ["#00C49F", "#FF8042"];

const EmployeeTasks = () => {
  return (
    <div className="tasks-page">
      <h2>My Tasks</h2>
      <div className="tasks-content">
        <div className="tasks-chart">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="tasks-list">
          <ul>
            <li>✔ Submit daily report</li>
            <li>✔ Attend stand-up meeting</li>
            <li>✖ Complete module update</li>
            <li>✖ Schedule review call</li>
            <li>✔ Log working hours</li>
            <li>✔ Check email updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTasks;