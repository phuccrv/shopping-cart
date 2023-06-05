import { createSlice } from "@reduxjs/toolkit";

//phục vụ cho việc call bất đồng bộ để lưu data lên thằng redux
//createAsyncThunk sẽ nhận vào 2 tham số, thứ nhất là 1 chuỗi nên đặt tên theo cách call
//nó được hiểu là một action

const CartSlice = createSlice({
  name: "carts",
  initialState: [],
  //reducers chỉ thao tác với đồng bộ
  reducers: {
    addToCart: (state, action) => {
      console.log("action ==>", action);
      //thu 1 co roi cap nhat thang quanity
      //thu 2 chua co them moi
      const findIndexProduct = state.findIndex(
        (product) => product.id == action.payload.id
      );
      if (findIndexProduct >= 0) {
        state[findIndexProduct].quantity += 1;
        state[findIndexProduct].total =
          state[findIndexProduct].quantity * state[findIndexProduct].price;
      } else {
        let quantity = 1;
        state.push({ ...action.payload, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state));
      return state;
    },
    handleQuantity: (state, action) => {
      //do something
    },
    deleteCart: (state, action) => {
      //do something
    },
  },
});

const { actions, reducer } = CartSlice;

export const { addToCart, deleteCart, handleQuantity } = actions;

export default reducer;
