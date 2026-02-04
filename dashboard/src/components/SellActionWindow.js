import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // const handleSellClick = async () => {
  //   await axios.post("http://localhost:3002/newOrder", {
  //     name: uid,
  //     qty: stockQuantity,
  //     price: stockPrice,
  //     mode: "Sell",
  //   });

  //   await axios.delete("http://localhost:3002/holding/remove", {
  //     data: {
  //       name: uid,
  //       qty: Number(stockQuantity),
  //       price: Number(stockPrice),
  //       percent: 0,
  //     },
  //   });
  // };

  const handleSellClick = async () => {
    try {
      await axios.post("/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      await axios.delete("/holding/remove", {
        data: {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
        },
      });

      alert("Sell successful");
      generalContext.closeSellWindow();
    } catch (err) {
      console.error("SELL ERROR FULL:", err);
      console.error("STATUS:", err.response?.status);
      console.error("DATA:", err.response?.data);

      alert(
        err.response?.data?.message ||
          err.message ||
          "Sell failed (unknown error)",
      );
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="Sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />

            <input
              type="number"
              name="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            type="button"
            className="btn btn-blue"
            onClick={handleSellClick}
          >
            Sell
          </button>

          <button
            type="button"
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
