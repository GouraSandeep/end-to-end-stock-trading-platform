import React from "react";
import "./About.css";

function Hero() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mt-5 mb-4">
        <div className="col-lg-10">
          <h1 className="fw-normal lh-base fs-3 p-4 m-4">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      <div
        className="row border-top pt-5 text-muted"
        style={{
          lineHeight: "1.9rem",
          fontSize: "1.05rem",
        }}
      >
        <div className="col-lg-6 px-4 mb-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and “Rodha”, the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-lg-6 px-4 mb-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className="text-decoration-none text-primary">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="#" className="text-decoration-none text-primary">
              blog
            </a>
            , see what the media is saying about us, or learn more about our
            business and product{" "}
            <a href="#" className="text-decoration-none text-primary">
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
