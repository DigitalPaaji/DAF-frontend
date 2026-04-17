import { createSlice } from "@reduxjs/toolkit";

const getWishlist=()=>{
    try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
}


const saveWishListToLocalStorage = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};



const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        items:getWishlist()
    },
    reducers:{

        toggleWishlist:(state,action)=>{
const { productId } = action.payload;
if(state.items.includes(productId)){
    state.items= state.items.filter((item)=>item !=productId)
}
else{
    state.items.push(productId)
}
saveWishListToLocalStorage(state.items)
        },

clearWishlist:(state)=>{
    state.items=[]
    saveWishListToLocalStorage([ ])
}


    }



})

export const {toggleWishlist,clearWishlist }= wishlistSlice.actions

export default wishlistSlice.reducer
 

