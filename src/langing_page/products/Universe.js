import React from "react";

function Universe() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row text-center pt-5">
        <h1 className="fs-1">The Zerodha Universe</h1>
        <p className="mt-4 fs-5" style={{ color: "#3e3d3dff" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-sm-6 col-md-4 pt-5 mt-5">
          <img
            src="media/images/zerodhafundhouse.png"
            style={{ height: "55px", width: "180px" }}
            alt="Zerodha Fund House"
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px" }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 pt-5 mt-5">
          <img
            src="media/images/sensibull-logo.svg"
            style={{ height: "55px", width: "180px" }}
            alt="Sensibull"
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px" }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 pt-5 mt-5">
          <img
            src="media/images/tijori.svg"
            style={{ height: "55px", width: "180px" }}
            alt="Tijori"
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px" }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 pt-5 mt-5">
          <img
            src="media/images/streak-logo.png"
            style={{ height: "55px", width: "180px" }}
            alt="Streak"
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px" }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 pt-5 mt-5">
          <img
            src="media/images/smallcase.png"
            style={{ height: "55px", width: "180px" }}
            alt="Smallcase"
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px" }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 pt-5 mt-5 pb-5">
          <img
            src="media/images/ditto-logo.png"
            style={{ height: "55px", width: "180px" }}
            alt="Ditto"
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px" }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="w-100 d-flex justify-content-center">
          <button
            className="btn btn-primary fs-5 mt-5 mb-4"
            style={{ width: "20%" }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
