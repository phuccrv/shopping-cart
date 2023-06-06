import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/reducer/UserSlice";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [inputValue, setInputValue] = React.useState({});
  const navigate = useNavigate();
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
    try {
     const data = await dispatch(register(inputValue)).unwrap();

      toast.success("Sign Up Success",{
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress:undefined,
        theme:"colored",
        className: "toast-message",
      })
      setTimeout(() => {
        data && navigate("/auth/SignIn");
      }, 4000);
    } catch (err) {
      toast.success(err.message,{
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress:undefined,
        theme:"light",
        className: "toast-message",
      })
    }
  };

return (
  <div>
    <form onSubmit={handleSubmit}>
      <h3>SignUp Here</h3>
      <label htmlFor="email">Username</label>
      <input
        type="text"
        placeholder="Your username"
        id="username"
        name="username"
        onChange={handleInputChange}
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
      <button to={"/auth/SignIn"}>Register</button>

      <NavLink className={"link-login"} to={"/auth/SignIn"}>
        if you have account, Login in here.
      </NavLink>
    </form>
    <ToastContainer/>
  </div>
);
};
export default SignUp;
