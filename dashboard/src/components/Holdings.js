import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("/allHoldings")
      .then((res) => setAllHoldings(res.data.data || []))
      .catch((err) => console.error("Holdings fetch failed", err));
  }, []);

  const totalInvestment = useMemo(() => {
    return allHoldings.reduce(
      (acc, stock) => acc + stock.avgPrice * stock.quantity,
      0,
    );
  }, [allHoldings]);

  const currentValue = useMemo(() => {
    return allHoldings.reduce(
      (acc, stock) => acc + stock.ltp * stock.quantity,
      0,
    );
  }, [allHoldings]);

  const totalPnL = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment > 0
      ? ((totalPnL / totalInvestment) * 100).toFixed(2)
      : "0.00";

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock) => {
              const curValue = stock.ltp * stock.quantity;
              const pnl = curValue - stock.avgPrice * stock.quantity;

              const profClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.avgPrice.toFixed(2)}</td>
                  <td>{stock.ltp.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.netChange}</td>
                  <td className={dayClass}>{stock.dayChange}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
            {totalPnL.toFixed(2)} ({pnlPercent}%)
          </h5>
          <p>P&amp;L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
