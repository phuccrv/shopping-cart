import { CaretLeftOutlined } from "@ant-design/icons";
import { Col, Divider } from "antd";
import React from "react";
import CartProduct from "../CartProduct/CartProduct";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ListCart = () => {
  const cartState = useSelector((state) => state.cart);

  return (
    <Col span={12} style={{ margin: "30px 0 0 40px" }}>
      <div style={{}}>
        <NavLink to={"/"}>
          <CaretLeftOutlined style={{ fontSize: "17px" }} />{" "}
        </NavLink>
        <b>Shopping Continue</b>{" "}
      </div>
      <Divider />
      <div>
        <h3>Shopping Cart</h3>
        <p>You have 3 item your card</p>
      </div>
      {cartState.map((product) => (
        <CartProduct product={product} />
      ))}
    </Col>
  );
};

export default ListCart;
