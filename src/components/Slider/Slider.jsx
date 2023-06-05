import React from "react";
// import Swiper core and required modul
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductAPI from "../../api/Product";
import ListProduct from "../ListProduct/ListProduct";
import { useSelector } from "react-redux";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        right: 10,
        bottom: "50%",
        transform: "translateY(50%)",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "grey",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <p className="child">
        <RightOutlined />
      </p>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: 10,
        bottom: "50%",
        transform: "translateY(50%)",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "grey",
        textAlign: "center",
        zIndex: 4,
      }}
    >
      <p className="child" style={{ zIndex: 4 }}>
        <LeftOutlined />
      </p>
    </div>
  );
};

const SliderComponent = () => {
  const productList = useSelector((state) => state.products);
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {productList.map((product) => (
        <img
          src={product.image}
          width={"200px"}
          height={"200px"}
          style={{ objectFit: "contain" }}
        />
      ))}
    </Slider>
  );
};

export default SliderComponent;
