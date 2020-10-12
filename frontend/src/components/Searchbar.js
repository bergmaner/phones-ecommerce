import React, { useState, useEffect } from "react";
import { getAllCategories, searchQuery } from "../helpers/api";
import { FaSearch } from "react-icons/fa";
import {
  Container,
  SearchInput,
  SearchLabel,
  SearchButton,
  SearchForm,
  SearchDropdown,
  DropdownToggle,
  DropdownMenu,
} from "../styled-components/searchbar";
import useOuterClick from "../hooks/useOuterClick";
import ProductCard from "../components/ProductCard";
import { ProductsList } from "../styled-components/product";

const Searchbar = () => {
  const [values, setValues] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const [open, setOpen] = useState(false);
  const { categories, category, search, results, searched } = values;

  const buttonRef = useOuterClick(() => {
    setOpen(false);
  });

  const loadCategories = () => {
    getAllCategories().then((data) => {
      if (data.error) console.log(data.error);
      else setValues({ ...values, categories: data });
    });
  };

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const getMessage = (isSearch) => {
    if (isSearch && results.length > 0) {
      return `Found ${results.length} results`;
    }
    if (isSearch && results.length < 1) {
      return `Results not found`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("vvv");
    if (search) {
      console.log("vvvlsaldkalsd");
      searchQuery({
        search: search || undefined,
        category: category || undefined,
      }).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({ ...values, results: data, searched: true });
        }
      });
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);
  console.log("ff", values);
  return (
    <>
      <Container>
        <SearchForm onSubmit={handleSubmit}>
          <SearchDropdown>
            <DropdownToggle
              ref={buttonRef}
              onClick={() => setOpen(true)}
              type="button"
            >
              {category === "" ? "Any" : category}
            </DropdownToggle>
            <DropdownMenu open={open}>
              {categories.map((category) => (
                <li
                  onClick={() => handleChange("category", category.name)}
                  key={category._id}
                >
                  <a href="#">{category.name}</a>
                </li>
              ))}
            </DropdownMenu>
          </SearchDropdown>
          <SearchInput
            required
            onChange={(e) => handleChange("search", e.target.value)}
            id="search"
            placeholder="Search"
          />
          <SearchLabel htmlFor="search" />
          <SearchButton type="submit">
            <FaSearch />
          </SearchButton>
        </SearchForm>
      </Container>
      <h1>{getMessage(searched)}</h1>
      <ProductsList>
        {results?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ProductsList>
    </>
  );
};
export default Searchbar;
