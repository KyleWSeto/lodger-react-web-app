import axios from "axios";

const HOTELS_API = "http://localhost:4000/api/hotels";

export const fetchHotelsByName = async (text) => {
    const response = await axios.get(
      `${HOTELS_API}`
    );
    return response.data;
  };


