import React from "react";

function Hero() {
  return (
    <section
      id="supportHero"
      className="container-fluid"
      style={{
        backgroundColor: "#387ed1",
        color: "white",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        id="supportWrapper"
        className="d-flex justify-content-between align-items-center container mb-5"
      >
        <h3 className="fw-semibold fs-3 mb-0">Support Portal</h3>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "underline",
            fontWeight: 500,
            fontSize: "1.1rem",
          }}
        >
          Track Tickets
        </a>
      </div>

      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-6 col-md-12 mb-5 pe-lg-5">
            <h1 className="fw-semibold mb-4" style={{ fontSize: "1.8rem" }}>
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg. How do I activate F&O?"
              className="form-control mb-4"
              style={{
                padding: "12px 16px",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            />

            <div
              className="d-flex flex-wrap gap-3"
              style={{ fontSize: "1.05rem" }}
            >
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Kite user manual
              </a>
            </div>
          </div>

          <div
            className="col-lg-5 col-md-12 ms-lg-5"
            style={{
              paddingLeft: "40px",
            }}
          >
            <h1 className="fw-semibold mb-3" style={{ fontSize: "1.8rem" }}>
              Featured
            </h1>
            <ol style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Current takeovers and delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Latest intraday leverages - MIS & O
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
