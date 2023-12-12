import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/reducer";
import reviewsReducer from "./reviews/reviewsReducer";

const store = configureStore({
  reducer: {
    usersReducer,
    reviewsReducer,
  },
});

export default store;