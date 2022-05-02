import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterValue, setFilterValue] = useState("All");
  function handleChange(category) {
    setFilterValue(category);
  }
  const data = items.filter((item) => {
    return filterValue === "All" ? item : item.category === filterValue;
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => handleChange(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {data.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
