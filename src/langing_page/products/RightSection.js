import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-4 py-4">
      <div className="row">
        <div className="col-6 mt-4 pt-4">
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted mt-3 fs-5">{productDescription}</p>

          <div className="mt-4">
            <a
              href={learnMore}
              className="text-decoration-none fw-medium"
              style={{ color: "#387ed1" }}
            >
              Learn more →
            </a>
          </div>
        </div>
        <div className="col-6">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid rounded-3 shadow-sm"
            style={{
              maxHeight: "300px",
              width: "480px",
              objectFit: "contain",
              marginLeft: "40px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
