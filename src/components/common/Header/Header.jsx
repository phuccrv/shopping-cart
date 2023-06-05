import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import Layout from "antd/es/layout/layout";
import { BsFillBagFill } from "react-icons/bs";

const { Header } = Layout;
const HeaderHome = () => {
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
          <BsFillBagFill />
          <div className="number-cart">
            <p>0</p>
          </div>
        </NavLink>
      </div>
      <NavLink className={"btn-login"} to={"/Auth/SignIn"}><p>login</p></NavLink>
    </Header>
  );
};

export default HeaderHome;
