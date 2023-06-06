import React from "react";
import "./SignIn.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducer/UserSlice";


const SignIn = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState({});
  const [loginError, setLoginError] = React.useState(null);
  const dispatch = useDispatch();

  // Handle cho thẻ Input
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  // Handle cho thẻ Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(login(inputValue)).unwrap();
      // Đăng nhập thành công, chuyển hướng đến trang chủ
      data && navigate("/")
    } catch (error) {
      // Xử lý lỗi đăng nhập
      console.log(error);
      setLoginError("email or password is incorrect");
    }
  };

  return (
    <div className="content-Signin">
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <img src={process.env.PUBLIC_URL + "/images/Starbucks-Logo.png"} alt="" />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Your Email..."
          id="email"
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
        {loginError && <p>{loginError}</p>}
        <NavLink className={"link-register"} to={"/auth/signUp"}>
          Register in here ^.^
        </NavLink>
      </form>
    </div>
  );
};

export default SignIn;
