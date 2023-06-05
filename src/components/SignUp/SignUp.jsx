import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { register } from "../../redux/reducer/UserSlice";
import "./SignUp.css";

const SignUp = () => {
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
    await dispatch(register(inputValue)).unwrap();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>SignUp Here</h3>
        {/* <label htmlFor="email">Username</label>
        <input
          type="text"
          placeholder="Your username"
          id="username"
          name="username"
          onChange={handleInputChange}
        /> */}
        <img
          src={process.env.PUBLIC_URL + "/images/Starbucks-Logo.png"}
          alt=""
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Your Email"
          id="email"
          name="email"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder=" Your Password"
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        <button>Register</button>

        <NavLink className={"link-login"} to={"/auth/SignIn"}>
          if you have account, Login in here.
        </NavLink>
      </form>
    </div>
  );
};

export default SignUp;
