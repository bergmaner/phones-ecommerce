import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import Layout from "../layout/Layout";
import { isAuthenticated } from "../helpers/auth";
import {
  getItems,
  getTotalItems,
  getTotalPrice,
  clearCart,
} from "../helpers/cart";
import {
  getBraintreeClientToken,
  processPayment,
  createOrder,
} from "../helpers/api";
import {
  Small,
  CartList,
  BuyContainer,
  Container,
  CartContainer,
  ModalContainer,
  Header,
  CheckoutWrapper,
  AddressInput,
  Label
} from "../styled-components/cart";
import { Button } from "../styled-components/reusable";
import Modal from "../components/Modal";
import DropIn from "braintree-web-drop-in-react";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const [isSignModalOpen, setSignModalOpen] = useState(false);
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  let history = useHistory();
  const [data, setData] = useState({
    loading: false,
    success: false,
    clientToken: false,
    error: "",
    instance: {},
    address: "",
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) setData({ ...data, error: data.error });
      else setData({ ...data, clientToken: data.clientToken });
    });
  };

  const handleAddress = (e) => {
    console.log(data.address);
    console.log(deliveryAddress);
    setData({ ...data, address: e.target.value });
  };

  const onSignOpenModal = () => {
    !isAuthenticated() ? setSignModalOpen(true) : setCheckoutModalOpen(true);
  };
  let deliveryAddress = data.address;

  const buy = () => {
    setData({ ...data, loading: true });
    let nonce;
    let getNonce = data.instance
      .requestPaymentMethod()
      .then((data) => {
        console.log(data, "data");
        nonce = data.nonce;
        console.log(getTotalPrice());
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotalPrice(),
        };
        
        processPayment(userId, token, paymentData)
          .then((response) => {
            console.log("es", response);
            const orderData = {
              products: items,
              transaction_id: response.transaction.id,
              amount: response.transaction.amount,
              address: deliveryAddress,
            };

            createOrder(userId, token, orderData);

            setData({ ...data, success: response.success });
            setCheckoutModalOpen(false);
            setRun(!run);
            clearCart(() => {
              setData({ ...data, loading: false });
            });
          })
          .catch((error) => {
            setData({ ...data, loading: false });
          });
      })
      .catch((error) => {
        setData({ ...data, error: error.message });
      });
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
                  <Label>Address</Label>
                  <AddressInput placeholder="f.e ul.Nadbrzegowska 21D Bytów" value={data.address} onChange={handleAddress} />
                  <DropIn
                    options={{
                      authorization: data.clientToken,
                    }}
                    onInstance={(instance) => (data.instance = instance)}
                  />
                </CheckoutWrapper>
                <BuyContainer nopadding>
                  <Button onClick={() => setCheckoutModalOpen(false)} small>
                    Cancel
                  </Button>
                  <Button onClick={buy} small>
                    Buy
                  </Button>
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
            <CartItem fullVisible key={item._id} product={item} run={run} setRun={setRun} />
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
