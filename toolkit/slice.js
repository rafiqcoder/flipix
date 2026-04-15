import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggleLeftMenu: false,
  filterAgentByDate: '',
  totalAgentData: 0,
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
    },
    totalAgeCountState: (state, action) => {
      state.totalAgentData = action.payload;
    }
  },
});

export const { toggleLeftMenuState, filteringDateState,totalAgeCountState } = reduxSlice.actions;
export default reduxSlice.reducer;
