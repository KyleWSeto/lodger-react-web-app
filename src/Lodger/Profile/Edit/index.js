import { Link, useLocation } from "react-router-dom";
import { FaUser, FaPen } from "react-icons/fa";
import "./index.css";

function Edit() {
    const { pathname } = useLocation();
    return (
        <div class="proj-bg-color-profile py-5">
            <div class="mb-2 mx-auto p-2 w-50">
                <div>
                    <h2 class="proj-heading-profile">[id name] Profile</h2><br/>
                    <hr/>
                </div>
                <div>
                    <div class="d-flex flex-row mb-2">
                        <div class="float-start">
                            <FaUser size={84} />
                        </div>
                        <div class="ms-auto">
                            <Link
                                to={`/Lodger/Profile`}
                                className={`${pathname.includes(`Profile`)}`}>
                                <btn class="btn proj-color-btn">
                                    <FaPen /> 
                                    Cancel Editing
                                </btn>
                            </Link>
                        </div>
                    </div>
                    <form>
                        <div class="mb-2 mx-auto p-2">
                            <label for="name"><h4 class="proj-heading-profile">Name</h4></label>
                            <input id="name" class="form-control" title="Name" placeholder="Name" value="[id name]" />
                        </div>
                        <div class="mb-2 mx-auto p-2">
                            <label for="contact"><h4 class="proj-heading-profile">Contact</h4></label>
                            <input id="contact" class="form-control" title="Contact" placeholder="Contact" value="[id name contact]" />
                        </div>
                        <div class="mb-2 mx-auto p-2">
                            <h4 class="proj-heading-profile">Interests</h4>
                            <textarea id="description" class="form-control">[id name interests]</textarea>
                        </div>
                        <div class="mb-2 mx-auto p-2">
                            <h4 class="proj-heading-profile">Travel Wish List</h4>
                            <textarea id="description" class="form-control">[id name travel-wish-list]</textarea>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link
                            to={`/Lodger/Profile`}
                            className={`${pathname.includes(`Profile`)}`}>
                                <btn>
                                    <a href="index.html" class="btn proj-color-btn float-end">Save Profile</a>
                                </btn>
                            </Link>
                            <Link
                            to={`/Lodger/Profile`}
                            className={`${pathname.includes(`Profile`)}`}>
                                <btn>
                                    <a href="index.html" class="btn proj-color-btn float-end">Cancel</a>
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