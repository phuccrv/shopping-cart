import React from "react";
import ListCart from "../../components/ListCart/ListCart";
import Layout from "antd/es/layout/layout";
import Checkout from "../../components/Checkout/Checkout";
import { Row } from "antd";
import FooterHome from "../../components/common/Footer/Footer";
import HomePage from "../home/HomePage";
import HeaderHome from "../../components/common/Header/Header";

const CartPage = () => {
  return (
    <Layout>
      <Row gutter={[8, 8]} justify={"space-between"}>
        <HeaderHome/>
        <ListCart />
        <Checkout />
        <FooterHome/>
      </Row>
    </Layout>
  );
};

export default CartPage;
