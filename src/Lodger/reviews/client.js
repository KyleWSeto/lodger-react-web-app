import axios from "axios";
const request = axios.create({
  withCredentials: true,
});

const USERS_URL = "http://localhost:4000/api/users";
const REVIEWS_URL = "http://localhost:4000/api/reviews";
export const deleteReview = async (reviewId) => {
  const response = await axios.delete(`${REVIEWS_URL}/${reviewId}`);
  return response.data;
};

export const findReviewsForUser = async (userId) => {
  const response = await axios.get(`${USERS_URL}/${userId}/reviews`);
  return response.data;
};

export const createReview = async (userId, review) => {
  const response = await axios.post(
    `${USERS_URL}/${userId}/reviews`,
    review
  );
  return response.data;
};