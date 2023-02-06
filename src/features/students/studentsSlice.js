import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const STUDENTS_URL = "http://localhost:5000/students";

const initialState = {
  students: [],
  status: "idle",
  error: null,
};

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    try {
      const response = await axios.get(STUDENTS_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    onChart: (state, action) => {
      state.students.forEach((student) => {
        if (student.id === action.payload) {
          student.onChart = !student.onChart;
        }
      });
    },
    oneStudentOnChart: (state, action) => {
      console.log(action.payload);
      state.students.forEach((student) => {
        console.log(action.payload);
        if (student.id === action.payload) {
          student.onChart = true;
        } else {
          student.onChart = false;
        }
      });
      state.students.forEach((student) => console.log(student.onChart));
    },
    setOnChartAllStudentsTrue: (state, action) => {
      state.students.map((student) => (student.onChart = true));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStudents.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedStudents = action.payload;
        state.students = loadedStudents;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { onChart, oneStudentOnChart, setOnChartAllStudentsTrue } =
  studentsSlice.actions;

export const getAllStudents = (state) => state.students.students;
export const getStudentsStatus = (state) => state.students.status;
export const getStudentsError = (state) => state.students.error;

export default studentsSlice.reducer;
