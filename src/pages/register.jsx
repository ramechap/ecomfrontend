import React, { useState } from "react";
import "../admin-modules/styles/register.css";

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { showErrorToast, showSuccessToast } from "../utils/toast_utils";
const RegisterUser = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      const res = await fetch("https://ecommerce-food-api.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          username: formData.username, email: formData.email, password: formData.password,
          confirmpassword: formData.confirmPassword
        })
      })
      const ress = await res.json()
      
      navigate("/login")
      showSuccessToast({
        message: `Account Registered`,
      });
      
      alert("Account Registered")
    }
    else {
      showErrorToast({ message: 'Passwords do not match!' });
     
      return;
    }

  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;
