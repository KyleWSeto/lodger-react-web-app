import React, { useEffect, useState } from "react";
import { FaStar, FaArrowUp, FaSmile } from 'react-icons/fa';
import { Link, useLocation  } from "react-router-dom";
import { useSelector } from "react-redux";
import * as client from "../SearchHotel/amadeus-service";
import "./index.css";

function Home() {
    const { currentUser } = useSelector((state) => state.usersReducer);
    const [searchResults, setSearchResults] = useState(null);
    const [searchText, setSearchText] = useState("");

    const searchForHotels = async (text) => {
        const results = await client.fetchHotelsByName(text);
        setSearchResults(results);
      };

      useEffect(() => {
        searchForHotels(searchText);
      }, []);
    const { pathname } = useLocation();
    return (
        <div className="proj-bg-color-home">
          <div className="proj-bg-img-home">
            <div className="row g-0 d-flex justify-content-md-center pb-5">
              <div className="col-md-auto text-center">
                <img src="../../images/Lodger-logos_transparent.png" alt="Background" className="img-fluid proj-size-logo" />
                <h1 className="proj-font-color">Search for an abode for your ideal vacation destination!</h1>
              </div>
            </div>
          </div>
          {currentUser && (
            <>
              {currentUser.role === "ADMIN" && (
            <div className="row g-0 d-flex justify-content-md-center pb-5 mx-auto proj-bg-color-for-you">
                <div className="w-75">
                  <div className="col-md-auto text-center py-5">
                      <h1 className="display-1 proj-heading-font">For You <FaStar className="proj-color-fa-star" /></h1>
                  </div>
                  <div className="row d-flex">
                  {searchResults &&
                    searchResults.slice(7, 10).map((hotel) => (
                      <div className="col justify-content-center py-2">
                          <div className="card" style={{width: "18rem"}}>
                              <h3 className="card-header proj-heading-card proj-color-card-header">{hotel.name}</h3>
                              <div className="card-body proj-color-card-body">
                                <h5 className="card-title proj-heading-card">{hotel.address.cityName}, {hotel.address.countryCode}</h5>
                                <h5 className="card-title proj-heading-card">Not enough ratings <FaStar className="proj-color-fa-star" /></h5>
                                <p className="card-text">
                                <Link
                                      to={`/Lodger/Search/${hotel.id}`}
                                      style={{ textDecoration: 'none' }}
                                      className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                    <p className="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                    </p>
                                    </Link>
                                  </p>
                              </div>
                            </div>
                      </div>        
                      ))}
                  </div>
                </div>
            </div>
            )}
            </> 
            )}
            <div className="row g-0 d-flex justify-content-md-center pb-5 mx-auto proj-bg-color-trending">
              <div className="w-75">
                <div className="col-md-auto text-center py-5">
                    <h1 className="display-1 proj-heading-font">Trending <FaArrowUp className="proj-color-fa-arrow-up"/></h1>
                </div>
                <div className="row d-flex">
                {searchResults &&
                  searchResults.slice(0, 3).map((hotel) => (
                    <div className="col justify-content-center py-2">
                        <div className="card" style={{width: "18rem"}}>
                            <h3 className="card-header proj-heading-card proj-color-card-header">{hotel.name}</h3>
                            <div className="card-body proj-color-card-body">
                              <h5 className="card-title proj-heading-card">{hotel.address.cityName}, {hotel.address.countryCode}</h5>
                              <h5 className="card-title proj-heading-card">Not enough ratings <FaStar className="proj-color-fa-star" /></h5>
                              <p className="card-text">
                              <Link
                                    to={`/Lodger/Search/${hotel.id}`}
                                    style={{ textDecoration: 'none' }}
                                    className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                  <p className="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                  </p>
                                  </Link>
                                </p>
                            </div>
                          </div>
                    </div>        
                    ))}
                </div>
              </div>
            </div>
            <div className="row g-0 d-flex justify-content-md-center pb-5 mx-auto proj-bg-color-highly-rated">
              <div className="w-75">
                <div className="col-md-auto text-center py-5">
                    <h1 className="display-1 proj-heading-font">Highly Rated <FaSmile className="proj-color-fa-smile"/></h1>
                </div>
                <div className="row d-flex">
                {searchResults &&
                  searchResults.slice(4, 7).map((hotel) => (
                    <div className="col justify-content-center py-2">
                        <div className="card" style={{width: "18rem"}}>
                            <h3 className="card-header proj-heading-card proj-color-card-header">{hotel.name}</h3>
                            <div className="card-body proj-color-card-body">
                              <h5 className="card-title proj-heading-card">{hotel.address.cityName}, {hotel.address.countryCode}</h5>
                              <h5 className="card-title proj-heading-card">Not enough ratings <FaStar className="proj-color-fa-star" /></h5>
                              <p className="card-text">
                              <Link
                                    to={`/Lodger/Search/${hotel.id}`}
                                    style={{ textDecoration: 'none' }}
                                    className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                  <p className="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                  </p>
                                  </Link>
                                </p>
                            </div>
                          </div>
                    </div>        
                    ))}
                </div>        
              </div>
            </div>
        </div>
    )
}

export default Home;