import {
  CaretDownOutlined,
  CaretUpOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import React from "react";
import "./CartProduct.css";
const CartProduct = (props) => {
  const { product } = props;
  return (
    <section className="cart-product">
      <img src={product.image} style={{ width: "100px", height: "100px" }} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.type}</p>
      </div>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <p>{product.quantity}</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CaretUpOutlined />
          <CaretDownOutlined />
        </div>
      </div>
      <p>$ {product.total ? product.total : product.price}</p>

      <div style={{ alignContent: "end", marginRight: "10px" }}>
        <DeleteOutlined style={{ fontSize: "24px" }} />
      </div>
    </section>
  );
};

export default CartProduct;
