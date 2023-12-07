import { Link, useLocation } from "react-router-dom";
import { FaUser, FaStar, FaMinus, FaPlus, FaPen, FaThumbsUp, FaUserPlus } from 'react-icons/fa';
import "./index.css";

function Profile() {
    const { pathname } = useLocation();
    return (
        <div class="proj_bg_color">
                <div class="proj-bg-color-profile">
                    <div class="flex-column mx-auto py-5 px-2 w-50">
                        <div>
                            <h2 class="proj-heading-profile">[id name] Profile</h2><br/>
                            <hr/>
                        </div>
                        <div>
                            <div class="d-flex flex-row mb-2">
                                <div class="float-start">
                                    <FaUser size={84} />
                                </div>
                                <div class="ms-auto d-grid gap-2 d-md-block">
                                  <btn class="btn proj-color-btn-unfollow">
                                      <FaMinus /> 
                                      Unfollow
                                  </btn>
                                  <btn class="btn proj-color-btn-follow">
                                      <FaPlus /> 
                                      Follow
                                  </btn>
                                  <Link
                                    to={`/Lodger/Profile/Edit`}
                                    className={`${pathname.includes(`Edit`)}`}>
                                        <btn class="btn proj-color-btn">
                                            <FaPen /> 
                                            Edit Profile
                                        </btn>
                                    </Link>
                                </div>
                            </div>
                            <div class="mb-2 mx-auto p-4">
                                <h2 class="proj-heading-profile">[id name]</h2>
                            </div>
                            <div class="mb-2 mx-auto p-4">
                                <label for="contact"><h3 class="proj-heading-profile">Contact</h3></label>
                                <input id="contact" class="form-control proj-bg-color-ul proj-font-ul" title="Contact" readonly placeholder="Contact" value="[id name contact]" />
                            </div>
                            <div class="mb-2 mx-auto p-4">
                                <h3 class="proj-heading-profile">Interests</h3>
                                <textarea id="description" class="form-control proj-bg-color-ul proj-font-ul" readonly>[id name interests]</textarea>
                            </div>
                            <div class="mb-2 mx-auto p-4">
                                <h4 class="proj-heading-profile">Travel Wish List</h4>
                                <textarea id="description" class="form-control proj-bg-color-ul proj-font-ul" readonly>[id name travel-wish-list]</textarea>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="proj-bg-color-for-you">
                    <div class="mx-auto py-5 px-2 w-50">
                        <h3 class="proj-heading-profile">Likes <FaThumbsUp class="proj-color-fa-thumbs-up" /></h3>
                        <div class="row d-flex py-5">
                            <div class="col justify-content-center py-2">
                                <div class="card" style={{width: "18rem"}}>
                                    <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                    <div class="card-body proj-color-card-body">
                                      <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                      <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                      <p class="card-text"><a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information</a></p>
                                    </div>
                                  </div>
                            </div>        
                            <div class="col justify-content-center py-2">
                                <div class="card" style={{width: "18rem"}}>
                                    <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                    <div class="card-body proj-color-card-body">
                                      <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                      <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                      <p class="card-text"><a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information</a></p>
                                    </div>
                                  </div>
                            </div>        
                            <div class="col justify-content-center py-2">
                                <div class="card" style={{width: "18rem"}}>
                                    <h3 class="card-header proj-heading-card proj-color-card-header">[hotel search data name]</h3>
                                    <div class="card-body proj-color-card-body">
                                      <h5 class="card-title proj-heading-card">[hotel search data cityCode], [hotel search data countryCode]</h5>
                                      <h5 class="card-title proj-heading-card">[hotel reviews data overallRating] <FaStar class="proj-color-fa-star" /></h5>
                                      <p class="card-text"><a href="/" class="link-offset-2 link-underline link-underline-opacity-0 proj-color-link">More information</a></p>
                                    </div>
                                  </div>
                            </div>     
                        </div>
                    </div>
                </div>
                <div class="proj-bg-color-follow">
                  <div class="mx-auto py-5 px-2 w-50">
                      <h3 class="proj-heading-profile">Following <FaUserPlus class="proj-color-fa-user-plus" /></h3>
                      <ul class="list-group">
                        <a href="/" class="proj-decoration-link"><li class="list-group-item proj-bg-color-ul proj-font-ul">[following id name]</li></a>
                        <a href="/" class="proj-decoration-link"><li class="list-group-item proj-bg-color-ul proj-font-ul">[following id name]</li></a>
                        <a href="/" class="proj-decoration-link"><li class="list-group-item proj-bg-color-ul proj-font-ul">[following id name]</li></a>
                    </ul>
                  </div>
              </div>
              <div class="proj-bg-color-follow">
                <div class="mx-auto py-5 px-2 w-50">
                    <h3 class="proj-heading-profile">Followers <FaUserPlus class="proj-color-fa-user-plus"/></h3>
                    <ul class="list-group">
                      <a href="/" class="proj-decoration-link"><li class="list-group-item proj-bg-color-ul proj-font-ul">[follower id name]</li></a>
                      <a href="/" class="proj-decoration-link"><li class="list-group-item proj-bg-color-ul proj-font-ul">[follower id name]</li></a>
                      <a href="/" class="proj-decoration-link"><li class="list-group-item proj-bg-color-ul proj-font-ul">[follower id name]</li></a>
                    </ul>
            </div>
        </div>
    </div> 
    )
}

export default Profile;