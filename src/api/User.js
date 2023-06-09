import axiosClient  from "./AxiosClient";

export class UserAPI {
  static register(param) {
    const url = "/users";
    return axiosClient.post(url, param);
  }

  static login(param) {
    const url = "/login";
    return axiosClient.post(url, param);
  }
  static listUsers() {
    const url = "/users";
    return axiosClient.get(url);
  }
  static updateUser(param) {
    const url = `/users/${param}`;
    return axiosClient.patch(url, param);
  }
}
