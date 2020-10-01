import React, { useState, useEffect } from "react";
import { getProducts } from "../helpers/api";
import Layout from "../layout/Layout";
import ProductCard from "../components/ProductCard";
import Searchbar from "../components/Searchbar";
import { ProductsList } from "../styled-components/product";
import { Link } from "react-router-dom";

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
      <Searchbar />
      <h1>New Products</h1>
      <ProductsList>
        {products.map((product) => (
           <Link to={`/product/${product._id}`}>
          <ProductCard key={product._id} product={product} />
          </Link>
        ))}
      </ProductsList>
    </Layout>
  );
};
export default Home;
