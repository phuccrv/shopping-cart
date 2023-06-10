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
import { addToCart, handleQuantity } from "../../redux/reducer/CartSLice";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const ProductDetail = () => {
  const dispatch = useDispatch();
  
  const ProductLocation = useLocation();

  const { image, name, detail, price, id } = ProductLocation.state;

  const [quantity, setQuantity] = useState(0);

  // xử lý tăng giảm số lượng
  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
      dispatch(handleQuantity({ id, type: "increase" })); // Gọi handleQuantity từ CartSlice
    } else if (type === "decrease" && quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(handleQuantity({ id, type: "decrease" })); // Gọi handleQuantity từ CartSlice
    }
  };

  // hàm gọi thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (state) => {
    dispatch(addToCart({ id, quantity, name, detail, price, image }));
    toast.success("Add to cart successfully",{
      position:"top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress:undefined,
      theme:"colored",
      className: "toast-message",
    })
  };

  return (
    <div>
      <HeaderHome />
      <NavLink to={"/"} className="back-home">
        <BiCaretLeftCircle className="home" />
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

          <button onClick={handleAddToCart}>
            Add To Cart <BiCartAdd />
          </button>
        </div>
      <ToastContainer/>
      </div>
      <FooterHome />
    </div>
  );
};

export default ProductDetail;
