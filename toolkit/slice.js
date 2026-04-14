import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggleLeftMenu: false,
  filterAgentByDate: '',
};
export const reduxSlice = createSlice({
  name: "flipix",
  initialState,
  reducers: {
    toggleLeftMenuState: (state, action) => {
      state.isToggleLeftMenu = action.payload;
    },
    filteringDateState: (state, action) => {
      state.filterAgentByDate = action.payload;
    }
  },
});

export const { toggleLeftMenuState, filteringDateState } = reduxSlice.actions;
export default reduxSlice.reducer;
