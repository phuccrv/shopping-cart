import axios from "axios";

// API
//tao instance axios
//axiosCLient tra moij nguoi cac phuong thuc http get, path, put, delete, post
export const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});
