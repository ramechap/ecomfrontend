import React, { useState } from "react";
import "../admin-modules/styles/login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../utils/toast_utils";
const LoginUser = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate= useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post("http://localhost:5000/auth/login", {
        email: formData.email,
        password: formData.password
      }, {
        withCredentials: true, 
      });
      console.log(response)
       showSuccessToast({
                    message: `Login successful`,
                  });
                  
    
      navigate(`/`); 
    } catch (error) {
      showErrorToast({ message: 'Login failed' });
      
    }
    

  };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2> Login</h2>
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
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginUser;
