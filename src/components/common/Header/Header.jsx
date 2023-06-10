import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import Layout from "antd/es/layout/layout";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/reducer/UserSlice";
import { searchProducts } from "../../../redux/reducer/ProductSlice";

const { Header } = Layout;

const HeaderHome = () => {
  const { isLoggedIn, username } = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState(""); // Từ khóa tìm kiếm

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSearch = () => {
    dispatch(searchProducts(searchTerm));
    setSearchTerm("");
  };


  const totalItems = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <Header className="header">
      <Link to={"/"}>
        <img src={process.env.PUBLIC_URL + "/images/Starbucks-Logo.png"} alt="" />
      </Link>
      <div className="header-search">
        <div className="search-icon" onClick={handleSearch}>
          <SearchOutlined />
        </div>
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="header-more">
        <NavLink className={"icon-shopping"} to={"/cart"}>
          <BsFillBagFill className="icon-cart" />
          <div className="number-cart">
            <p>{totalItems}</p>
          </div>
        </NavLink>
      </div>
      {isLoggedIn ? (
        <div className="user-mail">
          <p>{username}</p>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
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
