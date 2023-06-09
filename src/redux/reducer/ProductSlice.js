import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductAPI from "../../api/Product";

export const handleCallProductAPI = createAsyncThunk(
  "products/fetchAllProduct",
  async () => {
    // Call API
    const response = await ProductAPI.getAllProduct();
    const data = response;
    console.log("data sau khi call:", data);
    // Lưu vào LocalStorage
    localStorage.setItem("Products", JSON.stringify(data));
    // Trả về một data
    return data;
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (searchTerm) => {
    const products = JSON.parse(localStorage.getItem("Products")) || []; // Sửa từ "carts" thành "Products"
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toString().includes(searchTerm)
    );
    return filteredProducts;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: localStorage.getItem("products") || [],
  reducers: {},
  extraReducers: {
    [handleCallProductAPI.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
    [searchProducts.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default ProductSlice.reducer;
