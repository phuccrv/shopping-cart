import React, { useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";

import "./ListProduct.css";
import { useSelector } from "react-redux";

const ListProduct = () => {
  const productList = useSelector((state) => state.products);
  return (
    <div className="root-list">
      {productList.map((product) => (
        <CardProduct product={product} />
      ))}
    </div>
  );
};

export default ListProduct;
