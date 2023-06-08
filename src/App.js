import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import Auth from "./pages/auth/Auth";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import UpLoadImage from "./components/UpLoadImage/UpLoadImage";
import { Upload } from "antd";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import AdminPage from "./pages/admin/Admin";
import AdminUser from "./components/AdminUser/AdminUser";
import AdminOrder from "./components/AdminOrder/AdminOrder";
import AdminProduct from "./components/AdminProduct/AdminProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/uploadimage" element={<UpLoadImage />} />
        <Route path="/AdminProduct" element={<AdminProduct />} />
        <Route path="/AdminOrder" element={<AdminOrder />} />
        <Route path="/AdminUser" element={<AdminUser />} />
      </Routes>
    </div>
  );
}

export default App;
