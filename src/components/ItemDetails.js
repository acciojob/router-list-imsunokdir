import React from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Item {id}</h1>
      Description for Item {id}
    </div>
  );
};

export default ItemDetails;
