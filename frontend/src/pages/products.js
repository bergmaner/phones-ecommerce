import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { getAllCategories, getFilteredProducts } from "../helpers/api";
import CheckboxList from "../components/CheckboxList";
import ProductCard from "../components/ProductCard";
import {
  ProductsContainer,
  CategoryList,
  ProductsList,
  LoadContainer,
} from "../styled-components/product";
import { Button, SpinnerContainer } from "../styled-components/reusable";
import { prices } from "../config";
import PricesRange from "../components/PricesRange";
import { Link } from "react-router-dom";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [filtersList, setFiltersList] = useState({
    filters: { categories: [], price: [] },
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(6);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {setCategories(data);
      setLoading(false)}
    });
    loadFilterResults(skip, limit, filtersList.filters);
  }, []);

  const handleFilter = (filters, filterBy) => {
    const newFilters = { ...filtersList };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      newFilters.filters[filterBy] = handlePrice(filters);
    }
    loadFilterResults(filtersList.filters);
    setFiltersList(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let range = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        range = data[key].range;
      }
    }
    return range;
  };

  const loadFilterResults = (newFilters) => {
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) setError(data.error);
      else {
        setFilteredResults(data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    getFilteredProducts(limit + skip, limit, filtersList.filters).then(
      (data) => {
        if (data.error) setError(data.error);
        else {
          setFilteredResults({
            ...filteredResults,
            data: [...filteredResults.data, ...data.data],
          });
          setSize(data.size);
          setSkip(skip + limit);
        }
      }
    );
  };
  console.log("res", filteredResults);
  console.log(filtersList);
  return (
    filteredResults && (
      <Layout>
        { loading ?
      <SpinnerContainer>
      <img src={require("../assets/spinner.gif")}/>
      </SpinnerContainer>
      : 
        <ProductsContainer>
          <CategoryList>
            <CheckboxList
              categories={categories}
              handleFilter={(filters) => handleFilter(filters, "category")}
            />
            <PricesRange
              handleFilter={(filters) => handleFilter(filters, "price")}
            />
          </CategoryList>
          <ProductsList>
            {filteredResults?.data?.map((product) => (
              <Link key={product._id} to={`/product/${product._id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </ProductsList>
        </ProductsContainer>
}
        <LoadContainer>
          {size > 0 && size >= limit && (
            <Button onClick={() => loadMore()}>Load More</Button>
          )}
        </LoadContainer>
      </Layout>
    )
  );
};
export default Products;
