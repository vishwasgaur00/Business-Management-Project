import React, { useState, useEffect } from "react";
import "./UpdateStock.css";


// Dummy sample products (replace with API data in real app)
const dummyInventory = [
  { id: 1, name: "Wireless Mouse", quantity: 50 },
  { id: 2, name: "Mechanical Keyboard", quantity: 30 },
  { id: 3, name: "USB-C Charger", quantity: 20 },
  { id: 4, name: "HDMI Cable", quantity: 40 },
];

const UpdateStock = () => {
  const [inventory, setInventory] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [quantityToAdd, setQuantityToAdd] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    // Simulate fetching inventory from API
    setInventory(dummyInventory);
  }, []);

  const handleUpdate = () => {
    const quantity = parseInt(quantityToAdd);
    if (!selectedProductId || isNaN(quantity) || quantity <= 0) {
      setFeedback("⚠️ Please select a product and enter a valid quantity.");
      return;
    }

    const updatedInventory = inventory.map((item) => {
      if (item.id === parseInt(selectedProductId)) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });

    setInventory(updatedInventory);
    setFeedback("✅ Stock updated successfully!");
    setQuantityToAdd("");
  };

  const selectedProduct = inventory.find(
    (item) => item.id === parseInt(selectedProductId)
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "600" }}>
        Update Product Stock
      </h2>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="product" style={{ fontWeight: "500" }}>
          Select Product:
        </label>
        <select
          id="product"
          value={selectedProductId}
          onChange={(e) => setSelectedProductId(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">-- Choose a product --</option>
          {inventory.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      {selectedProduct && (
        <div
          style={{
            background: "#f3f3f3",
            padding: "10px 15px",
            borderRadius: "6px",
            marginBottom: "15px",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Current Stock: {selectedProduct.quantity}
        </div>
      )}

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="quantity" style={{ fontWeight: "500" }}>
          Quantity to Add:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantityToAdd}
          onChange={(e) => setQuantityToAdd(e.target.value)}
          placeholder="e.g., 20"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <button
        onClick={handleUpdate}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "12px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Update Stock
      </button>

      {feedback && (
        <div
          style={{
            marginTop: "15px",
            fontWeight: "500",
            color: feedback.startsWith("✅") ? "green" : "red",
          }}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

export default UpdateStock;
