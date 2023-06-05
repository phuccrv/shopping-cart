import { axiosClient } from "./AxiosClient";

class ProductAPI {
  //lay tat ca
  static getAllProduct() {
    const url = "/product";
    return axiosClient.get(url, {});
  }

  // lay 1 thang
  static getProductById(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url, {});
  }

  // tao moi
  static addProduct(param) {
    const url = "/product";
    return axiosClient.post(url, param);
  }

  // static createProduct(params) {
  // }
  // static editProduct(params) {
  // }
  // static delete(param) {}
}
export default ProductAPI;
