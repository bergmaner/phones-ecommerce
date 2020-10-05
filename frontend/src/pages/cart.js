import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import Layout from "../layout/Layout";
import { getItems, getTotalItems, getTotalPrice } from "../helpers/cart";
import {
  Small,
  CartList,
  BuyContainer,
  Container,
  CartContainer,
  ModalContainer,
  Header,
  CheckoutWrapper,
} from "../styled-components/cart";
import { Button } from "../styled-components/reusable";
import Modal from "../components/Modal";
import DropIn from "braintree-web-drop-in-react";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";
import { getBraintreeClientToken } from "../helpers/api";

const Cart = () => {
  const [isSignModalOpen, setSignModalOpen] = useState(false);
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  let history = useHistory();
  const [data, setData] = useState({
    succes: false,
    clientToken: false,
    error: "",
    instance: {},
    adress: "",
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) setData({ ...data, error: data.error });
      else setData({ ...data, clientToken: data.clientToken });
    });
  };

  const onSignOpenModal = () => {
    !isAuthenticated() ? setSignModalOpen(true) : setCheckoutModalOpen(true);
  };

  useEffect(() => {
    setItems(getItems());
  }, [run]);

  useEffect(() => {
    getToken(userId, token);
  }, []);

  return (
    <Layout>
      <CartList>
        <Modal
          isOpen={isSignModalOpen}
          onRequestClose={() => setSignModalOpen(false)}
        >
          <p>You must sign in to continue checking out</p>
          <br />
          <Container>
            <Button small onClick={() => setSignModalOpen(false)}>
              Continue shopping
            </Button>
            &nbsp;
            <Button small onClick={() => history.push("/signin-or-signup")}>
              Sign in to checkout
            </Button>
          </Container>
        </Modal>
        <Modal
          isOpen={isCheckoutModalOpen}
          onRequestClose={() => setCheckoutModalOpen(false)}
        >
          <ModalContainer>
            {data.clientToken !== undefined && items.length > 0 && (
              <div>
                <CheckoutWrapper>
                  <Header>Total Cost: {getTotalPrice()}</Header>
                  <DropIn
                    options={{
                      authorization: data.clientToken,
                    }}
                  />
                </CheckoutWrapper>
                <BuyContainer nopadding>
                  <Button small>Cancel</Button>
                  <Button small>Buy</Button>
                </BuyContainer>
              </div>
            )}
          </ModalContainer>
        </Modal>
        <h3>
          My Cart{" "}
          <Small>
            ({getTotalItems()} {getTotalItems() > 1 ? "items" : "item"} )
          </Small>
        </h3>

        <CartContainer>
          {items.map((item) => (
            <CartItem key={item._id} product={item} run={run} setRun={setRun} />
          ))}
        </CartContainer>
        <BuyContainer>
          <div>
            <p>Subtotal Amount:</p>
            <h2>{getTotalPrice()} PLN</h2>
          </div>
          <Button onClick={onSignOpenModal}>Check Out</Button>
        </BuyContainer>
      </CartList>
    </Layout>
  );
};
export default Cart;
