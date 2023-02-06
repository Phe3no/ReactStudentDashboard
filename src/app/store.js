import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "../features/assignments/assignmentsSlice";
import chartDataReducer from "../features/data/dataSlice";
import reviewsReducer from "../features/reviews/reviewsSlice";
import studentsReducer from "../features/students/studentsSlice";

export const store = configureStore({
  reducer: {
    assignments: assignmentsReducer,
    data: chartDataReducer,
    reviews: reviewsReducer,
    students: studentsReducer,
  },
});
