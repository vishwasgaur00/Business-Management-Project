import React from "react";
import "../pages/Inventory.css";
import { FaTrashAlt, FaPlus } from "react-icons/fa";

const Inventory = () => {
  const products = [
    { id: 1, name: "Wireless Mouse", quantity: 100, price: 599 },
    { id: 2, name: "Mechanical Keyboard", quantity: 60, price: 2199 },
    { id: 3, name: "USB-C Hub", quantity: 10, price: 1499 },
    { id: 4, name: "Webcam HD", quantity: 5, price: 1299 },
    { id: 5, name: "Laptop Stand", quantity: 80, price: 899 },
  ];

  const handleDelete = (id) => {
    alert(`Deleted item with id: ${id}`);
  };

  const handleAddProduct = () => {
    alert("Redirecting to Add Product page...");
  };

  const getStockClass = (quantity) => {
    if (quantity < 10) return "low-stock";
    if (quantity < 50) return "medium-stock";
    return "high-stock";
  };

  return (
    <div className="inventory-page">
      <div className="inventory-header">
        <h2 className="inventory-heading">📦 Product Inventory</h2>
        <button className="add-btn" onClick={handleAddProduct}>
          <FaPlus /> Add Product
        </button>
      </div>
      <div className="inventory-table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <span className={`stock-tag ${getStockClass(product.quantity)}`}>
                    {product.quantity}
                  </span>
                </td>
                <td>₹{product.price.toLocaleString()}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    <FaTrashAlt className="delete-icon" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
