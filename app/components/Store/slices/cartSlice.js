import { createSlice } from "@reduxjs/toolkit";



const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};


const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};



const cartSlice = createSlice({
    initialState:{
    items: loadCartFromLocalStorage(),
    },
    name:"cart",
    reducers:{
      getCart: (state) => state,

      addToCart: (state, action) => {
      const { productId, variantId, quantity } = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.productId === productId &&
          item.variantId === variantId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, variantId, quantity });
      }

      saveCartToLocalStorage(state.items);
    },

    
       removeFromCart: (state, action) => {
      const { productId, variantId } = action.payload;

      state.items = state.items.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.variantId === variantId
          )
      );

      saveCartToLocalStorage(state.items);
    },
       updateQuantity: (state, action) => {
      const { productId, variantId, quantity } = action.payload;

      const item = state.items.find(
        (item) =>
          item.productId === productId &&
          item.variantId === variantId
      );

      if (item) {
        item.quantity = quantity;
      }

      saveCartToLocalStorage(state.items);
    },
      clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage([]);
    },

    },
})


export const {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
