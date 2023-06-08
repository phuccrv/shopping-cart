import React from "react";
import "./Admin.css";
import {
  BsFillArchiveFill,
  BsFillBagHeartFill,
  BsPersonLinesFill,
  BsBoxArrowRight,
  BsFillGearFill,
  BsMegaphoneFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
const AdminPage = () => {
  const router = useLocation()
  return (
    <div>
      {/* header */}
      <div className="header-admin">
        <h1>Starbucks</h1>
        <div className="icon-right">
          <BsFillGearFill />
          <BsMegaphoneFill />
          <BsFillEnvelopeFill />
          <p>Admin</p>
          <NavLink className={"link-out"} to={"/auth/SignIn"}>
            LogOut
          </NavLink>
        </div>
      </div>
        {/* phần content */}
      <div className="admin-all">
        {/* <h1>Navigate</h1> */}
        <div className="layout-left">
          <ul>
            <li className={router.pathname === "/AdminProduct" ? "active":""}>
              <NavLink to={"/AdminProduct"}>
                <BsFillArchiveFill className="icon-admin product-icon" />
                Product
              </NavLink>
            </li>
            <li className={router.pathname === "/AdminUser" ? "active":""}>
              <NavLink to={"/AdminUser"}>
                <BsPersonLinesFill className="icon-admin account-icon" />
                Account
              </NavLink>
            </li>
            <li className={router.pathname === "/AdminOrder" ? "active":""}>
              <NavLink to={"/AdminOrder"}>
                <BsFillBagHeartFill className="icon-admin order-icon" />
                Order
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
