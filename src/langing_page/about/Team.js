import React from "react";
import "./About.css";

function Team() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center border-top mt-5 pt-5 mb-4">
        <div className="col-lg-8">
          <h1 className="fw-normal mb-3">People</h1>
          <p className="text-muted fs-6">
            Meet the team behind Zerodha’s mission to make investing simple and
            accessible.
          </p>
        </div>
      </div>

      <div
        className="row align-items-center text-muted"
        style={{
          lineHeight: "1.9rem",
          fontSize: "1.05rem",
        }}
      >
        <div className="col-lg-6 text-center mb-5 mb-lg-0">
          <img
            src="media/images/founder.jpg"
            alt="Nithin Kamath"
            className="rounded-circle shadow-sm"
            style={{ width: "65%", maxWidth: "260px" }}
          />
          <h4 className="mt-4 mb-1">Nithin Kamath</h4>
          <h6 className="text-secondary">Founder & CEO</h6>
        </div>

        <div className="col-lg-6 px-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has transformed the landscape of the Indian broking
            industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none text-primary">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none text-primary">
              TradingQ&A
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/Nithin0dha"
              className="text-decoration-none text-primary"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
