import { useNavigate } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";
import "./ListProduct.css";
import { useSelector } from "react-redux";

const ListProduct = () => {
  const productList = useSelector((state) => state.products);
  const navigate = useNavigate();

  const handleDetail = (item) => {
    navigate("/ProductDetail", { state: item });
  };
  return (
    <div className="root-list">
      {productList.map((product) => (
        <div key={product.id} >
           <CardProduct product={product} handleDetail={handleDetail}/>
        </div>
      ))}
    </div>
  );
};
export default ListProduct;
