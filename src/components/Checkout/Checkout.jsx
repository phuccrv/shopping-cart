import React from "react";
import "./Checkout.css";
const Checkout = () => {
  return (
    <>
      <div className="form-inf">
        <label htmlFor="">Your full name</label>
        <input type="text" placeholder="name..." />
        <label htmlFor="">Your Number Phone</label>
        <input type="number" placeholder="phone..." />
        <label htmlFor="">Your Address</label>
        <input type="text" placeholder="address" />
        <label htmlFor="">Payment Methods</label>
        <div className="choose">
          <input type="radio" name="choose" id="" />
          <label htmlFor="">direct payment</label>
        </div>
        <div className="choose">
          <input type="radio" name="choose" id="" />
          <label htmlFor="">online payment</label>
        </div>
        <button>CheckOut</button>
      </div>
    </>
  );
};

export default Checkout;
