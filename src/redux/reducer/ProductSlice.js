import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductAPI from "../../api/Product";

export const handleCallProductAPI = createAsyncThunk(
  "products/fetchAllProduct",
  async (action) => {
    //call API
    //thay vì call ở component thì mình call trực tiếp tại redux
    const response = await ProductAPI.getAllProduct();
    const data = response;
    console.log("data sau khi call:", data);
    //lưu vào LocalStorage
    localStorage.setItem("carts", JSON.stringify(data));
    //trả về một payload
    return data;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: localStorage.getItem("products") || [],
  //thực hiện với bất đồng bộ
  extraReducers: {
    //action chính là kết quả trả về của hàm handleCallProductAPI
    [handleCallProductAPI.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { actions, reducer } = ProductSlice;

export default reducer;
