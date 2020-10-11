import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { isAuthenticated } from "../helpers/auth";
import { getProductsList, deleteProduct } from "../helpers/api";
import CartItem from "../components/CartItem";
import { useHistory } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { user, token } = isAuthenticated();

  let history = useHistory();

  const loadProducts = () => {
    getProductsList().then((data) => {
      if (data.error) console.log(data.error);
      else setProducts(data);
    });
  };

  const deleteItem = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) console.log(data.error);
      else loadProducts();
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout>
      <h1>Total Products: {products.length}</h1>
      {products.map((product) => (
        <CartItem
          handleUpdate={() => history.push(`/update/product/${product._id}`)}
          handleDestroy={() => deleteItem(product._id)}
          key={product._id}
          manage
          product={product}
        />
      ))}
    </Layout>
  );
};
export default ManageProducts;
