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

        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/uploadimage" element={<UpLoadImage />} />
        
      </Routes>

    </div>
  );
}

export default App;
