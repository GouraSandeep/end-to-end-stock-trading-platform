import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#fff",
        paddingTop: "0.6rem",
        paddingBottom: "0.6rem",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo image"
            style={{ width: "120px", height: "auto" }}
          />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-medium px-3" to="/signup">
                signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium px-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium px-3" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium px-3" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium px-3" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
