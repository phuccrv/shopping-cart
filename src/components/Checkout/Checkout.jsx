import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [order, setOrder] = useState({});
  const cart = JSON.parse(localStorage.getItem("carts"));
  const navigate = useNavigate();
  const handleOnchange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setOrder({ ...order, cart });
  }, []);

  const handleBuy = () => {
    if (!cart || cart.length === 0) {
      toast.error("Your shopping cart is empty.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!order.fullname || !order.phone || !order.address) {
      toast.error("Please enter all the required information.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const newOrder = { ...order, id: Date.now() };
      const updatedOrders = [...existingOrders, newOrder];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
  
      localStorage.setItem("order", JSON.stringify(order));
      toast.info("Buy Success", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/");
        localStorage.removeItem("carts");
      }, 3000);
    }
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
          <input
            type="radio"
            name="choose"
            id=""
            onChange={handleOnchange}
          />
          <label htmlFor="">direct payment</label>
        </div>
        <div className="choose">
          <input
            type="radio"
            name="choose"
            id=""
            onChange={handleOnchange}
          />
          <label htmlFor="">online payment</label>
        </div>
        <button onClick={handleBuy}>Buy now</button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Checkout;
