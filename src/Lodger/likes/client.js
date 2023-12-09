import axios from "axios";
const request = axios.create({
  withCredentials: true,
});

const LIKES_API = "http://localhost:4000/api";

export const findAllLikes = async () => {
  const response = await request.get(`${LIKES_API}/likes`);
  return response.data;
};
export const createUserLikesHotel = (userId, hotelId) => {
  const response = request.post(
    `${LIKES_API}/users/${userId}/likes/${hotelId}`
  );
  return response.data;
};
export const findHotelsUserLikes = (userId) => {
  const response = request.get(`${LIKES_API}/users/${userId}/likes`);
  return response.data;
};
export const findUsersWhoLikeHotel = (hotelId) => {
  const response = request.get(`${LIKES_API}/Hotels/${hotelId}/likes`);
  return response.data;
};