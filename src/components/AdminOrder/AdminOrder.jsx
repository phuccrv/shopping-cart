import React from "react";
import AdminPage from "../../pages/admin/Admin";
import "./AdminOrder.css";

const AdminOrder = () => {
  return (
    <div className="admin-order">
      <AdminPage />
      <div className="order-order">
        <h2>Danh sách order</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12</td>
              <td>sda</td>
              <td>ád</td>
              <td>ádasd</td>
              <td>
                <button class="approve-button">Approve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrder;
