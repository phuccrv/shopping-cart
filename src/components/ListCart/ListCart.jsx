import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Col, Divider } from "antd";
import React from "react";
import CartProduct from "../CartProduct/CartProduct";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ListCart.css";

const ListCart = () => {
  const cartState = useSelector((state) => state.cart);

  // tính tổng giá tiền
  const total = cartState.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <Col span={12} style={{ margin: "100px 0 0 40px" }}>
      <div className="backHome">
        <NavLink className={"icon-back"} to={"/"}>
          <BsArrowLeftCircleFill />
        </NavLink>
        <b>Shopping Continue</b>{" "}
      </div>
      <Divider />
      <div>
        <h3>Your Cart</h3>
      </div>
      {cartState.length > 0 ? (
        cartState.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))
      ) : (
        <div className="empty-cart">
          <img src="./images/notcart.png" alt="Empty Cart" />
        </div>
      )}
      {cartState.length > 0 && (
        <div>
          <h2>Total: ${total.toLocaleString()}</h2>
        </div>
      )}
    </Col>
  );
};

export default ListCart;
