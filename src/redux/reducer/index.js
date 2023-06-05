import reducerCart from "./CartSLice";
import reducerProduct from "./ProductSlice";
import reducerUser from "./UserSlice";

export const rootReducer = {
  cart: reducerCart,
  products: reducerProduct,
  user: reducerUser,
};
