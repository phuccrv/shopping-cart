import React, { useState } from "react";
import "./ProductDetail.css";
import HeaderHome from "../../components/common/Header/Header";
import FooterHome from "../../components/common/Footer/Footer";
import { NavLink, useLocation } from "react-router-dom";
import {
  BiCartAdd,
  BiCaretLeft,
  BiCaretRight,
  BiCaretLeftCircle,
} from "react-icons/bi";

import { useDispatch } from "react-redux";
import { handleQuantity } from "../../redux/reducer/CartSLice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const ProductLocation = useLocation();

  const { image, name, detail, price, id } = ProductLocation.state;

  const [quantity, setQuantity] = useState(0);

  // xử lý tăng giảm số lượng
  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //hàm gọi tăng giảm
  const addToCart = () => {
    dispatch(handleQuantity({ id, quantity }));
  };

  return (
    <div>
      <HeaderHome />
      <NavLink to={"/"} className="back-home">
        <BiCaretLeftCircle className="home"/>
        <h3>Back to home page</h3>
      </NavLink>
      <div className="detail-all">
        <img src={image} alt="" />
        <div className="content-detail">
          <h2>{name}</h2>
          <p>{detail}</p>
          <h4>$ {price.toLocaleString()}</h4>

          <div className="icon-up-down">
            <BiCaretLeft onClick={() => handleQuantityChange("decrease")} />
            <p>{quantity}</p>
            <BiCaretRight onClick={() => handleQuantityChange("increase")} />
          </div>

          <button onClick={addToCart}>
            Add To Cart <BiCartAdd />
          </button>
        </div>
      </div>
      <FooterHome />
    </div>
  );
};

export default ProductDetail;
