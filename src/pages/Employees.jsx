import React from "react";
import "./Employees.css";

const Employees = () => {
  const employeeList = [
    { id: 1, name: "Amit Verma", role: "Cashier", email: "amit@bizzflow.com", status: "Active" },
    { id: 2, name: "Neha Sharma", role: "Inventory Manager", email: "neha@bizzflow.com", status: "On Leave" },
    { id: 3, name: "Ravi Singh", role: "Sales Staff", email: "ravi@bizzflow.com", status: "Active" },
  ];

  return (

    <div className="employees-page">
      <h2 className="employees-title">Employees</h2>
      <table className="employees-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.email}</td>
              <td>{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
