import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="container pt-0 mt-0 pb-5 mb-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 col-md-12 px-4">
          <h2 className="fs-1 mb-5">Trust with confidence</h2>

          <div className="mb-2">
            <h3 className="fs-4">Customer-first always</h3>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-4">No spam or gimmicks</h3>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-4">The Zerodha universe</h3>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-1">
            <h3 className="fs-4">Do better with money</h3>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 text-center px-4">
          <img
            src="media/images/ecoSystem.png"
            alt="eco image"
            className="img-fluid mb-4"
            style={{ maxWidth: "85%", height: "auto" }}
          />

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#" className="link d-flex align-items-center gap-2">
              <span>Explore our products</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="link d-flex align-items-center gap-2">
              <span>Try Kite app</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
