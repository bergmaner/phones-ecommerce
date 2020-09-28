import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { getAllCategories, getFilteredProducts } from "../helpers/api";
import CheckboxList from "../components/CheckboxList";
import { ProductsContainer, CategoryList } from "../styled-components/product";
import { prices } from "../config";
import PricesRange from "../components/PricesRange";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [filtersList, setFiltersList] = useState({
    filters: { categories: [], price: [] },
  });
  const [error, setError] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(6);
  const [filteredResults, setFilteredResults] = useState(0);

  useEffect(() => {
    getAllCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else setCategories(data);
    });
    loadFilterResults(skip,limit,filtersList.filters);
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
    console.log("ff",newFilters)
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) setError(data.error);
      else setFilteredResults(data);
    });
  };

  console.log(filtersList);
  return (
    <Layout>
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
        {JSON.stringify(filteredResults)}
      </ProductsContainer>
    </Layout>
  );
};
export default Products;
