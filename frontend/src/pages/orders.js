import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { isAuthenticated } from "../helpers/auth";
import { getOrderList } from "../helpers/api";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user, token } = isAuthenticated();

  useEffect(() => {
    getOrderList(user._id, token).then((data) => {
      if (data.error) console.log(data.error);
      else setOrders(data);
    });
  });

  return (
    <Layout>
      <h2>No orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Dellivery time</th>
            <th>Dellivery address</th>
            <th>Ordered By</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.status}</td>
              <td>{order.transaction_id}</td>
              <td>{order.amount}</td>
              <td>{moment(order.createdAt).fromNow()}</td>
              <td>{order.address}</td>
              <td>{order.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};
export default Orders;
