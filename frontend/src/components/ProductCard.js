import React from "react";
import { getImageUrl, getShortDescription } from "../helpers/api";
import { useHistory } from "react-router-dom";
import { addItem } from "../helpers/cart";
import { Button } from "../styled-components/reusable";
import {
  Card,
  ImageContainer,
  Content,
  Title,
  BuyContainer,
} from "../styled-components/product";

const ProductCard = ({ small, product, isDescription }) => {
  const { _id, description, name, price } = product;
  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    addItem(product, () => {history.push("/cart")});
  };
  return (
    product && (
      <Card small={small} isDescription={isDescription}>
        <ImageContainer small={small}>
          <img src={getImageUrl(product, "product")} />
        </ImageContainer>
        <Content small={small}>
          <h2 className="title">{name}</h2>
          <div>
            {isDescription
              ? description
              : small
              ? null
              : getShortDescription(description)}
          </div>
          <BuyContainer small={small}>
            <Button onClick={handleClick} small>
              Add to Cart
            </Button>
            <h2>{price} PLN</h2>
          </BuyContainer>
        </Content>
      </Card>
    )
  );
};
export default ProductCard;
