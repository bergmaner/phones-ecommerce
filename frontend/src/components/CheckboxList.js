import React, { useState } from "react";
import { CategoryList } from "../styled-components/product";
import { FilterHeader } from "../styled-components/product";

const CheckboxList = ({ categories, handleFilter }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (category) => {
    const categoryIndex = checked.indexOf(category);
    const categoryList = [...checked];

    // if doesn't exist (index === 1) push it else remove
    if (categoryIndex === -1) categoryList.push(category);
    else categoryList.splice(categoryIndex, 1);

   setChecked(categoryList);
   handleFilter(categoryList);
  };
console.log(checked)
  return (
    <ul>
      <FilterHeader>Filter by categories</FilterHeader>
      {categories.map((category) => (
        <li key={category._id}>
          <label>
            {category.name}
            <input onChange={() => handleToggle(category._id)} type="checkbox" />
            <span></span>
          </label>
        </li>
      ))}
    </ul>
  );
};
export default CheckboxList;
