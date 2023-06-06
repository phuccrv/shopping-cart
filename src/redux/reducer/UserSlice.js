import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/User";

export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    const response = await UserAPI.register(payload);
    console.log(response)
    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem(
      "accessTokenRegister",
      JSON.stringify(response.accessToken)
    );
    return response.user;
  }
);

export const login = createAsyncThunk("login/fetchAuth", async (payload) => {
  const response = await UserAPI.login(payload);
  console.log(response);
  localStorage.setItem("user", JSON.stringify(response.user));
  localStorage.setItem(
    "accessTokenRegister",
    JSON.stringify(response.accessToken)
  );
  return response.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    email: "",
    username: "",
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = "";
      localStorage.removeItem("user");
      localStorage.removeItem("accessTokenRegister");
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
