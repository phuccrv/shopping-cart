import React, { useEffect, useState } from "react";
import AdminPage from "../../pages/admin/Admin";
import "./AdminUser.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserList,
  register,
  updateUser,
} from "../../redux/reducer/UserSlice";
import { BsPencilSquare, BsPlusSquare } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUser = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const [userValue, setUserValue] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  // Lấy value từ input
  const handleOnChange = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      [e.target.name]: e.target.value,
    }));
  };

  // lấy value từ input

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      const updatedUser = { ...selectedUser, ...userValue };
      await dispatch(updateUser(updatedUser)).unwrap();
      console.log(222, selectedUser);
      toast.info("Update User Success", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "toast-message",
      });
    } else {
      await dispatch(register(userValue)).unwrap();
      toast.success("Add User Success", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "toast-message",
      });
    }
    setUserValue({});
    setSelectedUser(null);
    setShowForm(false);
  };

  // Xử lý đóng form
  const closeForm = () => {
    setShowForm(false);
    setSelectedUser(null);
    setUserValue({});
  };

  // Xử lý hiển thị form chỉnh sửa
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setUserValue({ ...user });
    setShowForm(true);
  };
  // Xử lý hiển thị form thêm mới
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
              <th>STT</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <BsPlusSquare className="btn-add" onClick={showAddForm} />
                  <BsPencilSquare
                    className="btn-edit"
                    onClick={() => handleEditUser(user)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {showForm && (
          <form className="form form-user" onSubmit={handleAddUser}>
            <label htmlFor="">Enter Name</label>
            <input
              type="text"
              placeholder="Enter name..."
              name="username"
              value={userValue.username || ""}
              onChange={handleOnChange}
            />
            <input
              type="text"
              placeholder="Enter email..."
              name="email"
              value={userValue.email || ""}
              onChange={handleOnChange}
            />
            <input
              type="password"
              placeholder="Enter Password..."
              name="password"
              value={userValue.password || ""}
              onChange={handleOnChange}
            />
            <br />
            <button className="btn-add" type="submit">
              {selectedUser ? "Save" : "Add"}
            </button>
            <button className="button-close" type="button" onClick={closeForm}>
              Close
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminUser;
