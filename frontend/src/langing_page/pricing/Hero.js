import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="fw-bold display-5">Charges</h1>
        <p className="text-muted fs-4 mt-2">List of all charges and taxes</p>
      </div>

      {/* Cards Section */}
      <div className="row p-5 mt-3 text-center justify-content-center">
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-4 p-5">
          <img
            src="media/images/pricing-eq.svg"
            alt="Equity Delivery"
            className="img-fluid mb-4"
            style={{ width: "75%", maxWidth: "260px" }}
          />
          <h2 className="fw-semibold mb-3 fs-4">Free equity delivery</h2>
          <p className="text-muted " style={{ fontSize: "16px" }}>
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-md-4 p-5">
          <img
            src="media/images/other-trades.svg"
            alt="F&O Trades"
            className="img-fluid mb-4"
            style={{ width: "75%", maxWidth: "260px" }}
          />
          <h2 className="fw-semibold mb-3 fs-4">Intraday and F&O trades</h2>
          <p className="text-muted " style={{ fontSize: "16px" }}>
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-md-4 p-5">
          <img
            src="media/images/pricing-eq.svg"
            alt="Mutual Funds"
            className="img-fluid mb-4"
            style={{ width: "75%", maxWidth: "260px" }}
          />
          <h2 className="fw-semibold mb-3 fs-4">Free direct MF</h2>
          <p className="text-muted " style={{ fontSize: "16px" }}>
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
