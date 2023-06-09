import React, { useState, useEffect } from "react";
import AdminPage from "../../pages/admin/Admin";
import "./AdminProduct.css";
import { BsPencilSquare, BsPlusSquare, BsTrash } from "react-icons/bs";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [formButtonText, setFormButtonText] = useState("Add Product");
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: 0,
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const localStorageProducts =
      JSON.parse(localStorage.getItem("Products")) || [];
    setProducts(localStorageProducts);
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
    setIsEditing(false);
    setEditProductId(null);
    setFormButtonText("Add Product");
    setNewProduct({
      id: "",
      name: "",
      price: 0,
      image: "",
    });
  };

  const closeForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setEditProductId(null);
    setFormButtonText("Add Product");
    setNewProduct({
      id: "",
      name: "",
      price: 0,
      image: "",
    });
  };

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditProduct = (productId) => {
    setEditProductId(productId);
    setFormButtonText("Edit Product");
    setIsEditing(true);

    const productToEdit = products.find((product) => product.id === productId);

    if (productToEdit) {
      setNewProduct({
        id: productToEdit.id,
        name: productToEdit.name,
        price: productToEdit.price,
        image: productToEdit.image,
      });
    }

    setShowForm(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageRef = ref(storage, `image/${file.name}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList([...imageList, url]);
        setNewProduct({
          ...newProduct,
          image: url,
        });
      });
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const updatedProducts = [...products];

    const newProductItem = {
      id: newProduct.id,
      name: newProduct.name,
      price: newProduct.price,
      image: newProduct.image,
    };
    updatedProducts.push(newProductItem);
    toast.success("Add product Success", {
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

    localStorage.setItem("carts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    closeForm();
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const updatedProducts = [...products];

    const updatedProduct = {
      id: newProduct.id,
      name: newProduct.name,
      price: newProduct.price,
      image: newProduct.image,
    };

    const index = updatedProducts.findIndex(
      (product) => product.id === editProductId
    );

    if (index !== -1) {
      updatedProducts[index] = updatedProduct;
      toast.success("Update product Success", {
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

    localStorage.setItem("carts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    closeForm();
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    toast.error("Delete product Success", {
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
    localStorage.setItem("carts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  return (
    <div className="admin-product">
      <AdminPage />
      <div className="porduct-admin">
        <h2>Danh sách sản phẩm</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Images</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString()} $</td>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>
                  <BsPlusSquare className="btn-add" onClick={toggleForm} />
                  <BsPencilSquare
                    className="btn-edit"
                    onClick={() => handleEditProduct(product.id)}
                  />
                  <BsTrash
                    className="btn-delete"
                    onClick={() => handleDeleteProduct(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && (
        <div className="box-show-add">
          <form className="form"  onSubmit={isEditing ? handleUpdateProduct : handleAddProduct}>
            <label htmlFor="">Enter ID</label>
            <input
              type="number"
              placeholder="Enter ID..."
              name="id"
              value={newProduct.id}
              onChange={handleInputChange}
            />
            <label htmlFor="">Enter Product Name</label>
            <input
              type="text"
              placeholder="Enter product name..."
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            <label htmlFor="">Enter Price</label>
            <input
              type="number"
              placeholder="Enter price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
            <label htmlFor="">Add Image</label>
            <input
              className="input-last"
              type="file"
              placeholder="Choose image file"
              name="image"
              onChange={handleImageChange}
            />
            <br />
            <button className="btn-add" type="submit">
              {formButtonText}
            </button>
            <button className="button-close" type="button" onClick={closeForm}>
              Close
            </button>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default AdminProduct;
