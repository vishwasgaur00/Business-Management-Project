import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  const credentials = {
    owner: { email: "owner@bizzflow.com", password: "Own@123" },
    employee: { email: "employee1@bizzflow.com", password: "Emp@123" },
  };

  if (
    email === credentials.owner.email &&
    password === credentials.owner.password
  ) {
    navigate("/owner/dashboard");
  } else if (
    email === credentials.employee.email &&
    password === credentials.employee.password
  ) {
    navigate("/employee/dashboard");
  } else {
    alert("Invalid email or password.");
  }
};


  return (
    <div className="login-container">
      <h2 className="login-header">
        Bizz<span>Flow</span> — Your Business Command Center
      </h2>

      <div className="login-box">
        <h3 className="login-title">Login</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">Email</label>
          <input
            type="text"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label">Password</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
