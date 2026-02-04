import React, { useState, useEffect } from "react";
// import { positions } from "../data/Data";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("/allPositions")
      .then((res) => {
        setAllPositions(res.data.data || []);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const currValue = stock.ltp * stock.quantity;
            const isProfit = currValue - stock.avgPrice * stock.quantity >= 0;

            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            const format = (v) => (Number.isFinite(v) ? v.toFixed(2) : "0.00");

            return (
              <tr key={index}>
                <td>{stock.productType}</td>
                <td>{stock.symbol}</td>
                <td>{stock.quantity}</td>
                <td>{format(stock.avgPrice)}</td>
                <td>{format(stock.ltp)}</td>
                <td className={profClass}>
                  {format(currValue - stock.avgPrice * stock.quantity)}
                </td>
                <td className={dayClass}>{format(stock.dayChange)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
