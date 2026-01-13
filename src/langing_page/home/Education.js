import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="container pt-3 mb-0">
      {" "}
      {/* 👈 No extra bottom margin */}
      <div className="row align-items-center justify-content-between">
        {/* Left Section */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/index-education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxHeight: "360px" }}
          />
        </div>

        {/* Right Section */}
        <div className="col-lg-5 col-md-12">
          <h2 className="mb-4 fs-3 fw-semibold">
            Free and open market education
          </h2>

          <p className="mb-3 text-secondary">
            Varsity, the largest online stock market education book in the
            world, covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="edu-link d-inline-flex align-items-center">
            Varsity
            <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>

          <p className="mt-4 mb-3 text-secondary">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" className="edu-link d-inline-flex align-items-center">
            TradingQ&amp;A
            <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
