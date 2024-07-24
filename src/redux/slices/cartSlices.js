import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // data: [{ id: 1, qty: 2 }],
    // data: [],
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.qty++;
        // itemInCart.qty += 1;
      } else {
        state.data.push({ ...action.payload, qty: 1 });
        // state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
