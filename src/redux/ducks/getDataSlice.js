import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const getDataSlice = createSlice({
  name: "getdata",
  initialState,
  reducers: {
    get_data(state, action) {
      // // console.log(action.payload);
      // const aa = action.payload;
      // // console.log(aa);
      // return { ...state, ...aa };
      // state = action.payload;
    },
    set_data(state, action) {
      const data = action.payload;
      return { ...state, ...data };
    },
  },
});

export const { get_data, set_data } = getDataSlice.actions;
export default getDataSlice.reducer;
