import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [order, setOrder] = useState({});
  // const [valueInout, setInputValue] = useState({});
  const cart = JSON.parse(localStorage.getItem("carts"));
  const navigate = useNavigate();
  console.log(555, cart);

  const handleOnchange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };
  console.log(order);

  useEffect(() => {
    setOrder([{ ...order, cart }]);
  }, []);

  const handleBuy = () => {
    localStorage.setItem("order", JSON.stringify(order));
    toast.info("Buy Success",{
      position:"top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress:undefined,
      theme:"colored",
    })
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <div className="form-inf">
        <label htmlFor="">Your full name</label>
        <input
          type="text"
          placeholder="name..."
          name="fullname"
          onChange={handleOnchange}
        />
        <label htmlFor="">Your Number Phone</label>
        <input
          type="number"
          placeholder="phone..."
          name="phone"
          onChange={handleOnchange}
        />
        <label htmlFor="">Your Address</label>
        <input
          type="text"
          placeholder="address"
          name="address"
          onChange={handleOnchange}
        />
        <label htmlFor="">Payment Methods</label>
        <div className="choose">
          <input type="radio" name="choose" id="" onChange={handleOnchange} />
          <label htmlFor="">direct payment</label>
        </div>
        <div className="choose">
          <input type="radio" name="choose" id="" onChange={handleOnchange} />
          <label htmlFor="">online payment</label>
        </div>
        <button onClick={handleBuy}>CheckOut</button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Checkout;
