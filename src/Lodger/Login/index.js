import React, { useState } from "react";
import * as client from "../users/client";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../users/reducer";

import "./index.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUp = async () => {
    try {
      const user = await client.signUp({ firstName, lastName, username, password, role });
      navigate("/Lodger/Profile");
    } catch (error) {
      setError(error.message);
    }
  };
  const signIn = async () => {
    try {
      const user = await client.signIn({ username, password });
      dispatch(setCurrentUser(user));
      navigate("/Lodger/Profile");
    } catch (error) {
      setError(error.message);
    }
  };
    return (
        <div>
          <div className="row d-flex justify-content-md-center">
              <div className="col-6 text-center border-end py-5 proj-bg-img-register">
                  <h1 className="display-1 proj-heading-font">Register</h1>
                  <h6 className="proj-heading-font">New User?</h6>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form>
                    <div className="col-md-auto py-5">
                      <label for="exampleInputFirstName1" className="form-label proj-label-font proj-label-color">First Name</label>
                      <input onChange={(e) => setFirstName(e.target.value)}
                          type="text"
                          value={firstName}
                          className="form-control mx-auto w-50" />
                    </div>
                    <div className="col-md-auto py-5">
                      <label for="exampleInputLastName1" className="form-label proj-label-font proj-label-color">Last Name</label>
                      <input onChange={(e) => setLastName(e.target.value)}
                          type="text"
                          value={lastName}
                          className="form-control mx-auto w-50" />
                    </div>
                      <div className="col-md-auto py-5">
                        <label for="exampleInputUsername1" className="form-label proj-label-font proj-label-color">Username</label>
                        <input onChange={(e) => setUsername(e.target.value)}
                          type="text"
                          value={username}
                          className="form-control mx-auto w-50" />
                      </div>
                      <div className="col-md-auto py-5">
                        <label for="exampleInputPassword1" className="form-label proj-label-font proj-label-color">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          value={password}
                          className="form-control mx-auto w-50" />
                      </div>
                      <div className="col-md-auto py-2">
                          <h3 className="proj-heading-font proj-heading-color">Roles</h3>
                          <div className="form-check form-check-inline">
                            <div className="form-check form-check-inline">
                              <input onChange={() => setRole("USER")} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                              <label className="form-check-label proj-label-font proj-label-color" for="inlineRadio1">User</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input onChange={() => setRole("ADMIN")} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                              <label className="form-check-label proj-label-font proj-label-color" for="inlineRadio2">Admin</label>
                            </div>
                            <div className="invalid-feedback">
                              You must choose one before submitting.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-auto py-2">
                          <button className="btn proj-color-btn proj-font-btn" type="submit" onClick={signUp}>Register</button>
                        </div>
                  </form>
              </div>
              <div className="col-6 text-center border-start py-5 proj-bg-img-login">
                  <h1 className="display-1 proj-heading-font">Login</h1>
                  <h6 className="proj-heading-font">Existing User?</h6>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form>
                      <div className="col-md-auto py-5">
                        <label for="exampleInputUsername1" className="form-label proj-label-font proj-label-color">Username</label>
                        <input onChange={(e) => setUsername(e.target.value)}
                          type="text"
                          value={username}
                          className="form-control mx-auto w-50" />
                      </div>
                      <div className="col-md-auto py-5">
                        <label for="exampleInputPassword1" className="form-label proj-label-font proj-label-color">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          value={password}
                          className="form-control mx-auto w-50" />
                      </div>
                        <div className="col-md-auto">
                          <button className="btn proj-color-btn proj-font-btn" type="submit" onClick={signIn}>Login</button>
                        </div>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Login;