import { BsFillCaretUpSquareFill, BsFillCaretDownSquareFill, BsFillTrashFill,} from"react-icons/bs";
import React from "react";
import "./CartProduct.css";
import { useDispatch } from "react-redux";
import { deleteCart, handleQuantity } from "../../redux/reducer/CartSLice";

const CartProduct = (props) => {
  const dispatch = useDispatch();
  const { product } = props;

  const handleQuantityChange = (type) => {
    dispatch(handleQuantity({ id: product.id, type }));
  };
  const handleDelete = () => {
    dispatch(deleteCart(product.id));
  };

  return (
    <section className="cart-product">
      <img src={product.image} style={{ width: "100px", height: "100px" }} />
      <div className="title-name">
        <h4>{product.name}</h4>
        <p>{product.type}</p>
      </div>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <p>{product.quantity}</p>
        <div className="icon-updown">
          <BsFillCaretUpSquareFill onClick={() => handleQuantityChange("increase")} />
          <BsFillCaretDownSquareFill  onClick={() => handleQuantityChange("decrease")} />
        </div>
      </div>
      <p>$ {(product.total ? product.total : product.price).toLocaleString()}</p>
      <div className="icon-delete">
        <BsFillTrashFill onClick={handleDelete}/>
      </div>
    </section>
  );
};

export default CartProduct;
