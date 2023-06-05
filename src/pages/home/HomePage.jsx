import React from "react";
import ListProduct from "../../components/ListProduct/ListProduct";
import { Layout } from "antd";
import SliderComponent from "../../components/Slider/Slider";
import HeaderHome from "../../components/common/Header/Header";
import { useDispatch } from "react-redux";
import { handleCallProductAPI } from "../../redux/reducer/ProductSlice";
import ContentHome from "../../components/common/Content/Content";
import FooterHome from "../../components/common/Footer/Footer";

const HomePage = () => {
  //getAllProduct nó sẽ dispatch 1 action bất đồng bộ
  const dispatch = useDispatch();
  const getAllProduct = async () => {
    const products = handleCallProductAPI();
    await dispatch(products).unwrap();
  };
  getAllProduct();
  return (
    <div>
      <Layout>
        <HeaderHome />
        <SliderComponent />
        <ContentHome/>
        <ListProduct />
        <FooterHome/>
      </Layout>
    </div>
  );
};

export default HomePage;
