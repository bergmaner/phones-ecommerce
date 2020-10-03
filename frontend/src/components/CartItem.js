import React, { useState } from "react";
import {
  Item,
  ControlsContainer,
  ControlButton,
  ImageContainer,
  ItemWrapper,
} from "../styled-components/cart";
import { IoMdTrash } from "react-icons/io";
import { getImageUrl } from "../helpers/api";
import { updateCount } from "../helpers/cart";

const CartItem = ({ product }) => {
  const { _id, name, price, quantity } = product;
  const [count, setCount] = useState(product.count);
  console.log(quantity, "quantity");

  const handleIncrement = () => {
    setCount((c) => c + 1 );
    updateCount(_id,count+1);
  };

  const handleDecrement = () => {

    setCount((c) => c - 1 );
    updateCount(_id,count-1);
  };

  return (
    product && (
      <Item>
        <ControlsContainer>
          <ControlButton disabled={count === quantity && true}  onClick={handleIncrement}>+</ControlButton>
          <ControlButton disabled={count === 1 && true} onClick={handleDecrement}>-</ControlButton>
        </ControlsContainer>
        <ItemWrapper>
          <ImageContainer>
            <img src={getImageUrl(product, "product")} />
          </ImageContainer>
          <h5>{name}</h5>
          <h5>{price} PLN</h5>
          {count}
          <ControlButton>
            <IoMdTrash />
          </ControlButton>
        </ItemWrapper>
      </Item>
    )
  );
};
export default CartItem;
