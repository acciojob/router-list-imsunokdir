import React from "react";

import { Link } from "react-router-dom";

const items = ["Item 1", "Item 2", "Item 3"];

const ItemList = () => {
  return (
    <div>
      <h1>Item Lists</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Link to={`/items/${i + 1}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
