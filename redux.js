// reducer

import { createStore, legacy_createStore } from "redux";

const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
// store
// function createStore ini sudah deprecated artinya sudah tidak digunakan
// const store = createStore(cartReducer);
const store = legacy_createStore(cartReducer);
console.log("on create store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("on subscribe : ", store.getState());
});

// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 20, qty: 100 } };
store.dispatch(action2);
