import { createSlice } from "@reduxjs/toolkit";

const initialState = { chartData: [] };

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    storeAverages: (state, action) => {
      state.chartData = action.payload;
      console.log(state.chartData instanceof Array);
    },
  },
});

export const { storeAverages } = dataSlice.actions;

export const getAverages = (state) => state.data.chartData;

export default dataSlice.reducer;
