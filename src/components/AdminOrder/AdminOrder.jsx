import React, { useState } from "react";
import AdminPage from "../../pages/admin/Admin";
import "./AdminOrder.css";

const AdminOrder = () => {
  const [showDetails, setShowDetails] = useState(false);
  const cartLocal = JSON.parse(localStorage.getItem("order")) || [];
  const orderLocal = JSON.parse(localStorage.getItem("carts")) || [];
  console.log("data lấy về:", cartLocal);

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
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
            {[cartLocal]?.map((infor, index) => (
              <tr key={infor.id}>
                <td>{index + 1}</td>
                <td>{infor.fullname}</td>
                <td>{infor.phone}</td>
                <td>
                  <button
                    className="approve-button"
                    onClick={handleViewDetails}
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
                {orderLocal.map((product)=>(
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td><img src={product.image} alt="" /></td>
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
