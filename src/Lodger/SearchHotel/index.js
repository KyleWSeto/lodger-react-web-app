import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as client from "./amadeus-service";
import * as likesClient from "../likes/client";
import * as userService from "../users/client";
import { useState } from "react";
import ProtectedContent from "../users/protectedContent";
import "./index.css";

function SearchHotel() {
    const [hotel, setHotel] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const { id } = useParams();

    const fetchHotel = async (id) => {
        const result = await client.fetchHotelById(id);
        setHotel(result);
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
        <div class="pb-5">
            {hotel && (
            <>
            <div class="proj-bg-color-detail">
                <div class="py-5">
                    <h1 class="text-center proj-heading-profile">{hotel.name}</h1>
                </div>
            </div>
            <div class="proj-bg-color-detail-2">
                <div class="mx-auto p-2 w-50">
                    <div class="py-5">
                        <h1 class="proj-heading-profile">Details</h1>
                        <div class="float-end">
                            <btn class="btn proj-color-btn-unlike">
                                <i class="fa fa-minus"></i>
                                Unlike
                            </btn>
                            <btn class="btn proj-color-btn-like">
                                <i class="fa fa-plus"></i>
                                Like
                            </btn>
                        </div>
                        <div class="py-2">
                            <h3>Name</h3>
                            <ul class="list-group">
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">{hotel.name}</li>
                            </ul>
                        </div>
                        <div class="py-2">
                            <h3 class="proj-heading-profile">Location <i class="fa fa-building proj-color-fa-building"></i></h3>
                            <ul class="list-group">
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">City: {hotel.address.cityName}</li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">Country: {hotel.address.countryCode}</li>
                            </ul>
                        </div>
                        <div class="py-2">
                            <h3 class="proj-heading-profile">Reviews <i class="fa fa-newspaper proj-color-fa-newspaper"></i></h3>
                            <ul class="list-group">
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">Number of Reviews: </li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">Number of Ratings: </li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">Overall Rating: </li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Service: </li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Facilities: </li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Value for Money: </li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Location: </li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Points of Interest: </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )}
        </div>
    )
}

export default SearchHotel;