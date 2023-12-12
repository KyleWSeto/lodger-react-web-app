import { Link, useLocation } from "react-router-dom";
import { FaUser, FaPen } from "react-icons/fa";
import * as client from "../../users/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Edit() {
    const { pathname } = useLocation();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const fetchUser = async () => {
      try {
        const user = await client.account();
        setUser(user);
        // fetchFollowing(user._id);
      } catch (error) {
        navigate("/Lodger/Login");
      }
    };
    const updateUser = async () => {
        await client.updateUser(user._id, user);
      };
      useState(() => {
        fetchUser();
      }, []);
    return (
        <div className="proj-bg-color-profile py-5">
            <div className="mb-2 mx-auto p-2 w-50">
                <div>
                    <h2 className="proj-heading-profile">{user?.firstName}'s Profile</h2><br/>
                    <hr/>
                </div>
                <div>
                    <div className="d-flex flex-row mb-2">
                        <div className="float-start">
                            <FaUser size={84} />
                        </div>
                        <div className="ms-auto">
                            <Link
                                to={`/Lodger/Profile`}
                                className={`${pathname.includes(`Profile`)}`}>
                                <btn className="btn proj-color-btn">
                                    <FaPen /> 
                                    Cancel Editing
                                </btn>
                            </Link>
                        </div>
                    </div>
                    <form>
                        <div className="mb-2 mx-auto p-2">
                            <label for="name"><h4 className="proj-heading-profile">First Name</h4></label>
                            <input onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                type="text"
                                value={user?.firstName}
                                className="form-control" />
                        </div>
                        <div className="mb-2 mx-auto p-2">
                            <label for="name"><h4 className="proj-heading-profile">Last Name</h4></label>
                            <input onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                type="text"
                                value={user?.lastName}
                                className="form-control" />
                        </div>
                        <div className="mb-2 mx-auto p-2">
                            <label for="contact"><h4 className="proj-heading-profile">Contact</h4></label>
                            <input onChange={(e) => setUser({ ...user, contact: e.target.value })}
                                type="text"
                                value={user?.contact}
                                className="form-control" />
                        </div>
                        <div className="mb-2 mx-auto p-2">
                            <h4 className="proj-heading-profile">Interests</h4>
                            <input
                                onChange={(e) => setUser({ ...user, interests: e.target.value })}
                                type="text"
                                value={user?.interests}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-2 mx-auto p-2">
                            <h4 className="proj-heading-profile">Travel Wish List</h4>
                            <input
                                onChange={(e) => setUser({ ...user, travelWishList: e.target.value })}
                                type="text"
                                value={user?.travelWishList}
                                className="form-control"
                            />
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link
                            to={`/Lodger/Profile`}
                            className={`${pathname.includes(`Profile`)}`}>
                                <btn onClick={updateUser}>
                                    <a href="index.html" className="btn proj-color-btn float-end">Save Profile</a>
                                </btn>
                            </Link>
                            <Link
                            to={`/Lodger/Profile`}
                            className={`${pathname.includes(`Profile`)}`}>
                                <btn>
                                    <a href="index.html" className="btn proj-color-btn float-end">Cancel</a>
                                </btn>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit;