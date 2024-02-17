/*
 * Counter - A Redux Slice
 * 1. State
 * 2. Action
 * 3. View
 */
import { createSlice } from "@reduxjs/toolkit";

// State
export const counterSlice = createSlice({
 name: "counter",
 initialState: {
  value: 0,
 },
 reducers: {
  increment: (state) => {
   state.value += 1;
  },
  decrement: (state) => {
   state.value -= 1;
  },
  incrementByAmount: (state, action) => {
   state.value += action.payload;
  },
  decrementByAmount: (state, action) => {
   state.value -= action.payload;
  },
 },
});

// Action
export const { increment, decrement, incrementByAmount, decrementByAmount } =
 counterSlice.actions;
export const incrementAsync = (amount) => (dispatch) => {
 setTimeout(() => {
  dispatch(incrementByAmount(amount));
 }, 1000);
};
export const decrementAsync = (amount) => (dispatch) => {
 setTimeout(() => {
  dispatch(decrementByAmount(amount));
 }, 1000);
};

// View
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
