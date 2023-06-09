import React, { useEffect, useState } from "react";
import AdminPage from "../../pages/admin/Admin";
import "./AdminUser.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../redux/reducer/UserSlice";
import { BsPencilSquare, BsPlusSquare } from "react-icons/bs";

const AdminUser = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const [showForm, setShowForm] = useState(false);
  console.log(111, userList);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  // Xử lý đóng form
  const closeForm = () => {
    setShowForm(false);
  };

  // Xử lý hiển thị form
  const showAddForm = () => {
    setShowForm(true);
  };

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <BsPlusSquare className="btn-add" onClick={showAddForm} />
                  <BsPencilSquare className="btn-edit" onClick={showAddForm} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {showForm && (
          <form className="form form-user">
            <label htmlFor="">Enter ID</label>
            <input type="number" placeholder="Enter ID..." name="id" />
            <label htmlFor="">Enter Name</label>
            <input type="text" placeholder="Enter name..." name="name" />
            <label htmlFor="">Enter Email</label>
            <input type="number" placeholder="Enter email..." name="email" />
            <br />
            <button className="btn-add" type="submit">
              add
            </button>
            <button className="button-close" type="button" onClick={closeForm}>
              Close
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminUser;
