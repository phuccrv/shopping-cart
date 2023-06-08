import React from "react";
import AdminPage from "../../pages/admin/Admin";
import "./AdminUser.css"
import { BsCheckCircleFill } from "react-icons/bs";

const AdminUser = () => {
  return (
    <div className="admin-user">
      <AdminPage />
      <div className="user-admin">
        <h2>Danh sách user</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Lock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>nguyễn văn a</td>
              <td>nva@gmai.com</td>
              <td><BsCheckCircleFill/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUser;
