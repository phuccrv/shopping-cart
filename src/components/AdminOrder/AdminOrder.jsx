import React, { useState } from "react";
import AdminPage from "../../pages/admin/Admin";
import "./AdminOrder.css";

const AdminOrder = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [hitoryCart, setHitoryCart] = useState([]);
  const cartLocal = JSON.parse(localStorage.getItem("orders")) || [];
  console.log(22222, cartLocal);
  console.log(333333, hitoryCart);

  const handleViewDetails = (item) => {
    setShowDetails(true);
    setHitoryCart(item);
    console.log(6666, item);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  const calculateTotalPrice = () => {
    if (!hitoryCart || hitoryCart.length === 0) {
      return 0;
    }
    const totalPrice = hitoryCart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    return totalPrice;
  };

  return (
    <div className="admin-order">
      <AdminPage />
      <div className="order-order">
        <h2>Danh sách order</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartLocal?.map((infor, index) => (
              <tr key={infor.id}>
                <td>{index + 1}</td>
                <td>{infor.fullname}</td>
                <td>{infor.phone}</td>
                <td>
                  <button
                    className="approve-button"
                    onClick={() => handleViewDetails(infor.cart)}
                  >
                    Show
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDetails && (
        <div className="box-infor">
          <div>
            {[cartLocal]?.map((infor) => (
              <div className="infor-user">
                <div className="infor-text">
                  <h4>FullName:</h4>
                  <p>{infor.fullname}</p>
                </div>
                <div className="infor-text">
                  <h4>Number Phone:</h4>
                  <p>{infor.phone}</p>
                </div>
                <div className="infor-text">
                  <h4>Choose:</h4>
                  <p>{infor.choose}</p>
                </div>
                <div className="infor-text">
                  <h4>Address:</h4>
                  <p>{infor.address}</p>
                </div>
                <div className="infor-text">
                  <h4>Total order amount:</h4>
                  <p>$ {calculateTotalPrice()}</p>
                </div>
              </div>
            ))}

            <table className="table-infor">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody className="table-product">
                {hitoryCart.map((product) => (
                  <tr>
                    <td>{product.id}</td>
                    <td>
                      <img src={product.image} alt="" />
                    </td>

                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn-close-infor" onClick={handleClose}>
            close
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminOrder;
