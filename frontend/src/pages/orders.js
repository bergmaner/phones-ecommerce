import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import OrdersList from "../components/OrdersList.js";
import { isAuthenticated } from "../helpers/auth";
import { getOrderList } from "../helpers/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user, token } = isAuthenticated();

  const getOrders = () => {
    getOrderList(user._id, token).then((data) => {
      if (data.error) console.log(data.error);
      else setOrders(data);
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Layout>
      <OrdersList getOrders={getOrders} orders={orders} />
    </Layout>
  );
};
export default Orders;
