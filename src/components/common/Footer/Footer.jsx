import React from "react";
import "./Footer.css"
import { AiFillApple, AiFillAppstore ,AiFillAndroid} from "react-icons/ai";
const FooterHome = () => {
  return (
    <div>
      <div className="footer">
        <div className="imh-logo">
          <img src={process.env.PUBLIC_URL + '/images/Starbucks-Logo.png'} alt="" />
        </div>
        <div className="footer-content-text">
          <h2>About Us</h2>
          <p>Our Heritage</p>
          <p>Our Company</p>
          <p>CoffeeHouse</p>
        </div>
        <div className="footer-content-text">
          <h2>Responsibility</h2>
          <p>Community</p>
          <p>Ethical Sourcing</p>
          <p>Environment</p>
          <p>Diversity</p>
        </div>
        <div className="footer-content-text">
          <h2>Quick Link</h2>
          <p>Careers</p>
          <p>Seasion Gifting</p>
          <p>FAQs</p>
          <p>Customer Service</p>
          <p>Dlivery</p>
        </div>
        <div className="footer-content-text">
          <h2>SOCIAL MEDIA</h2>
          <div className="icon-media">
            <AiFillApple/>
            <AiFillAppstore/>
            <AiFillAndroid/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
