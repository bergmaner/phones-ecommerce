import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import Layout from "../layout/Layout";
import { getItems, getTotalItems, getTotalPrice } from "../helpers/cart";
import { Small, CartList, BuyContainer, Container } from "../styled-components/cart";
import { Button } from "../styled-components/reusable";
import Modal from "../components/Modal";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

const Cart = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  let history = useHistory();

  const onOpenModal = () => {
    !isAuthenticated() &&
    setModalOpen(true);
  }
  const onCloseModal = () => setModalOpen(false);

  useEffect(() => {
    console.log("hhhhh");
    setItems(getItems());
  }, [run]);

  console.log("items", items);
  return (
    <Layout>
      <CartList>
        <Modal isOpen={isModalOpen} onRequestClose={onCloseModal}>
          <p>You must sign in to continue checking out</p>
          <br />
          <Container>
            <Button small onClick={onCloseModal}>Continue shopping</Button>
            &nbsp;
            <Button small onClick={() => history.push("/signin-or-signup")}>
              Sign in to checkout
            </Button>
          </Container>
        </Modal>
        <h3>
          My Cart{" "}
          <Small>
            ({getTotalItems()} {getTotalItems() > 1 ? "items" : "item"} )
          </Small>
        </h3>

        <div>
          {items.map((item) => (
            <CartItem key={item._id} product={item} run={run} setRun={setRun} />
          ))}
        </div>
        <BuyContainer>
          <div>
            <p>Subtotal Amount:</p>
            <h2>{getTotalPrice()} PLN</h2>
          </div>
          <Button onClick={onOpenModal}>Check Out</Button>
        </BuyContainer>
      </CartList>
    </Layout>
  );
};
export default Cart;
