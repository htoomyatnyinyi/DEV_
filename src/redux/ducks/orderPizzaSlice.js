import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order_info: {
    name: "RTK_name",
    phone: "RTK_phone",
    address: "RTK_address",
    pork: 0,
    seafood: 0,
    cheese: 0,
    other: 0,
    node: "Leave Note...",
  },
};

const orderPizzaSlice = createSlice({
  name: "orderpizza",
  initialState,
  reducers: {
    get_order_info(state, action) {
      //
    },
    set_order_info(state, action) {
      const info_payload = action.payload;
      state.order_info = info_payload;
    },
  },
});

export const { get_order_info, set_order_info } = orderPizzaSlice.actions;
export default orderPizzaSlice.reducer;
