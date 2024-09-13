import { createSlice } from "@reduxjs/toolkit";

// Initial state is an array of counter objects, each with an id and value
const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Reducer to increment the value of a counter by id
    increment: (state, action) => {
      const counter = state.find((c) => c.id === action.payload); // Find the counter by id
      if (counter) {
        counter.value++; // Increment the value if found
      }
    },
    // Reducer to decrement the value of a counter by id
    decrement: (state, action) => {
      const counter = state.find((c) => c.id === action.payload); // Find the counter by id
      if (counter) {
        counter.value--; // Decrement the value if found
      }
    },
    // Reducer to reset all counters' values to 0
    reset: (state) => {
      state.forEach((counter) => {
        counter.value = 0; // Reset each counter's value to 0
      });
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;