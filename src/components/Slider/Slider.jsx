import React from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        backgroundColor: "white",
        textAlign: "center",
        cursor: "pointer",
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
        backgroundColor: "white",
        textAlign: "center",
        zIndex: 4,
        cursor: "pointer",
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider className="slider" {...settings}>
      {productList.map((product) => (
        <img src={product.image} />
      ))}
    </Slider>
  );
};

export default SliderComponent;
