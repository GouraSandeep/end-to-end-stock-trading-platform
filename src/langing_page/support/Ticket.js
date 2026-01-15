import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mt-4 mb-5 pb-3">
        <h1 className="fw-semibold fs-3 text-dark">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      <div className="row gy-5 gx-5">
        <div className="col-md-4">
          <h5 className="fw-semibold mb-4 text-dark">
            <i className="fa-solid fa-user-plus me-2 "></i>
            Account Opening
          </h5>
          <ul className="list-unstyled">
            {[
              "Online Account Opening",
              "Offline Account Opening",
              "Company Partnership and HUF Account",
              "NRI Account Opening",
              "Charges at Zerodha",
              "Zerodha IDFC First Bank 3-in-1 Account",
              "Getting Started",
            ].map((item, i) => (
              <li key={i} className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-primary link-hover"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h5 className="fw-semibold mb-4 text-dark">
            <i className="fa-solid fa-user me-2 "></i>
            Your Zerodha Account
          </h5>
          <ul className="list-unstyled">
            {[
              "Login Credentials",
              "Account Modification and Segment Addition",
              "DP ID and Bank Details",
              "Your Profile",
              "Transfer and Conversion of Shares",
            ].map((item, i) => (
              <li key={i} className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-primary link-hover"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h5 className="fw-semibold mb-4 text-dark">
            <i className="fa-solid fa-chart-simple me-2 "></i>
            Trading & Platforms
          </h5>
          <ul className="list-unstyled">
            {[
              "Margin/Leverage, Product and Order Types",
              "Kite Web and Mobile",
              "Trading FAQs",
              "Corporate Actions",
              "Sentinel",
              "Kite API",
              "Pi and Other Platforms",
              "StockReports+",
              "GTT",
            ].map((item, i) => (
              <li key={i} className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-primary link-hover"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h5 className="fw-semibold mb-4 text-dark">
            <i className="fa-solid fa-credit-card me-2 "></i>
            Funds
          </h5>
          <ul className="list-unstyled">
            {[
              "Adding Funds",
              "Fund Withdrawal",
              "eMandates",
              "Adding Bank Accounts",
              "NRI Account Funding",
              "Charges at Zerodha",
              "Zerodha IDFC First Bank 3-in-1 Account",
            ].map((item, i) => (
              <li key={i} className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-primary link-hover"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h5 className="fw-semibold mb-4 text-dark">
            <i className="fa-solid fa-grip me-2 "></i>
            Console
          </h5>
          <ul className="list-unstyled">
            {[
              "Reports",
              "Ledger",
              "Portfolio",
              "60 Day Challenge",
              "IPO",
              "Referral Program",
            ].map((item, i) => (
              <li key={i} className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-primary link-hover"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h5 className="fw-semibold mb-4 text-dark">
            <i className="fa-solid fa-coins me-2 "></i>
            Coin
          </h5>
          <ul className="list-unstyled">
            {[
              "Understanding Mutual Funds",
              "About Coin",
              "Buying and Selling through Coin",
              "Starting with SIP",
              "Manage Your Portfolio",
              "Charges at Zerodha",
              "Coin App",
              "Government Securities",
            ].map((item, i) => (
              <li key={i} className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-primary link-hover"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>
        {`
          .link-hover:hover {
            color: #0056b3 !important;
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}

export default CreateTicket;
