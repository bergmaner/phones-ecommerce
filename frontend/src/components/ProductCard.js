import React from "react";
import { getImageUrl, getShortDescription } from "../helpers/api";
import { Button } from "../styled-components/reusable";
import { Card, ImageContainer, Content, BuyContainer } from "../styled-components/product";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={getImageUrl(product, "product")} />
      </ImageContainer>
      <Content>
        <h2>{product.name}</h2>
        <div>{getShortDescription(product.description)}</div>
        <BuyContainer>
          <Button small>Add to Cart</Button>
          <h2>{product.price} PLN</h2>
        </BuyContainer>
      </Content>
    </Card>
  );
};
export default ProductCard;
