import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // reuse same CSS

const TradeActionWindow = ({ uid, mode }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleTradeClick = async () => {
    try {
      await axios.post("/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode,
      });

      if (mode === "BUY") {
        await axios.post("/addHolding", {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          percent: 0,
        });
      }

      if (mode === "SELL") {
        await axios.post("/sell", {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
        });
      }

      generalContext.closeTradeWindow();
    } catch (err) {
      alert(err.response?.data?.message || "Trade failed");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeTradeWindow();
  };

  return (
    <div className="container" id="trade-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          {mode === "BUY"
            ? "Margin required ₹140.65"
            : "Estimated proceeds ₹140.65"}
        </span>

        <div>
          <Link
            className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={handleTradeClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </Link>

          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TradeActionWindow;
