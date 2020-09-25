import React, { useState, useEffect } from "react";
import { getProducts } from "../helpers/api";
import Layout from "../layout/Layout";
import ProductCard from "../components/ProductCard";
import { ProductsList } from "../styled-components/product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBy = (orderBy) => {
    getProducts(orderBy).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadProductsBy("sold");
  }, []);

  return (
    <Layout title="Phonez" description="E-commerce shop">
      <ProductsList>
      {products.map((product) => (
       <ProductCard key={product._id} product = {product}/>
      ))}
      </ProductsList>
    </Layout>
  );
};
export default Home;
