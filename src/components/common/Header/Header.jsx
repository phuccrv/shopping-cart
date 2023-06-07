import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import Layout from "antd/es/layout/layout";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/reducer/UserSlice";
const { Header } = Layout;

const HeaderHome = () => {
  const { isLoggedIn, username } = useSelector((state) => state.user);
  const cartItems  = useSelector((state) => state.cart);
  console.log(cartItems); 
  const dispatch = useDispatch();
  
  // tổng số lcartItemsượng sản phẩm trong giỏ hàng
  const totalItems = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  console.log("số sản phẩm:", totalItems);

  
  // Xử lý logout
  const handleLogout = () => {
    dispatch(logout());
  };
  
  return (
    <Header className="header">
      <Link to={"/"}>
        <img
          src={process.env.PUBLIC_URL + "/images/Starbucks-Logo.png"}
          alt=""
        />
      </Link>
      <div className="header-search">
        <div className="search-icon">
          <SearchOutlined />
        </div>
        <input placeholder="Search..." />
      </div>
      <div className="header-more">
        <NavLink className={"icon-shopping"} to={"/cart"}>
          <BsFillBagFill className="icon-cart"/>
          <div className="number-cart">
            <p>{totalItems}</p> {/* Hiển thị số lượng sản phẩm */}
          </div>
        </NavLink>
      </div>
      {isLoggedIn ? (
        <div className="user-mail">
          <p>{username}</p>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <NavLink className="btn-login" to="/Auth/SignIn">
          <p>Login</p>
        </NavLink>
      )}
    </Header>
  );
};

export default HeaderHome;
