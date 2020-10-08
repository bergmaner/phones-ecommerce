import React, { useState, useEffect } from "react";
import moment from "moment";
import { TableContainer, Table } from "../styled-components/orders";
import { getStatusList, updateOrderStatus } from "../helpers/api";
import { isAuthenticated } from "../helpers/auth";

const OrdersList = ({ orders, getOrders }) => {
  const [statusValues, setStatusValues] = useState([]);
  const { user, token } = isAuthenticated();

  useEffect(() => {
    getStatusList(user._id, token).then((data) => {
      if (data.error) console.log(data.error);
      else setStatusValues(data);
    });
  }, []);

  const handleStatusChange = (e, orderId) => {
    updateOrderStatus(user._id, token, orderId, e.target.value).then((data) => {
      if (data.error) console.log(data.error);
      else getOrders();
    });
  };

  return (
    orders.length > 0 &&
    <TableContainer>
      <Table>
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
              <td>
                {" "}
                <select
                  onChange={(e) => handleStatusChange(e, order._id)}
                  value={order.status}
                >
                  {statusValues.map((status, i) => (
                    <option key={i} value={status}>
                      {status}
                    </option>
                  ))}
                  {/* <option value="Not processed">Not processed</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option> */}
                </select>
              </td>
              <td>{order.transaction_id}</td>
              <td>{order.amount} PLN</td>
              <td>{moment(order.createdAt).fromNow()}</td>
              <td>{order.address}</td>
              <td>{order.user.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};
export default OrdersList;
