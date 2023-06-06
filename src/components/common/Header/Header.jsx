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
  console.log(1111,username);
  const dispatch = useDispatch();

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
          <BsFillBagFill />
          <div className="number-cart">
            <p>0</p>
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
