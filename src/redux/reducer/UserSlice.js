import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/User";

//bất đồng bộ
//đây là action bất đồng bộ
export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    console.log("action ===>", payload);
    //call API để đăng kí tài khoản
    const response = await UserAPI.register(payload);
    console.log("response ===>", response);
    const data = response.data;
    //luu User
    localStorage.setItem("user", JSON.stringify(data.user));
    //luu accessTOken
    localStorage.setItem(
      "accessTokenRegister",
      JSON.stringify(data.accessToken)
    );

    return data; //tra ve state cho  reducer
  }
);

//action bat dong bo

export const login = createAsyncThunk("login/fetchAuth", async (payload) => {
  //call len sever xem cos tai khoan

  try {
    const response = await UserAPI.login(payload);
    console.log("response", response);
    const user = response.data;
    user && localStorage.setItem("user", JSON.stringify(user.user));
    user &&
      localStorage.setItem(
        "accessTokenRegister",
        JSON.stringify(user.accessToken)
      );
    return user;
  } catch (error) {
    console.log(error);
  }
});
const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")) ||  {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state = action.payload.user;

      //set lai state cho User
      return state;
    },
    [login.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
  },
});

const { actions, reducer } = userSlice;

export default reducer;
