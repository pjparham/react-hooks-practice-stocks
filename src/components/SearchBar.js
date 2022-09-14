import React from "react";

function SearchBar({ priceCheck, setPriceCheck, selectedCategory, handleCategoryChange }) {
  function handleChange(){
    setPriceCheck(!priceCheck)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={!priceCheck}
          onChange={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceCheck}
          onChange={handleChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
