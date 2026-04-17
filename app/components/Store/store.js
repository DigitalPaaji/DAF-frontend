import { configureStore } from "@reduxjs/toolkit";
import categoryReducer  from "./slices/categorySlice"
import cart from "./slices/cartSlice"
import wishlist from "./slices/wishlistSlice"


export const store = configureStore({
    reducer:{
     category: categoryReducer,
     cart,
     wishlist,
    }
})
 