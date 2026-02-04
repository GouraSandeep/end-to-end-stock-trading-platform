import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:3002/signup", formData);
      alert("Signup successful");
      navigate("/Login", {
        state: { signupSuccess: true },
      });
    } catch (err) {
      const message = err.response?.data?.message || "Signup failed";

      setErrors({ general: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1>Create account</h1>

        {errors.general && (
          <div className="error-general">{errors.general}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error-text">{errors.username}</p>}
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <Link to="/Login">
          <p className="login-text">
            Already registered? <span>Login</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
