import React from "react";

function OpenAccount() {
  return (
    <div className="container text-center mt-2 py-2 mb-5 pb-5">
      <h2 className="fs-4 mb-3">Open a Zerodha account</h2>
      <p className="fs-5 mb-4" style={{ fontSize: "16px", color: "#6c757d" }}>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button
        className="btn btn-primary fs-5"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Sign up now
      </button>
    </div>
  );
}

export default OpenAccount;
