import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REVIEWS_URL = "http://localhost:5000/reviews";

const initialState = {
  reviews: [],
  status: "idle",
  error: null,
};

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    try {
      const response = await axios.get(REVIEWS_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedReviews = action.payload;
        state.reviews = loadedReviews;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllReviews = (state) => state.reviews.reviews;
export const getReviewsStatus = (state) => state.reviews.status;
export const getReviewsError = (state) => state.reviews.error;

export default reviewsSlice.reducer;
