import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import ProductCard from "../components/ProductCard";
import { getProduct, getRelatedList } from "../helpers/api";
import {
  Container,
  RelatedList,
  RelatedProductsContainer,
} from "../styled-components/product";
import { useParams } from "react-router-dom";
import { SpinnerContainer } from "../styled-components/reusable";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const [relatedProducts, setRelatedProducts] = useState("");
  useEffect(() => {
    getProduct(productId).then((data) => {
      if (data.error) console.log(data.error);
      else setProduct(data);
    });
    getRelatedList(productId).then((data) => {
      if (data.error) console.log(data.error);
      else setRelatedProducts(data);
    });
  }, []);

  return (
      <Layout>
        {product ? 
        <Container>
          <ProductCard product={product} isDescription />
          {relatedProducts.length > 0 && (
            <RelatedProductsContainer>
              <RelatedList>
                <h2>Related List</h2>
                {relatedProducts &&
                  relatedProducts?.map((prod) => (
                    <ProductCard small key={prod._id} product={prod} />
                  ))}
              </RelatedList>
            </RelatedProductsContainer>
          )}
        </Container>
        :
      <SpinnerContainer>
        <img src={require("../assets/spinner.gif")}/>
      </SpinnerContainer>
}
      </Layout>
  );
};
export default Product;
