import React from "react";
import "./CardProduct.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer/CartSLice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardProduct = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  //handle add
  const handleClick = (product) => {
    const add = addToCart(product);
    dispatch(add);

    const functionThatReturnPromise = () =>
      new Promise((resolve) => setTimeout(resolve, 1000));
    toast.promise(functionThatReturnPromise, {
      pending: "Adding to cart",
      success: "Add to cart successfully 👌",
      error: "Add failure 🤯",
    });
  };

  return (
    <div className="root-card">
      <img src={product.image} width={100} height={100} />
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          flexDirection: "column",
        }}
      >
        <h4>{product.name}</h4>
        <p>{product.type}</p>
        <p>$ {(product.price).toLocaleString()}</p>
      </div>
      <div
        className="icon"
        style={{ cursor: "pointer" }}
        onClick={() => handleClick(product)}
      >
        <BsFillCartPlusFill />
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardProduct;
