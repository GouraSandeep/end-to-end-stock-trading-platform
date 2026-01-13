import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <div className="container  mt-4 pb-3 mb-3">
      <div className="row align-items-center mt-4">
        {/* Left Section (Image) */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "85%", height: "auto" }}
          />
        </div>

        {/* Right Section (Text + Lists) */}
        <div className="col-lg-6 col-md-12 px-4">
          <h2 className="mb-3 fs-2">Largest stock broker in India</h2>
          <p className="text-muted mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mb-4">
            <div className="col-6">
              <ul className="list-unstyled text-muted">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled text-muted">
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. securities</li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/press-logos.png"
            alt="Press Logos"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
