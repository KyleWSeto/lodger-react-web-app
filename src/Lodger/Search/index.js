import { FaStar } from 'react-icons/fa';
import React, { useEffect, useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import * as client from "../SearchHotel/amadeus-service";
import "./index.css";

function Search() {
    // const [searchResults, setSearchResults] = useState(null);
    // const [searchText, setSearchText] = useState("PARI");

    // const searchForHotels = async (text) => {
    //     const results = await client.fetchHotelByName(text);
    //     setSearchResults(results.search.data.albums);
    //   };

    //   useEffect(() => {
    //     searchForHotels("PARI");
    //   }, []);
    const { pathname } = useLocation();
    return (
        <div class="proj_bg_color">
                <div class="row d-flex justify-content-md-center">
                    <div class="proj-bg-color-search">
                        <div class="mx-auto w-75">
                            <div class="col-md-auto text-center py-5">
                                <h1 class="display-1 proj-heading-font py-5">Search for Hotels <i class="fa fa-magnifying-glass"></i></h1>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn proj-color-btn proj-font-btn" type="submit">Search</button>
                                </form>
                            </div>
                            <div class="row d-flex py-5">
                                <div class="col justify-content-center py-2">
                                    <div class="card" style={{width: "18rem"}}>
                                        <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                        <div class="card-body proj-color-card-body">
                                          <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                          <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                          <p class="card-text">
                                          <Link
                                                to={`/Lodger/Search/Hotel`}
                                                style={{ textDecoration: 'none' }}
                                                className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                              <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                              </a>
                                              </Link>
                                            </p>
                                        </div>
                                      </div>
                                </div>        
                                <div class="col justify-content-center py-2">
                                    <div class="card" style={{width: "18rem"}}>
                                        <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                        <div class="card-body proj-color-card-body">
                                          <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                          <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                          <Link
                                                to={`/Lodger/Search/Hotel`}
                                                style={{ textDecoration: 'none' }}
                                                className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                              <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                              </a>
                                              </Link>
                                        </div>
                                      </div>
                                </div>        
                                <div class="col justify-content-center py-2">
                                    <div class="card" style={{width: "18rem"}}>
                                        <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                        <div class="card-body proj-color-card-body">
                                          <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                          <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                          <Link
                                                to={`/Lodger/Search/Hotel`}
                                                style={{ textDecoration: 'none' }}
                                                className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                              <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                              </a>
                                              </Link>
                                        </div>
                                      </div>
                                </div>        
                            </div>
                            <div class="row d-flex py-5">
                                <div class="col justify-content-center py-2">
                                    <div class="card" style={{width: "18rem"}}>
                                        <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                        <div class="card-body proj-color-card-body">
                                          <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                          <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                          <Link
                                                to={`/Lodger/Search/Hotel`}
                                                style={{ textDecoration: 'none' }}
                                                className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                              <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                              </a>
                                              </Link>
                                        </div>
                                      </div>
                                </div>        
                                <div class="col justify-content-center py-2">
                                    <div class="card" style={{width: "18rem"}}>
                                        <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                        <div class="card-body proj-color-card-body">
                                          <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                          <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                          <Link
                                                to={`/Lodger/Search/Hotel`}
                                                style={{ textDecoration: 'none' }}
                                                className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                              <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                              </a>
                                              </Link>
                                        </div>
                                      </div>
                                </div>        
                                <div class="col justify-content-center py-2">
                                    <div class="card" style={{width: "18rem"}}>
                                        <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                        <div class="card-body proj-color-card-body">
                                          <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                          <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                          <Link
                                                to={`/Lodger/Search/Hotel`}
                                                style={{ textDecoration: 'none' }}
                                                className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                              <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                              </a>
                                              </Link>
                                        </div>
                                      </div>
                                </div>     
                            </div>
                            <div class="row d-flex py-5">
                                <div class="col justify-content-center py-2">
                                    <div class="card" style={{width: "18rem"}}>
                                        <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                        <div class="card-body proj-color-card-body">
                                          <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                          <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                          <Link
                                                to={`/Lodger/Search/Hotel`}
                                                style={{ textDecoration: 'none' }}
                                                className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                              <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                              </a>
                                              </Link>
                                        </div>
                                      </div>
                                </div>        
                                <div class="col justify-content-center py-2">
                                    <div class="card" style={{width: "18rem"}}>
                                        <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                        <div class="card-body proj-color-card-body">
                                          <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                          <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                          <Link
                                                to={`/Lodger/Search/Hotel`}
                                                style={{ textDecoration: 'none' }}
                                                className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                              <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                              </a>
                                              </Link>
                                        </div>
                                      </div>
                                </div>        
                                <div class="col justify-content-center py-2">
                                    <div class="card" style={{width: "18rem"}}>
                                        <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                        <div class="card-body proj-color-card-body">
                                          <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                          <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                          <Link
                                                to={`/Lodger/Search/Hotel`}
                                                style={{ textDecoration: 'none' }}
                                                className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                                              <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information
                                              </a>
                                              </Link>
                                        </div>
                                      </div>
                                </div>     
                            </div>
                        </div>
                    </div>
                    <div class="proj-bg-img-home">
                        <div class="col-md-auto text-center">
                            <img src="../../images/Lodger-logos_transparent.png" alt="Background" class="img-fluid proj-size-logo" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Search;