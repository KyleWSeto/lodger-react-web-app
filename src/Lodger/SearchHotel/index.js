import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as client from "./amadeus-service";
import * as likesClient from "../likes/client";
import * as userService from "../users/client";
import { useState } from "react";
import ProtectedContent from "../users/protectedContent";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"
import "./index.css";

function SearchHotel() {
    const [hotel, setHotel] = useState(null);
    const [userLikes, setUserLikes] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const { id } = useParams();

    const fetchHotel = async (id) => {
        const result = await client.fetchHotelById(id);
        setHotel(result);
        fetchUsersLikeHotel(id);
      };

      const like = async () => {
        await likesClient.createUserLikesHotel(currentUser._id, id);
      };

      const unlike = async () => {
        await likesClient.deleteUserLikesHotel(currentUser._id, id);
      };

      const fetchUsersLikeHotel = async (id) => {
        const result = await likesClient.findUsersWhoLikeHotel(id); // DEBUG: undefined returned from node app
        setUserLikes(result);
      };

    const fetchCurrentUser = async () => {
        const user = await userService.account();
        setCurrentUser(user);
      };
    
      useEffect(() => {
        fetchHotel(id);
        fetchCurrentUser();
      }, [id]);
    return (
        <div>
            {hotel && (
            <>
            <div className="proj-bg-color-detail">
                <div className="py-5">
                    <h1 className="text-center proj-heading-profile">{hotel.name}</h1>
                </div>
            </div>
            <div className="proj-bg-color-detail-2">
                <div className="mx-auto p-2 w-50">
                    <div className="py-5">
                        <h1 className="proj-heading-profile">Details</h1>
                        <div className="float-end">
                            <ProtectedContent>
                            <btn onClick={unlike} className="btn proj-color-btn-unlike">
                                <i className="fa fa-minus"></i>
                                Unlike
                            </btn>
                            <btn onClick={like} className="btn proj-color-btn-like">
                                <i className="fa fa-plus"></i>
                                Like
                            </btn>
                            </ProtectedContent>
                        </div>
                        <div className="py-2">
                            <h3>Name</h3>
                            <ul className="list-group">
                                <li className="list-group-item proj-bg-color-ul proj-font-ul">{hotel.name}</li>
                            </ul>
                        </div>
                        <div className="py-2">
                            <h3 className="proj-heading-profile">Location <i className="fa fa-building proj-color-fa-building"></i></h3>
                            <ul className="list-group">
                                <li className="list-group-item proj-bg-color-ul proj-font-ul">City: {hotel.address.cityName}</li>
                                <li className="list-group-item proj-bg-color-ul proj-font-ul">Country: {hotel.address.countryCode}</li>
                            </ul>
                        </div>
                        <div className="py-2">
                            <h3 className="proj-heading-profile">Reviews <i className="fa fa-newspaper proj-color-fa-newspaper"></i></h3>
                            <ul className="list-group">
                                <li className="list-group-item proj-bg-color-ul proj-font-ul">Number of Reviews: </li>
                                <li className="list-group-item proj-bg-color-ul proj-font-ul">Number of Ratings: </li>
                                <li className="list-group-item proj-bg-color-ul proj-font-ul">Overall Rating: </li>
                                <li className="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Service: </li>
                                <li className="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Facilities: </li>
                                <li className="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Value for Money: </li>
                                <li className="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Location: </li>
                                <li className="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Points of Interest: </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto py-5 px-2 w-50">
                    <h3 className="proj-heading-profile">Users who like {hotel.name} <FaUser className="proj-color-fa-user-plus" /></h3>
                    <ul className="list-group">
                    {userLikes &&
                        userLikes.map((user) => (
                    <Link to={`/Lodger/Profile/${user._id}`}>
                        <li className="list-group-item proj-bg-color-ul proj-font-ul">{user.firstName} {user.lastName}</li>
                    </Link>
                    ))}
                </ul>
            </div>
            </div>
            </>
            )}
        </div>
    )
}

export default SearchHotel;