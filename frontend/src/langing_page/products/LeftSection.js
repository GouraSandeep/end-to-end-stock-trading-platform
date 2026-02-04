import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-3 pt-3">
      <div className="row align-items-center">
        <div className="col-md-6 text-center ">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid rounded-3 shadow-sm"
            style={{
              maxHeight: "360px",
              objectFit: "contain",
              border: "none",
            }}
          />
        </div>

        <div
          className="col-5"
          style={{
            marginLeft: "60px",
          }}
        >
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted mt-3 fs-5">{productDescription}</p>

          <div className="mt-4">
            <a
              href={learnMore}
              className="text-decoration-none fw-medium"
              style={{ color: "#387ed1" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more →
            </a>
          </div>

          <div className="mt-5 d-flex" style={{ gap: "30px" }}>
            <a href={googlePlay}>
              <img
                src="media/images/google-play-badge.svg"
                alt="Get it on Google Play"
                style={{ height: "40px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstore-badge.svg"
                alt="Download on the App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
