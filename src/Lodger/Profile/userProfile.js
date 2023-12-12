import * as client from "../users/client";
import { FaUser, FaStar, FaMinus, FaPlus, FaPen, FaThumbsUp, FaUserPlus, FaAdjust } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import * as followsClient from "../follows/client";
import { useSelector } from "react-redux";
import "./index.css";

function UserDetails() {
    const [user, setUser] = useState(null);
  const { currentUser } = useSelector((state) => state.usersReducer); // [2
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { id } = useParams();
  const { pathname } = useLocation();
  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
    fetchFollowers(user._id);
    fetchFollowing(user._id);
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
    <div class="proj_bg_color">
            <div class="proj-bg-color-profile">
                <div class="flex-column mx-auto py-5 px-2 w-50">
                    <div>
                        <h2 class="proj-heading-profile">{user?.firstName}'s Profile</h2><br/>
                        <hr/>
                    </div>
                    <div>
                        <div class="d-flex flex-row mb-2">
                            <div class="float-start">
                                <FaUser size={84} />
                            </div>
                            <div class="ms-auto d-grid gap-2 d-md-block">
                            {currentUser && (
                                <>
                                {currentUser?._id !== id && (
                                    <>
                                    {alreadyFollowing() ? (
                                      <btn onClick={unfollow} class="btn proj-color-btn-unfollow">
                                          <FaMinus /> 
                                          Unfollow
                                      </btn>
                                        ) : (
                                      <btn onClick={follow} class="btn proj-color-btn-follow">
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
                        <div class="mb-2 mx-auto p-4">
                            <h2 class="proj-heading-profile">{user?.firstName} {user?.lastName}</h2>
                        </div>
                        <div class="mb-2 mx-auto p-4">
                            <h3 class="proj-heading-profile"><u>Contact</u></h3>
                            <h4 class="proj-heading-profile">{user?.contact}</h4>
                        </div>
                        <div class="mb-2 mx-auto p-4">
                            <h3 class="proj-heading-profile"><u>Interests</u></h3>
                            <h4 class="proj-heading-profile">{user?.interests}</h4>
                        </div>
                        <div class="mb-2 mx-auto p-4">
                            <h4 class="proj-heading-profile"><u>Travel Wish List</u></h4>
                            <h4 class="proj-heading-profile">{user?.travelWishList}</h4>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="proj-bg-color-follow">
              <div class="mx-auto py-5 px-2 w-50">
                  <h3 class="proj-heading-profile">Following <FaUserPlus class="proj-color-fa-user-plus" /></h3>
                  <ul class="list-group">
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
          <div class="proj-bg-color-follow">
            <div class="mx-auto py-5 px-2 w-50">
                <h3 class="proj-heading-profile">Followers <FaUserPlus class="proj-color-fa-user-plus"/></h3>
                <ul class="list-group">
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
</div> 
)
}

export default UserDetails;