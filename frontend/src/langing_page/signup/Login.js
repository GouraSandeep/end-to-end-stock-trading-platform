import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Login.css";

function Login() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:3002/login", formData, {
        withCredentials: true,
      });

      window.location.href = "http://localhost:3001";
    } catch (err) {
      setErrors({
        general: err.response?.data?.message || "Invalid credentials",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>

        {location.state?.signupSuccess && (
          <div className="success-msg">
            Account created successfully. Please login.
          </div>
        )}

        {errors.general && (
          <div className="error-general">{errors.general}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
