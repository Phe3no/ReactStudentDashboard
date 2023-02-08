import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  chartData: [],
  typeData: "bar",
  btnChecked: true,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    storeAllData: (state, action) => {
      state.allData = action.payload;
    },
    sortAllDataDifficultLowToHigh: (state) => {
      state.allData.sort((a, b) => a.difficultyValue - b.difficultyValue);
    },
    sortAllDataDifficultHighToLow: (state) => {
      state.allData.sort((a, b) => b.difficultyValue - a.difficultyValue);
    },
    sortAllDataFunLowToHigh: (state) => {
      state.allData.sort((a, b) => a.funValue - b.funValue);
    },
    sortAllDataFunHighToLow: (state) => {
      state.allData.sort((a, b) => b.funValue - a.funValue);
    },
    sortAllDataAssignmentNameLowToHigh: (state) => {
      state.allData.sort((a, b) => {
        const assignmentA = a.assignmentName.toLowerCase();
        const assignmentB = b.assignmentName.toLowerCase();
        if (assignmentA < assignmentB) {
          return -1;
        }
        if (assignmentA > assignmentB) {
          return 1;
        }
        return 0;
      });
    },
    sortAllDataAssignmentNameHighToLow: (state) => {
      state.allData.sort((a, b) => {
        const assignmentA = a.assignmentName.toLowerCase();
        const assignmentB = b.assignmentName.toLowerCase();
        if (assignmentA < assignmentB) {
          return 1;
        }
        if (assignmentA > assignmentB) {
          return -1;
        }
        return 0;
      });
    },
    storeAverages: (state, action) => {
      state.chartData = action.payload;
    },
    sortDifficultLowToHigh: (state) => {
      state.chartData.sort((a, b) => a.diffAverage - b.diffAverage);
    },
    sortDifficultHighToLow: (state) => {
      state.chartData.sort((a, b) => b.diffAverage - a.diffAverage);
    },
    sortFunLowToHigh: (state) => {
      state.chartData.sort((a, b) => a.funAverage - b.funAverage);
    },
    sortFunHighToLow: (state) => {
      state.chartData.sort((a, b) => b.funAverage - a.funAverage);
    },
    storeChartType: (state, action) => {
      state.typeData = action.payload;
    },
    storeBtnChecked: (state) => {
      state.btnChecked = !state.btnChecked;
    },
  },
});

export const {
  storeAllData,
  sortAllDataDifficultLowToHigh,
  sortAllDataDifficultHighToLow,
  sortAllDataFunLowToHigh,
  sortAllDataFunHighToLow,
  sortAllDataAssignmentNameLowToHigh,
  sortAllDataAssignmentNameHighToLow,
  storeAverages,
  sortDifficultLowToHigh,
  sortDifficultHighToLow,
  sortFunLowToHigh,
  sortFunHighToLow,
  storeChartType,
  storeBtnChecked,
} = dataSlice.actions;

export const getAllData = (state) => state.data.allData;
export const getAverages = (state) => state.data.chartData;
export const getChartType = (state) => state.data.typeData;
export const getButtonCheck = (state) => state.data.btnChecked;

export default dataSlice.reducer;
