import * as client from "../users/client";
import { FaUser, FaStar, FaMinus, FaPlus, FaPen, FaThumbsUp, FaUserPlus, FaAdjust } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import * as likesClient from "../likes/client";
import * as reviewsClient from "../reviews/client";
import * as followsClient from "../follows/client";
import { useSelector } from "react-redux";
import "./index.css";

function UserDetails() {
    const [user, setUser] = useState(null);
  const { currentUser } = useSelector((state) => state.usersReducer);
  const [userLikes, setUserLikes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { id } = useParams();
  const { pathname } = useLocation();
  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
    fetchFollowers(user._id);
    fetchFollowing(user._id);
    fetchLikes(user._id);
    fetchReviews(user._id);
  };

  const fetchLikes = async (userId) => {
    const likes = await likesClient.findHotelsUserLikes(userId);
    setUserLikes(likes);
  };

  const fetchReviews = async (userId) => {
    const reviews = await reviewsClient.findReviewsForUser(userId);
    setReviews(reviews);
  };

  const follow = async () => {
    await followsClient.createUserFollowsUser(currentUser._id, user._id);
  };

  const unfollow = async () => {
    await followsClient.deleteUserFollowsUser(currentUser._id, user._id);
  };

  const fetchFollowers = async (userId) => {
    const followers = await followsClient.findUsersFollowingUser(userId);
    setFollowers(followers);
  };

  const fetchFollowing = async (userId) => {
    const following = await followsClient.findUsersFollowedByUser(userId);
    setFollowing(following);
  };

  const alreadyFollowing = () => {
    return followers.find(
      (follows) => follows.follower._id === currentUser._id
    );
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  return (
    <div>
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
                        {currentUser && (
                            <>
                            {currentUser?._id !== id && (
                                <>
                                {alreadyFollowing() ? (
                                    <btn onClick={unfollow} className="btn proj-color-btn-unfollow">
                                        <FaMinus /> 
                                        Unfollow
                                    </btn>
                                    ) : (
                                    <btn onClick={follow} className="btn proj-color-btn-follow">
                                        <FaPlus /> 
                                        Follow
                                    </btn>
                                    )}
                                </>
                                )}
                            </>
                        )}
                        </div>
                    </div>
                    <div className="mb-2 mx-auto p-4">
                        <h2 className="proj-heading-profile">{user?.firstName} {user?.lastName}</h2>
                    </div>
                    {user?._id === currentUser._id && (
                    <div className="mb-2 mx-auto p-4">
                        <h3 className="proj-heading-profile"><u>Contact</u></h3>
                        <h4 className="proj-heading-profile">{user?.contact}</h4>
                    </div>
                    )}
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
            {userLikes && (userLikes.length !== 0) && (
                <div className="mx-auto py-5 px-2 w-50">
                    <h3 className="proj-heading-profile">Hotels {user?.firstName} Likes <FaUser className="proj-color-fa-user-plus" /></h3>
                    <ul className="list-group">
                    {userLikes &&
                        userLikes.map((like) => (
                    <Link to={`/Lodger/Search/${like.hotelId}`}>
                        <li className="list-group-item proj-bg-color-ul proj-font-ul">{like.hotelId}</li>
                    </Link>
                    ))}
                    </ul>
                </div>
            )}
        </div>
        {user?.role === "ADMIN" && (
            <div className="proj-bg-color-for-you">
                <div className="mx-auto pt-5 px-2 w-50">
                    <div className="row d-flex">
                        <h3 className="proj-heading-profile py-5">Admin Reviews <FaThumbsUp className="proj-color-fa-thumbs-up" /></h3>
                        <div className="py-5">
                            <ul className="list-group">
                            {reviews.map((review, index) => (
                                <li key={index} className="list-group-item proj-bg-color-ul-review">
                                <h3 className="proj-heading-profile">{review.review}</h3>
                                <p className="proj-heading-profile">{review.description}</p>
                                <p className="proj-heading-profile">{review._id}</p>
                            </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {following && (following.length !== 0) && (
        <div className="proj-bg-color-follow">
                <div className="mx-auto py-5 px-2 w-50">
                  <h3 className="proj-heading-profile">Following <FaUserPlus className="proj-color-fa-user-plus" /></h3>
                  <ul className="list-group">
                  {following.map((follows) => (
                    <Link
                        to={`/Lodger/Profile/${follows.followed._id}`}
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
        )}
        {followers && (followers.length !== 0) && (
        <div className="proj-bg-color-follow">
        <div className="mx-auto py-5 px-2 w-50">
            <h3 className="proj-heading-profile">Followers <FaUserPlus className="proj-color-fa-user-plus"/></h3>
            <ul className="list-group">
            {followers.map((follows) => (
                <Link
                    to={`/Lodger/Profile/${follows.follower._id}`}
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
    )}
</div> 
)
}

export default UserDetails;