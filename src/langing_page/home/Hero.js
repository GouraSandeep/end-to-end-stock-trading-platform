import React from "react";

function Hero() {
  return (
    <div className="container py-2 text-center mt-4">
      <img
        src="media/images/landing.svg"
        alt="hero image"
        style={{ width: "68%", margin: "0 auto" }}
        className=""
      />
      <h2 className="mt-5 fs-4">Invest in everything</h2>
      <p className="fs-5 mb-4" style={{ fontSize: "16px" }}>
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>
      <button
        className="btn btn-primary fs-5"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Hero;
