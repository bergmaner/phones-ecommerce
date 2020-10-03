import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import Layout from "../layout/Layout";
import { getItems } from "../helpers/cart";
import { Small, CartList } from "../styled-components/cart";

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
  }, []);

  console.log("items", items);
  return (
    <Layout>
      <CartList>
        <h3>
          My Cart{" "}
          <Small>
            ({items.length} {items.length > 1 ? "items" : "item"} )
          </Small>
        </h3>

        <div>
          {items.map((item) => (
            <CartItem key={item._id} product={item} />
          ))}
        </div>
      </CartList>
    </Layout>
  );
};
export default Cart;
