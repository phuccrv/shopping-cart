import { ForwardOutlined } from "@ant-design/icons";
import { Col } from "antd";
import React from "react";
import "./Checkout.css";
const Checkout = () => {
  return (
    <Col
      span={10}
      style={{
        backgroundColor: "#739AFF",
        height: "400px",
        margin: "30px 30px 0 0",
        borderRadius: "4%",
        color: "white",
      }}
    >
      <div className="input-list">
        <label>Name on Card</label>
        <input placeholder="309390e8298320" />
        <label>Card Number</label>
        <input placeholder="mm/dd/yyyy" /> <label>CCV</label>
        <input placeholder="CCV" />
        <label>Expiration</label>
        <input placeholder="Expiration" />{" "}
      </div>

      <div
        style={{ marginTop: "30px", marginLeft: "30px", lineHeight: "30px" }}
      >
        <p>Tổng tiền sản phẩm: </p>
        <p> Ship </p>
        <p>Tổng tất cả: </p>
      </div>
      <div
        style={{
          padding: "10px 30px",
          backgroundColor: "grey",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>$1999</p>
        <p>
          Check out <ForwardOutlined />{" "}
        </p>
      </div>
    </Col>
  );
};

export default Checkout;
