import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggleLeftMenu: false,
};
export const reduxSlice = createSlice({
  name: "flipix",
  initialState,
  reducers: {
    toggleLeftMenuState: (state, action) => {
      state.isToggleLeftMenu = action.payload;
    },
  },
});

export const { toggleLeftMenuState } = reduxSlice.actions;
export default reduxSlice.reducer;
