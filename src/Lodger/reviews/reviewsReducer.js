import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  review: { name: "New Review", description: "Review Description" },
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addReview: (state, action) => {
      state.reviews = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.reviews,
      ];
    },
    deleteReview: (state, action) => {
      state.reviews = state.reviews.filter(
        (review) => review._id !== action.payload
      );
    },
    updateReview: (state, action) => {
      state.reviews = state.reviews.map((review) => {
        if (review._id === action.payload._id) {
          return action.payload;
        } else {
          return review;
        }
      });
    },
    setReview: (state, action) => {
      state.review = action.payload;
    },
  },
});

export const { setReviews, addReview, deleteReview, updateReview, setReview } =
  reviewsSlice.actions;
export default reviewsSlice.reducer;