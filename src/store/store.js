import { configureStore } from "@reduxjs/toolkit";
import productInfo from "./productInfo/productInfo";

const store = configureStore({
  reducer: {
    products: productInfo,
  },
});

export default store;
