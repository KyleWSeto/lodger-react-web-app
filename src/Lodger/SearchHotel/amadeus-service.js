// const Amadeus = require("amadeus");
// var amadeus = new Amadeus({
//     clientId: process.env.REACT_APP_AMADEUS_API_KEY,
//     clientSecret: process.env.REACT_APP_AMADEUS_SECRET_API_KEY
//   });

// // export const fetchHotelByName = async (hotelName) => {
// //     const response = await axios.get(
// //       `https://test.api.amadeus.com/v1/reference-data/locations/hotel?keyword=${hotelName}&subType=HOTEL_LEISURE&max=20`
// //     );
// //     return response.data;
// //   };

//   export const fetchHotelByName = async (hotelName) => {
//     amadeus.referenceData.locations.hotel.get({
//         keyword: hotelName,
//         subType: 'HOTEL_LEISURE',
//         max: 20,
//     }).then(response => response.data)
//     .catch(err => console.error(err));
//   };

