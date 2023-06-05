import React from "react";
import ListCart from "../../components/ListCart/ListCart";
import Layout from "antd/es/layout/layout";
import Checkout from "../../components/Checkout/Checkout";
import { Row } from "antd";

const CartPage = () => {
  return (
    <Layout>
      <Row gutter={[8, 8]} justify={"space-between"}>
        <ListCart />
        <Checkout />
      </Row>
    </Layout>
  );
};

export default CartPage;
