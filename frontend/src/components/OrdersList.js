import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import Modal from "../components/Modal";
import { Button } from "../styled-components/reusable";
import { TableContainer, Table } from "../styled-components/orders";
import { getStatusList, updateOrderStatus } from "../helpers/api";
import { isAuthenticated } from "../helpers/auth";
import { IoMdEye } from "react-icons/io";
import { ProductsWrapper } from "../styled-components/product";
import moment from "moment";
import { getOrderList, getPurchaseHistory } from "../helpers/api";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [statusValues, setStatusValues] = useState([]);
  const { user, token } = isAuthenticated();

  const getOrders = () => {
    user.role === 1
      ? getOrderList(user._id, token).then((data) => {
          if (data.error) console.log(data.error);
          else {
            setOrders(data);
            setLoading(false);
          }
        })
      : getPurchaseHistory(user._id, token).then((data) => {
          if (data.error) console.log(data.error);
          else {
            setOrders(data);
            setLoading(false);
          }
        });
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    user.role === 1 &&
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

  const handleActive = (index) => {
    setOpen(true);
    setActive(index);
  };

  return (
    !loading && (
      <TableContainer>
        { orders.length < 1 ? <h2>You don't have orders</h2> : <h2>Your orders</h2>}
        {orders.length > 0 && <Modal isOpen={isOpen} onRequestClose={() => setOpen(false)}>
          <ProductsWrapper>
            {orders[active].products.map((product) => (
              <CartItem product={product} />
            ))}
            <Button small onClick={() => setOpen(false)}>
              Back
            </Button>
          </ProductsWrapper>
        </Modal>}
        <Table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Dellivery time</th>
              <th>Dellivery address</th>
              {user.role === 1 && <th>Ordered By</th>}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>
                  {" "}
                  {user.role === 1 ? (
                    <select
                      onChange={(e) => handleStatusChange(e, order._id)}
                      value={order.status}
                    >
                      {statusValues.map((status, i) => (
                        <option key={i} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  ) : (
                    order.status
                  )}
                </td>

                <td>
                  {order.transaction_id}{" "}
                  <span onClick={() => handleActive(index)}>
                    <IoMdEye />
                  </span>
                </td>
                <td>{order.amount} PLN</td>
                <td>{moment(order.createdAt).fromNow()}</td>
                <td>{order.address}</td>
                {user.role === 1 && <td>{order.user.name}</td>}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    )
  );
};
export default OrdersList;
