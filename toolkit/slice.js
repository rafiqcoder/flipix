import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggleLeftMenu: false,
  filterAgentByDate: "",
  totalAgentData: 0,
  createNewFlipixData: {
    jobNo: "",
    clientName: "",
    functionType: "",
    functionDate: "",
    dealerName: "",
    dealerNum: "",
    photographerStudio: "",
    photographerNum: "",
    selectedSong: "",
  },
  // monthly pricing plan state
  hyperPricePlan: {
    planType: "Standard",
    currentRate: 30,
    value: 51,
    totalPrice: 0,
  },
  //  yearly pricing plan state
  hyperYearlyPricePlan: {
    planType: "Standard",
    currentRate: 10,
    value: 1001,
    totalPrice: 0,
  },
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
    },
    createNewFlipixState: (state, action) => {
      state.createNewFlipixData = action.payload;
    },
    // hyper price plan MONTHLY state
    hyperPlanTypeState: (state, action) => {
      state.hyperPricePlan.planType = action.payload;
    },
    hyperCurrentRateState: (state, action) => {
      state.hyperPricePlan.currentRate = action.payload;
    },
    hyperValueState: (state, action) => {
      state.hyperPricePlan.value = action.payload;
    },
    hyperTotalPriceState: (state, action) => {
      state.hyperPricePlan.totalPrice = action.payload;
    },
    // hyper price plan YEARLY state
    hyperYearlyPlanTypeState: (state, action) => {
      state.hyperYearlyPricePlan.planType = action.payload;
    },
    hyperYearlyCurrentRateState: (state, action) => {
      state.hyperYearlyPricePlan.currentRate = action.payload;
    },
    hyperYearlyValueState: (state, action) => {
      state.hyperYearlyPricePlan.value = action.payload;
    },
    hyperYearlyTotalPriceState: (state, action) => {
      state.hyperYearlyPricePlan.totalPrice = action.payload;
    },
  },
});

export const {
  toggleLeftMenuState,
  filteringDateState,
  totalAgeCountState,
  createNewFlipixState,
  hyperPlanTypeState,
  hyperCurrentRateState,
  hyperValueState,
  hyperTotalPriceState,
  hyperYearlyPlanTypeState,
  hyperYearlyCurrentRateState,
  hyperYearlyValueState,
  hyperYearlyTotalPriceState,
} = reduxSlice.actions;
export default reduxSlice.reducer;
