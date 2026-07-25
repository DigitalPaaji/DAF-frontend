import { configureStore } from "@reduxjs/toolkit";
import categoryReducer  from "./slices/categorySlice"
import cart from "./slices/cartSlice"
import wishlist from "./slices/wishlistSlice"
import toggleUser from "./slices/toggleUser"
import user from "./slices/userSlice"
import LocalCart from "./slices/AddtoCartLocal"


export const store = configureStore({
    reducer:{
     categories: categoryReducer,
     cart,
     wishlist,
     user,
     toggleUser,
     LocalCart,
    }
})
 