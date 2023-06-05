import React from "react";

import "./SignIn.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducer/UserSlice";
const SignIn = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState({});
  const dispatch = useDispatch();
  //handle cho thằng Input
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  //handle cho thằng Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(inputValue)).unwrap();
    //dispath thanh cong thi ve trang chu
    data && navigate("/");
  };

  return (
    <div className="content-Signin">
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <img
          src={process.env.PUBLIC_URL + "/images/Starbucks-Logo.png"}
          alt=""
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Your Email..."
          id="=email"
          name="email"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Your Password..."
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        <button type="submit">LogIn</button>
        <NavLink className={"link-register"}
          to={"/auth/signUp"}
        >
        Register in here ^.^
        </NavLink>
      </form>
    </div>
  );
};

export default SignIn;
