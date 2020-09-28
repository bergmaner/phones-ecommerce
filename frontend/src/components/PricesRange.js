import React, { useState, useEffect } from "react";
import { FilterHeader } from "../styled-components/product";
import { prices } from "../config";

const PricesRange = ({ handleFilter }) => {
  const [value, setValue] = useState(0);
  const handleToggle = (e) => {
    handleFilter(e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <FilterHeader>Prices</FilterHeader>
      {prices.map((price, id) => (
        <li key={price._id}>
          <label>
            {price.name}
            <input
              name="price"
              value={price._id}
              onChange={handleToggle}
              type="radio"
            />
            <span></span>
          </label>
        </li>
      ))}
    </>
  );
};
export default PricesRange;
