import { createSlice } from "@reduxjs/toolkit";
import products from "./productData/products";

const initialState = {
  products,
  filteredProductsInCart: [],
  productsInCart: [],
  subTotalPrice: 99,
  shipping: 99,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToTheCart: (state, action) => {
      for (let pr of state.products) {
        if (pr.id === action.payload) {
          state.filteredProductsInCart.push(pr);
          state.productsInCart = Array.from(
            new Set(state.filteredProductsInCart.map((a) => a.id))
          ).map((id) => {
            return state.filteredProductsInCart.find((a) => a.id === id);
          });
        }
      }
    },
  },
});

export const { addProductToTheCart } = productsSlice.actions;

export default productsSlice.reducer;
