import { Link, useLocation, useParams } from "react-router-dom";
import { FaUser, FaStar, FaMinus, FaPlus, FaPen, FaThumbsUp, FaUserPlus, FaAdjust } from 'react-icons/fa';
import * as client from "../users/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as followsClient from "../follows/client";
import * as reviewsClient from "../reviews/client";
import { setCurrentUser } from "../users/reducer";
import { useDispatch } from "react-redux";
import * as amadeusClient from "../SearchHotel/amadeus-service";
import "./index.css";

function Profile() {
    const { userId } = useParams();
    const { pathname } = useLocation();
    const [user, setUser] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await client.account();
      setUser(user);
      review.userId = user._id;
      fetchReviews(user._id);
      fetchFollowers(user._id);
      fetchFollowing(user._id);
    } catch (error) {
      navigate("/Lodger/Login");
    }
  };
  const signOut = async () => {
    await client.signOut();
    dispatch(setCurrentUser(null));
    navigate("/Lodger/Login");
  };

  const [searchResults, setSearchResults] = useState(null);
    const [searchText, setSearchText] = useState("");

    const searchForHotels = async (text) => {
        const results = await amadeusClient.fetchHotelsByName(text);
        setSearchResults(results);
      };

      const [review, setReview] = useState({
        review: "New Review",
        description: "Review Description",
      });

      const addReview = async (userId, review) => {
        await reviewsClient.createReview(userId, review);
      };
    
      const deleteReview = async (reviewId) => {
        await reviewsClient.deleteReview(reviewId);
      };

      const updateReview = async (reviewId, review) => {
        await reviewsClient.updateReview(reviewId, review);
      };

  const fetchReviews = async (userId) => {
    const reviews = await reviewsClient.findReviewsForUser(userId);
    setReviews(reviews);
  };

const fetchFollowers = async (userId) => {
    const followers = await followsClient.findUsersFollowingUser(userId);
    setFollowers(followers);
  };

  const fetchFollowing = async (userId) => {
    const following = await followsClient.findUsersFollowedByUser(userId);
    setFollowing(following);
  };

  useState(() => {
    fetchUser();
    searchForHotels(searchText);
  }, [userId]);
    return (
        <div className="proj_bg_color">
                <div className="proj-bg-color-profile">
                    <div className="flex-column mx-auto py-5 px-2 w-50">
                        <div>
                            <h2 className="proj-heading-profile">{user?.firstName}'s Profile</h2><br/>
                            <hr/>
                        </div>
                        <div>
                            <div className="d-flex flex-row mb-2">
                                <div className="float-start">
                                    <FaUser size={84} />
                                </div>
                                <div className="ms-auto d-grid gap-2 d-md-block">
                                  <Link
                                    to={`/Lodger/Profile/Edit`}
                                    className={`${pathname.includes(`Edit`)}`}>
                                        <btn className="btn proj-color-btn">
                                            <FaPen /> 
                                            Edit Profile
                                        </btn>
                                    </Link>
                                    <button onClick={signOut} className="btn btn-danger">
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                            <div className="mb-2 mx-auto p-4">
                                <h2 className="proj-heading-profile">{user?.firstName} {user?.lastName}</h2>
                            </div>
                            <div className="mb-2 mx-auto p-4">
                                <h3 className="proj-heading-profile"><u>Contact</u></h3>
                                <h4 className="proj-heading-profile">{user?.contact}</h4>
                            </div>
                            <div className="mb-2 mx-auto p-4">
                                <h3 className="proj-heading-profile"><u>Interests</u></h3>
                                <h4 className="proj-heading-profile">{user?.interests}</h4>
                            </div>
                            <div className="mb-2 mx-auto p-4">
                                <h4 className="proj-heading-profile"><u>Travel Wish List</u></h4>
                                <h4 className="proj-heading-profile">{user?.travelWishList}</h4>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="proj-bg-color-for-you">
                    <div className="mx-auto pt-5 px-2 w-50">
                        <h3 className="proj-heading-profile">Likes <FaThumbsUp className="proj-color-fa-thumbs-up" /></h3>
                        <div className="row d-flex py-5">
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
                <div className="proj-bg-color-for-you">
                    <div className="mx-auto pt-5 px-2 w-50">
                        {user?.role === "ADMIN" && (
                        <div className="row d-flex">
                            <h3 className="proj-heading-profile py-5">Admin Reviews <FaThumbsUp className="proj-color-fa-thumbs-up" /></h3>
                            <form>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end py-5">
                                    <input value={review.review}
                                    onChange={(e) => setReview({
                                        ...review, review: e.target.value })}
                                        className="form-control proj-bg-color-ul proj-font-ul"
                                    />
                                    <btn 
                                    onClick={() => addReview(userId, review)} 
                                    className="btn proj-color-btn-add">
                                        <FaPlus /> 
                                        Add
                                    </btn>
                                    <btn 
                                    onClick={() => updateReview(review._id, review)} 
                                    className="btn proj-color-btn-update">
                                        <FaAdjust /> 
                                        Update
                                    </btn>
                                </div>
                                <textarea value={review.description}
                                onChange={(e) => setReview({
                                    ...review, description: e.target.value })}
                                    className="form-control proj-bg-color-ul proj-font-ul"
                                />
                            </form>
                            <div className="py-5">
                                <ul className="list-group">
                                {reviews.map((review, index) => (
                                    <li key={index} className="list-group-item proj-bg-color-ul-review">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <btn 
                                        onClick={() => setReview(review)} 
                                        className="btn proj-color-btn-edit">
                                            <FaAdjust />  
                                            Edit
                                        </btn>
                                        <btn 
                                        onClick={() => deleteReview(review._id)} 
                                        className="btn proj-color-btn-delete">
                                            <FaMinus />  
                                            Delete
                                        </btn>
                                    </div>
                                    <h3 className="proj-heading-profile">{review.review}</h3>
                                    <p className="proj-heading-profile">{review.description}</p>
                                    <p className="proj-heading-profile">{review._id}</p>
                                </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <div className="proj-bg-color-follow">
              <div className="mx-auto py-5 px-2 w-50">
                  <h3 className="proj-heading-profile">Following <FaUserPlus className="proj-color-fa-user-plus" /></h3>
                  <ul className="list-group">
                  {following.map((follows) => (
                    <Link
                        to={`/Lodger/Profile/More/${follows.followed._id}`}
                        key={follows._id}
                        className="list-group-item proj-bg-color-ul"
                    >
                        {follows.followed.firstName} {follows.followed.lastName} (@
                        {follows.followed.username})
                    </Link>
                    ))}
                </ul>
              </div>
          </div>
          <div className="proj-bg-color-follow">
            <div className="mx-auto py-5 px-2 w-50">
                <h3 className="proj-heading-profile">Followers <FaUserPlus className="proj-color-fa-user-plus"/></h3>
                <ul className="list-group">
                {followers.map((follows) => (
                    <Link
                        to={`/Lodger/Profile/More/${follows.follower._id}`}
                        key={follows._id}
                        className="list-group-item proj-bg-color-ul"
                    >
                        {follows.follower.firstName} {follows.follower.lastName} (@
                        {follows.follower.username})
                    </Link>
                    ))}
                </ul>
        </div>
    </div>
    </div> 
    )
}

export default Profile;