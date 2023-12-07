import React from "react";
import { FaStar, FaArrowUp, FaSmile } from 'react-icons/fa';
import { Link, useLocation  } from "react-router-dom";
import "./index.css";

function Home() {
    const { pathname } = useLocation();
    return (
        <div class="proj-bg-color-home">
          <div class="proj-bg-img-home">
            <div class="row d-flex justify-content-md-center pb-5">
              <div class="col-md-auto text-center">
                <img src="../../images/Lodger-logos_transparent.png" alt="Background" class="img-fluid proj-size-logo" />
                <h1 class="proj-font-color">Search for an abode for your ideal vacation destination!</h1>
              </div>
            </div>
          </div>
            <div class="row g-0 d-flex justify-content-md-center pb-5 mx-auto proj-bg-color-for-you">
                <div class="w-75">
                  <div class="col-md-auto text-center py-5">
                      <h1 class="display-1 proj-heading-font">For You <FaStar class="proj-color-fa-star" /></h1>
                  </div>
                  <div class="row d-flex">
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
            <div class="row g-0 d-flex justify-content-md-center pb-5 mx-auto proj-bg-color-trending">
              <div class="w-75">
                <div class="col-md-auto text-center py-5">
                    <h1 class="display-1 proj-heading-font">Trending <FaArrowUp class="proj-color-fa-arrow-up"/></h1>
                </div>
                <div class="row d-flex">
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
            <div class="row g-0 d-flex justify-content-md-center pb-5 mx-auto proj-bg-color-highly-rated">
              <div class="w-75">
                <div class="col-md-auto text-center py-5">
                    <h1 class="display-1 proj-heading-font">Highly Rated <FaSmile class="proj-color-fa-smile"/></h1>
                </div>
                <div class="row d-flex">
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
        </div>
    )
}

export default Home;