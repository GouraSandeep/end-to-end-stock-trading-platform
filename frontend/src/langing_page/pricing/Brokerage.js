import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="">
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "1.7" }}
            className="text-muted mt-4"
          >
            <li className="mt-2">
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </li>
            <li className="mt-2">
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </li>
            <li className="mt-2">
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </li>
            <li className="mt-2">
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </li>
            <li className="mt-2">
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </li>
            <li className="mt-2">
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
