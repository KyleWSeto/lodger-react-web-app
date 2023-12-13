import { FaStar } from 'react-icons/fa';
import React, { useEffect, useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import * as client from "../SearchHotel/amadeus-service";
import "./index.css";

function Search() {
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
        <div className="proj_bg_color">
                <div className="row d-flex justify-content-md-center">
                    <div className="proj-bg-color-search">
                        <div className="mx-auto w-75">
                            <div className="col-md-auto text-center py-5">
                                <h1 className="display-1 proj-heading-font py-5">Search for Hotels <i className="fa fa-magnifying-glass"></i></h1>
                                <form className="d-flex" role="search">
                                    <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button onClick={() => searchForHotels(searchText)} className="btn proj-color-btn proj-font-btn" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="row d-flex py-5">
                            {searchResults &&
                              searchResults.map((hotel) => (
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
                    <div className="proj-bg-img-home">
                        <div className="col-md-auto text-center">
                            <img src="../../images/Lodger-logos_transparent.png" alt="Background" className="img-fluid proj-size-logo" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Search;