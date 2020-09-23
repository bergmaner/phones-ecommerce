import React, {useState, useEffect} from "react";
import {getProducts} from "../helpers/api";
import Layout from "../layout/Layout";

const Home = () => {

const [products, setProducts] = useState([]);
const [error, setError] = useState(false);

  const loadProductsBy = (orderBy) => {
    getProducts(orderBy).then((data)=>{
      if(data.error){
        setError(true);
      }
      else {
        setProducts(data);
      }
    })
  }

useEffect(()=>{
  loadProductsBy('sold');
},[])

  return (
    <Layout title="Phonez" description="E-commerce shop">
      {JSON.stringify(products)}
      Home
    </Layout>
  );
};
export default Home;
