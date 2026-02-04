import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/allOrders")
      .then((res) => {
        setAllOrders(res.data.data || []);
      })
      .catch((err) => {
        console.error("Failed to load orders:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="orders">
        <p>Loading orders...</p>
      </div>
    );
  }

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.symbol}</td>
                <td>{order.quantity}</td>
                <td>₹{order.price.toFixed(2)}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
