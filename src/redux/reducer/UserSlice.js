
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/User";

export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    const response = await UserAPI.register(payload);
    localStorage.setItem("user", JSON.stringify(response.user));
  
    localStorage.setItem("accessTokenRegister", JSON.stringify(response.accessToken));
    console.log(555,response);
    return response.user;
  
  }
);


// Action này được sử dụng để thực hiện quá trình xác thực đăng nhập của người dùng
export const login = createAsyncThunk("login/fetchAuth", async (payload) => {
  const response = await UserAPI.login(payload);//UserAPI.login trả về một response chưa thông tin user và mã accessTokenRegister
  localStorage.setItem("user", JSON.stringify(response.user));// khi nhận response thì lưu lên local chuyển về thành chuỗi để đọc và truy xuất
  localStorage.setItem("accessTokenRegister", JSON.stringify(response.accessToken));
  return {
    ...response.user, //muốn lấy về đối tượng nguyên thuỷ
  };
});

// lấy danh sách user
export const getUserList = createAsyncThunk("user/fetchUserList", async () => {
  const response = await UserAPI.listUsers();
  const userList = response.map(user => ({ ...user }));
  return userList;
});

// // acction add user
// export const addUser = createAsyncThunk("user/fetchAddUser", async (user) => {
//   const response = await UserAPI.addUser(user);
//   return response;
// });

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    email: "",
    username: "",
    userList: [],
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = "";
      state.userList = [];
      // localStorage.removeItem("user");
      // localStorage.removeItem("accessTokenRegister");
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
    [getUserList.fulfilled]: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
