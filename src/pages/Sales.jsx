import React from "react";
import "./Sales.css";

const Sales = () => {
  const salesData = [
    { id: 1, date: "2025-07-05", product: "Rice Bag", quantity: 3, amount: 3600 },
    { id: 2, date: "2025-07-05", product: "Milk", quantity: 10, amount: 500 },
    { id: 3, date: "2025-07-04", product: "Notebook", quantity: 5, amount: 250 },
    { id: 4, date: "2025-07-04", product: "Detergent", quantity: 2, amount: 300 },
  ];

  return (
    <div className="sales-page">
      <h2 className="sales-title">Sales Overview</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.date}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;
