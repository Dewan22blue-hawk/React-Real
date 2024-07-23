// import toolkit from "@reduxjs/toolkit";
// const { configureStore, createAction, createReducer } = toolkit;
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
// };
// reducer
// const cartReducer = createReducer(initialState, (builder) => {

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
    // state.cart = [...state.cart, action.payload];
  });
});
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("on create store : ", store.getState());

store.subscribe(() => {
  console.log("on subscribe : ", store.getState());
});

const action1 = addToCart({ id: 1, qty: 20 });
store.dispatch(action1);
store.dispatch(login());
