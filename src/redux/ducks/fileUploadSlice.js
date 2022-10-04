import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: {},
};

const fileUploadSlice = createSlice({
  name: "fileupload",
  initialState,
  reducers: {
    get_file(state, action) {
      //
    },
    set_file(state, action) {
      state.file = action.payload;
    },
  },
});

export const { get_file, set_file } = fileUploadSlice.actions;
export default fileUploadSlice.reducer;
