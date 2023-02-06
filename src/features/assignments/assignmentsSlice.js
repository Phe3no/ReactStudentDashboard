import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ASSIGNMENTS_URL = "http://localhost:5000/assignments";

const initialState = {
  students: [],
  status: "idle", // loading | succeeded | failed
  error: null,
};

export const fetchAssignments = createAsyncThunk(
  "appointments/fetchappoinments",
  async () => {
    try {
      const response = await axios.get(ASSIGNMENTS_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAssignments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedAssignments = action.payload;
        state.assignments = loadedAssignments;
      })
      .addCase(fetchAssignments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllAssignments = (state) => state.assignments.assignments;
export const getAssignmentsStatus = (state) => state.assignments.status;
export const getAssignmentsError = (state) => state.assignments.error;

export default assignmentsSlice.reducer;
