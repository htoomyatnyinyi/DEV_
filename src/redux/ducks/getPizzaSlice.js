import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    get_pizza(state, action) {},
    set_pizza(state, action) {
      const data = action.payload;
      return { ...state, ...data };
    },
  },
});

export const { get_pizza, set_pizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
