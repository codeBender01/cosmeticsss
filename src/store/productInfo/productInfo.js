import { createSlice } from "@reduxjs/toolkit";
import products from "./productData/products";
import axios from "axios";
import product1 from "../../images/product/product-1.png";
// import product2 from "../../../images/product/product-2.png";
// import product3 from "../../../images/product/product-3.png";
// import product4 from "../../../images/product/product-4.png";
// import product5 from "../../../images/product/product-5.png";
// import product6 from "../../../images/product/product-6.png";
// import product7 from "../../../images/product/product-7.png";
// import product8 from "../../../images/product/product-8.png";
// import product9 from "../../../images/product/product-9.png";
// import product10 from "../../../images/product/product-10.png";
// import product11 from "../../../images/product/product-11.png";

const baseURL = "http://localhost:3001/api/public/products";

const initialState = {
  products,
  filteredProductsInCart: [],
  productsInCart: [],
  subTotalPrice: 99,
  shipping: 99,
  dumpArray: [],
  isLoading: false,
  hasErrors: false,
  productUuids: [],
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
    getProducts: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.dumpArray = payload;
      state.productUuids = payload.products.map((pr) => {
        return pr.uuid;
      });

      state.isLoading = false;
      state.hasErrors = false;
    },

    getProductsFailure: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },

    setProductImage: (state, { payload }) => {
      if (state.dumpArray.length > 0) {
        for (let pr of state.dumpArray) {
          pr.image = payload;
        }
      }
    },
  },
});

export const {
  addProductToTheCart,
  getProducts,
  getProductsSuccess,
  getProductsFailure,
  setProductImage,
} = productsSlice.actions;

export default productsSlice.reducer;

export function setImages() {
  return async (dispatch) => {
    try {
    } catch (err) {
      throw err;
    }
  };
}

export function fetchRecipes() {
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      const productImage = { image: product1 };
      for (let pr of data.products) {
        await axios.post(`${baseURL}/${pr.uuid}`, productImage);
      }

      dispatch(getProductsSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(getProductsFailure());
    }
  };
}
