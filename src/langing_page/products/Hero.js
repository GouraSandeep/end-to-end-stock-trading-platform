import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div
      className="container text-center border-bottom mb-3"
      style={{ marginTop: "5rem", marginBottom: "5rem" }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-10 ">
          <h1 className="fw-normal mb-3" style={{ fontSize: "2.3rem" }}>
            Zerodha Products
          </h1>

          <h4
            className="text-muted fw-normal mb-3"
            style={{ fontSize: "1.5rem" }}
          >
            Sleek, modern, and intuitive trading platforms
          </h4>

          <p className="mt-3 fs-5 text-muted mb-5 pb-5">
            Check out our{" "}
            <a
              href=" "
              className="text-decoration-none"
              style={{ color: "#387ed1" }}
            >
              investment offerings →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
