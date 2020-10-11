import React, { useState } from "react";
import {
  Item,
  ControlsContainer,
  ControlButton,
  ImageContainer,
  ItemWrapper,
  NameWrapper,
  Count,
} from "../styled-components/cart";
import { IoMdTrash } from "react-icons/io";
import { getImageUrl } from "../helpers/api";
import { updateCount, deleteItem } from "../helpers/cart";

const CartItem = ({ product, setRun, run, fullVisible }) => {
  const { _id, name, price, quantity } = product;
  const [count, setCount] = useState(product.count);

  console.log(quantity, "quantity");

  const handleIncrement = () => {
    setRun(!run);
    setCount((c) => c + 1);
    updateCount(_id, count + 1);
  };

  const handleDecrement = () => {
    setRun(!run);
    setCount((c) => c - 1);
    updateCount(_id, count - 1);
  };

  const handleDelete = () => {
    setRun(!run);
    deleteItem(_id);
  };

  return (
    product && (
      <Item>
        {fullVisible && (
          <ControlsContainer>
            <ControlButton
              disabled={count === quantity && true}
              onClick={handleIncrement}
            >
              +
            </ControlButton>
            <ControlButton
              disabled={count === 1 && true}
              onClick={handleDecrement}
            >
              -
            </ControlButton>
          </ControlsContainer>
        )}
        <ItemWrapper>
          <ImageContainer>
            <img src={getImageUrl(product, "product")} />
          </ImageContainer>
          <NameWrapper>{name}</NameWrapper>
          <h5>{price} PLN</h5>
          <Count>{count}</Count>
          {fullVisible && (
            <ControlButton onClick={handleDelete}>
              <IoMdTrash />
            </ControlButton>
          )}
        </ItemWrapper>
      </Item>
    )
  );
};
export default CartItem;
