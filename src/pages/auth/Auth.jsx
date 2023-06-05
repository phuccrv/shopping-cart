import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Outlet />
    </div>
  );
};

export default Auth;
