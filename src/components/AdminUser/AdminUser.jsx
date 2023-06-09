import React, { useEffect, useState } from "react";
import AdminPage from "../../pages/admin/Admin";
import "./AdminUser.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserList, register } from "../../redux/reducer/UserSlice";
import { BsPencilSquare, BsPlusSquare } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUser = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const [userValue, setUserValue] = React.useState([]);
  const [showForm, setShowForm] = useState(false);

  // lấy value từ input
  const handleOnchage = (e) => {
    setUserValue({ ...userValue, [e.target.name]: e.target.value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
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
    setUserValue()
  };
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  // Xử lý đóng form
  const closeForm = () => {
    setShowForm(false);
  };

  // Xử lý hiển thị form
  const showAddForm = (id) => {
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
                  <BsPlusSquare
                    className="btn-add"
                    onClick={() => showAddForm(user)}
                  />
                  <BsPencilSquare
                    className="btn-edit"
                    onClick={() => showAddForm(user)}
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
            {/* <label htmlFor="">Enter ID</label>
            <input
              type="number"
              placeholder="Enter ID..."
              name="id"
              onChange={handleOnchage}
            /> */}
            <label htmlFor="">Enter Name</label>
            <input
              type="text"
              placeholder="Enter name..."
              name="username"
              onChange={handleOnchage}
            />
            <label htmlFor="">Enter Email</label>
            <input
              type="text"
              placeholder="Enter email..."
              name="email"
              onChange={handleOnchage}
            />
            <label htmlFor="">Enter Password</label>
            <input
              type="password"
              placeholder="Enter Password..."
              name="password"
              onChange={handleOnchage}
            />
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
      <ToastContainer />
    </div>
  );
};

export default AdminUser;
