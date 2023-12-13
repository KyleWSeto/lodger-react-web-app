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

export const deleteUserLikesHotel = (userId, hotelId) => {
  const response = request.delete(
    `${LIKES_API}/users/${userId}/likes/${hotelId}`
  );
  return response.data;
};

export const findHotelsUserLikes = async (userId) => {
  const response = await request.get(`${LIKES_API}/users/${userId}/likes`);
  return response.data;
};
export const findUsersWhoLikeHotel = async (hotelId) => {
  const response = await request.get(`${LIKES_API}/hotels/${hotelId}/likes`);
  return response.data;
};